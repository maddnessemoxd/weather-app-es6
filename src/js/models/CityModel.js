export default class CityModel {
  constructor() {

  }

  set placeId(id) {
    this.place_id = id;
  }

  set cityName(cityName) {
    this.city_name = cityName;
  }

  set offset(offset) {
    this.city_offset = offset;
  }

  set currentTemperature(temperature) {
    this.current_temperature = temperature;
  }

  set currentTime(time) {
    this.time = time;
  }

  set currentIcon(icon) {
    this.current_icon = icon;
  }

  set summary(summary) {
    this.current_summary = summary;
  }

  set sunRise(sunrise) {
    this.sunrise_time = sunrise;
  }

  set sunSet(sunset) {
    this.sunset_time = sunset;
  }

  set moonPhase(phase) {
    this.moon_phase = phase;
  }

  set currentMonth(month) {
    this.current_month = month;
  }

  set currentDay(day) {
    this.current_day = day;
  }

  set currentDate(date) {
    this.current_date = date;
  }

  set setHumidity(humidity) {
    this.humidity = humidity;
  }

  set setWindSpeed(windspeed) {
    this.windspeed = windspeed;
  }

  set setHourly(hourly) {
    this.hourly = hourly;
  }

  set setDaily(daily) {
    this.daily = daily;
  }

}

