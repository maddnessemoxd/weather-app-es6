import pubsub from '../pubsub';

export default class DailyForecastController {
  constructor(model, view, collection) {
    this.model = model;
    this.view = view;
    this.collection = collection;
    this.gradeChange = this.gradeChange.bind(this);
  }

  gradeChange(units) {
    this.view.render([this.collection.citiesCollection, units]);
  }

  init() {
    pubsub.subscribe('CitiesCollectionUpdated', this.view.render);
    pubsub.subscribe('GradeChanged', this.gradeChange);
    pubsub.subscribe('ShowDays', this.view.updateVisibility);
    pubsub.subscribe('DaysChanged', (value) => {
      this.view.setDays = value;
    });
  }
}

