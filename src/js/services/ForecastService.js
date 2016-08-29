import $ from 'jquery';

export default class ForecastService {
  constructor() {
    this.unitsConfig = {
      celsius: '?units=si',
      fahrenheit: '?units=us'
    };
    this.requestForecast = this.requestForecast.bind(this);
  }

  set currentUnits(unit) {
    this.currentUnit = unit;
    this.units = this.unitsConfig[unit];
  }

  get currentUnits() {
    return this.currentUnit;
  }

  requestForecast(cities, callback) {
    const result = [];
    let req;
    cities.forEach((item) => {
      result.push(new Promise((resolve, reject) => {
        req = $.ajax({
          url: 'https://api.forecast.io/forecast/edee6ef7bc17229b1c58475b342778f3/' +
          + item.location.lat + ',' + item.location.lng + this.units,
          jsonp: 'callback',
          dataType: 'jsonp'
        });
        resolve(req);
      }));
    });

    Promise.all(result).then((res) => {
      callback(res, cities, this.currentUnit);
    }).catch((err) => {
      console.log(err);
    });
  }
}

