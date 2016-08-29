import pubsub from '../pubsub';

export default class SettingsModel {
  constructor(service) {
    this.service = service;
    this.settings = {};
  }

  setStartSettings(units, days, time) {
    this.units = units;
    this.days = days;
    this.time = time;
    this.service.currentUnits = units;
    pubsub.emit('StartGrade', units);
    pubsub.emit('DaysChanged', days);
    pubsub.emit('TimeChanged', time);
  }

  connectToDB() {
    const dbSettings = JSON.parse(localStorage.getItem('weatherAppSettings'));
    if (dbSettings) {
      this.setStartSettings(dbSettings.units, dbSettings.days, dbSettings.time);
    } else {
      const units = document.querySelector('input[name = grade]:checked').id;
      const days = document.getElementsByClassName('range-slide-days')[0].value;
      const time = document.getElementsByClassName('range-slide-update')[0].value;
      this.setToDB(units, days, time);
      this.setStartSettings(units, days, time);
      this.updateDB = this.updateDB.bind(this);
    }
  }

  setToDB(units, days, time) {
    const settings = {
      units: units,
      days: days,
      time: time
    };
    localStorage.setItem('weatherAppSettings', JSON.stringify(settings));
  }

  updateDB(settings) {
    localStorage.setItem('weatherAppSettings', JSON.stringify(settings));
  }

  set units(units) {
    this.settings.units = units;
  }

  set days(days) {
    this.settings.days = days;
  }

  set time(time) {
    this.settings.time = time;
  }

  init() {
    this.connectToDB();
  }
}
