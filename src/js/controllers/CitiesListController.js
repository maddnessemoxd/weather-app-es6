import pubsub from '../pubsub';

export default class CitiesListController {
  constructor(collection, view) {
    this.collection = collection;
    this.view = view;
    this.view.toggleAddCityButton = this.view.toggleAddCityButton.bind(view);
    this.deleteCities = this.deleteCities.bind(this);
    this.citiesForDeleting = this.citiesForDeleting.bind(this);
    this.gradeChange = this.gradeChange.bind(this);
  }

  deleteCities() {
    const citiesForDeleting = this.citiesForDeleting('.cities-list__checkbox');
    this.collection.deleteCities(citiesForDeleting);
  }

  citiesForDeleting(checkboxesClass) {
    const checkboxes = document.querySelectorAll(checkboxesClass + ':checked');
    return [].map.call(checkboxes, (item) => {
      return item.id;
    });
  }

  gradeChange(units) {
    this.view.render([this.collection.citiesCollection, units]);
  }

  init() {
    pubsub.subscribe('CitiesCollectionUpdated', this.view.render);
    pubsub.subscribe('ToggleCheckboxes', this.view.toggleCheckboxes);
    pubsub.subscribe('HideCheckboxes', this.view.hideCheckboxes);
    pubsub.subscribe('RemoveChecked', this.view.removeChecked);
    pubsub.subscribe('DeleteCities', this.deleteCities);
    pubsub.subscribe('GradeChanged', this.gradeChange);
    this.view.citiesListContainer.addEventListener('click', this.view.toggleAddCityButton);
    this.view.citiesListContainer.addEventListener('click', this.view.slideTo);
  }
}


