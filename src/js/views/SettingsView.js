export default class SettingsView {
  constructor(utils) {
    this.utils = utils;
    this.setTime = this.setTime.bind(this);
    this.setDays = this.setDays.bind(this);
    this.setStartGrade = this.setStartGrade.bind(this);
  }

  setDays(days) {
    const daysSlider = document.getElementsByClassName('range-slide-days')[0];
    daysSlider.value = days;
    this.utils.daysSliderUpdate();
  }

  setTime(time) {
    const timeSlider = document.getElementsByClassName('range-slide-update')[0];
    timeSlider.value = time;
    this.utils.minutesSliderUpdate();
  }

  setStartGrade(units) {
    const checkbox = document.getElementById(units);
    checkbox.checked = true;
  }

}

