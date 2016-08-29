import pubsub from '../pubsub';

export default class CitiesCollection {
  constructor(autocompleteService, geocoderService, forecastService, model) {
    this.forecastService = forecastService;
    this.autocompleteService = autocompleteService;
    this.geocoderService = geocoderService;
    this.Model = model;
    this.citiesCollection = [];
    this.addCitiesToCollection = this.addCitiesToCollection.bind(this);
    this.createTemperatureObject = this.createTemperatureObject.bind(this);
    this.createHourlyCollection = this.createHourlyCollection.bind(this);
    this.convertCelsiusToFahrenheit = this.convertCelsiusToFahrenheit.bind(this);
    this.convertFahrenheitToCelsius = this.convertFahrenheitToCelsius.bind(this);
    this.calcTime = this.calcTime.bind(this);
    this.calcMoonPhase = this.calcMoonPhase.bind(this);
    this.calcCurrentDay = this.calcCurrentDay.bind(this);
    this.calcCurrentMonth = this.calcCurrentMonth.bind(this);
    this.dailyCurrentDay = this.dailyCurrentDay.bind(this);
    this.createDailyCollection = this.createDailyCollection.bind(this);
    this.setCollectionToDB = this.setCollectionToDB.bind(this);
  }

  set appendCities(arr) {
    this.citiesCollection = this.citiesCollection.concat(arr);
    this.setCollectionToDB(this.citiesCollection);
    pubsub.emit('CitiesCollectionUpdated', [this.citiesCollection, this.forecastService.currentUnits]);
  }

  setCollectionToDB(collection) {
    localStorage.setItem('forecast', JSON.stringify(collection));
  }

  deleteCities(checkedIds) {
    this.citiesCollection = this.citiesCollection.filter((city) => {
      return !checkedIds.some((id) => {
        return id === city.place_id;
      });
    });
    this.setCollectionToDB(this.citiesCollection);
    pubsub.emit('CitiesCollectionUpdated', [this.citiesCollection, this.forecastService.currentUnits]);
  }

  deleteExistingId(arr) {
    return arr.filter((city) => {
      return !this.citiesCollection.some((collectionCity) => {
        return collectionCity.place_id === city;
      });
    });
  }

  convertCelsiusToFahrenheit(grade) {
    return (grade * 9 / 5 + 32).toFixed();
  }

  convertFahrenheitToCelsius(grade) {
    return ((grade - 32) * 5 / 9).toFixed();
  }

  calcTime(type, offset, time) {
    let current;
    if (type === 'sunRiseSet') {
      current = new Date(1000 * time);
    } else {
      current = new Date();
    }
    const difference = offset * 60 + current.getTimezoneOffset();
    const dateIncludeOffset = new Date(current.getTime() + difference * 60 * 1000);
    return dateIncludeOffset.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }

  calcMoonPhase(phase) {
    if (0 < phase && phase <= 0.25) {
      return 'young-moon';
    } else if (0.25 < phase && phase <= 0.5) {
      return 'grow-moon';
    } else if (0.5 < phase && phase <= 0.75) {
      return 'full-moon';
    } else if (0.75 < phase && phase <= 1) {
      return 'old-moon';
    }
  }

  calcCurrentMonth() {
    const date = new Date();
    const month = date.getMonth();
    const list = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER'];
    return list[month];
  }

  calcCurrentDay() {
    const date = new Date();
    const day = date.getDay();
    const list = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    return list[day];
  }

  createTemperatureObject(units, temperature) {
    let result;
    if (units === 'celsius') {
      result = {
        celsius: parseInt(temperature, 10).toFixed(),
        fahrenheit: this.convertCelsiusToFahrenheit(temperature)
      };
    } else if (units === 'fahrenheit') {
      result = {
        celsius: this.convertFahrenheitToCelsius(temperature),
        fahrenheit: parseInt(temperature, 10).toFixed()
      };
    }
    return result;
  }

  createHourlyCollection(units, hourly) {
    return hourly.map((item) => {
      return {
        icon: item.icon,
        time: (() => {
          const date = new Date(item.time * 1000);
          return date.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' });
        })(),
        temperature: this.createTemperatureObject(units, item.temperature)
      };
    });
  }

  createDailyCollection(units, daily) {
    return daily.map((item, index) => {
      return {
        day: this.dailyCurrentDay(item.time, index),
        icon: item.icon,
        temperatureMin: this.createTemperatureObject(units, item.temperatureMin),
        temperatureMax: this.createTemperatureObject(units, item.temperatureMax)
      };
    });
  }

  dailyCurrentDay(time) {
    const date = new Date(time * 1000);
    const current = new Date();
    if (current.toLocaleString('en-GB', { weekday: 'short' }) === date.toLocaleString('en-GB', { weekday: 'short' })) {
      return 'TODAY';
    } else {
      return date.toLocaleString('en-GB', { weekday: 'short' });
    }
  }

  addCitiesToCollection(forecast, citiesList, units) {
    this.appendCities = forecast.map((item, index) => {
      const model = new this.Model();
      model.currentTemperature = this.createTemperatureObject(units, forecast[index].currently.temperature);
      model.placeId = citiesList[index].place_id;
      model.offset = forecast[index].offset;
      model.time = this.calcTime('offsetTime', forecast[index].offset);
      model.sunRise = this.calcTime('sunRiseSet', forecast[index].offset, forecast[index].daily.data[0].sunriseTime);
      model.sunSet = this.calcTime('sunRiseSet', forecast[index].offset, forecast[index].daily.data[0].sunsetTime);
      model.currentIcon = forecast[index].currently.icon;
      model.cityName = citiesList[index].address.city_name;
      model.summary = forecast[index].currently.summary;
      model.moonPhase = this.calcMoonPhase(forecast[index].daily.data[0].moonPhase);
      model.currentMonth = this.calcCurrentMonth();
      model.currentDay = this.calcCurrentDay();
      model.currentDate = new Date().getDate();
      model.setHumidity = (forecast[index].currently.humidity * 100).toFixed();
      model.setWindSpeed = (forecast[index].currently.windSpeed).toFixed();
      model.setHourly = this.createHourlyCollection(units, forecast[index].hourly.data.slice(24));
      model.setDaily = this.createDailyCollection(units, forecast[index].daily.data.slice(0, -1));
      return model;
    });
  }

  checkDB() {
    const forecast = JSON.parse(localStorage.getItem('forecast')) || [];
    this.appendCities = forecast;
  }

  init() {
    this.checkDB();
  }
}

