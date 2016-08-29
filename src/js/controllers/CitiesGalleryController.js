import pubsub from '../pubsub';

export default class CitiesGalleryController {
  constructor(collection, view, itemView) {
    this.collection = collection;
    this.view = view;
    this.itemView = itemView;
    this.gradeChange = this.gradeChange.bind(this);
  }

  gradeChange(units) {
    this.view.render([this.collection.citiesCollection, units]);
    this.itemView.render([this.collection.citiesCollection, units]);
  }

  init() {
    pubsub.subscribe('GradeChanged', this.gradeChange);
    pubsub.subscribe('CitiesCollectionUpdated', this.view.render);
    pubsub.subscribe('CitiesCollectionUpdated', this.itemView.render);
  }
}
