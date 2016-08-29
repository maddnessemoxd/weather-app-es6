import pubsub from '../pubsub';

export default class SearchController {
  constructor(collection, view) {
    this.collection = collection;
    this.view = view;
    this.searchField = document.getElementsByClassName('search__search-field')[0];
    this.getCitiesList = this.getCitiesList.bind(this);
    this.getForcast = this.getForcast.bind(this);
    this.getCheckedCities = this.getCheckedCities.bind(this);
  }

  getCitiesList(e) {
    const cityInput = e.target.value;
    this.collection.autocompleteService
      .getPlacePredictions(cityInput, this.view.renderCitiesList, this.view.showNoResultsMessage);
    this.view.searchState();
  }

  getForcast(e) {
    let checkedCities = this.getCheckedCities('search__checkbox--queryResults');
    const requestsList = [];
    if (!e.target.classList.contains('search__check--delete-city')) {
      return;
    }
    checkedCities = this.collection.deleteExistingId(checkedCities);
    checkedCities.forEach((item) => {
      requestsList.push(new Promise((resolve, reject) => {
        this.collection.geocoderService.getPlaceCordinates(item, (res) => {
          resolve(res);
        });
      }));
    });
    Promise.all(requestsList).then((res) => {
      this.collection.forecastService.requestForecast(res, this.collection.addCitiesToCollection);
      this.view.defaultState();
      this.view.hideNoResultMessage();
    });
  }

  getCheckedCities(checkboxClass) {
    const checkboxes = document.getElementsByClassName(checkboxClass);
    const checkedCitiesList = [];
    [].forEach.call(checkboxes, (item) => {
      if (item.checked) {
        checkedCitiesList.push(item.id);
      }
    });
    return checkedCitiesList;
  }

  init() {
    this.view.addCityButton.addEventListener('click', this.view.toggleSearchVisibility);
    this.view.addCityButton.addEventListener('click', this.view.toggleAddButtonVisibility);
    this.view.addCityButton.addEventListener('click', this.view.removeBasketChecked);
    this.view.addCityButton.addEventListener('click', this.view.toggleDeleteButtonVisibility);
    this.view.addCityButton.addEventListener('click', this.view.toggleNoResultsMessage);
    this.searchField.addEventListener('keyup', this.getCitiesList);
    this.view.searchResultsContainer.addEventListener('click', this.view.toggleBasketIcon);
    this.view.searchSection.addEventListener('click', this.getForcast);
    this.view.deleteButton.addEventListener('click', this.view.toggleDeleteButton);
    pubsub.subscribe('ChangeAddCityToChecked', this.view.changeAddCityToChecked);
    pubsub.subscribe('ChangeAddCityToUnChecked', this.view.changeAddCityToUnChecked);

    this.view.deleteButton.addEventListener('click', () => {
      if (!this.view.deleteButton.classList.contains('search__delete-city--checked')) {
        return;
      }
      pubsub.emit('RemoveChecked', true);
    });

    this.view.addCityButton.addEventListener('click', () => {
      if (!this.view.addCityButton.classList.contains('search__add-city--checked')) {
        return;
      }
      pubsub.emit('HideCheckboxes', true);
    });

    this.view.deleteButton.addEventListener('click', (e) => {
      if (!e.target.classList.contains('search__delete-city')) {
        return;
      }
      this.view.changeAddCityToUnChecked();
    });

    this.view.addCityButton.addEventListener('click', (e) => {
      if (!e.target.classList.contains('search__check--add-city')) {
        return;
      }
      pubsub.emit('DeleteCities', true);
      this.view.defaultState();
    });
  }
}

