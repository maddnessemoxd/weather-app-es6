import pubsub from '../pubsub';
import $ from 'jquery';

export default class SettingsController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.settingsContainer = document.getElementsByClassName('sidebar-section--settings')[0];
    this.daysContainer = document.getElementsByClassName('container--options-days')[0];
    this.minutesContainer = document.getElementsByClassName('container--options-minutes')[0];
    this.gradeHandler = this.gradeHandler.bind(this);
  }

  gradeHandler(e) {
    if (e.target.name !== 'grade') {
      return;
    }
    this.model.service.currentUnits = e.target.id;
    this.model.units = e.target.id;
    this.model.updateDB(this.model.settings);
    pubsub.emit('GradeChanged', e.target.id);
  }

  init() {
    this.settingsContainer.addEventListener('click', this.gradeHandler);

    $(this.daysContainer).delegate('input', 'input', (e) => {
      this.model.days = e.target.value;
      this.model.updateDB(this.model.settings);
      pubsub.emit('ShowDays', e.target.value);
    });

    $(this.minutesContainer).delegate('input', 'input', (e) => {
      this.model.time = e.target.value;
      this.model.updateDB(this.model.settings);
    });

    pubsub.subscribe('DaysChanged', this.view.setDays);
    pubsub.subscribe('TimeChanged', this.view.setTime);
    pubsub.subscribe('StartGrade', this.view.setStartGrade);
  }
}

