import _ from 'lodash';
import pubsub from '../pubsub';

export default class SearchView {
  constructor(template, message) {
    this.template = template;
    this.noResultMessage = message;
    this.searchField = document.getElementsByClassName('search__search-field')[0];
    this.searchResultsContainer = document.getElementsByClassName('search__results-container')[0];
    this.deleteButton = document.getElementsByClassName('search__delete-button')[0];
    this.addCityButton = document.getElementsByClassName('search__add-button')[0];
    this.searchSection = document.getElementsByClassName('sidebar-section--search')[0];
    this.renderCitiesList = this.renderCitiesList.bind(this);
    this.toggleSearchVisibility = this.toggleSearchVisibility.bind(this);
    this.toggleNoResultsMessage = this.toggleNoResultsMessage.bind(this);
    this.showNoResultsMessage = this.showNoResultsMessage.bind(this);
    this.toggleBasketIcon = this.toggleBasketIcon.bind(this);
    this.toggleAddButtonVisibility = this.toggleAddButtonVisibility.bind(this);
    this.toggleDeleteButtonVisibility = this.toggleDeleteButtonVisibility.bind(this);
    this.removeBasketChecked = this.removeBasketChecked.bind(this);
    this.toggleDeleteButton = this.toggleDeleteButton.bind(this);
    this.changeAddCityToChecked = this.changeAddCityToChecked.bind(this);
    this.changeAddCityToUnChecked = this.changeAddCityToUnChecked.bind(this);
    this.hideNoResultMessage = this.hideNoResultMessage.bind(this);
  }

  changeAddCityToChecked() {
    this.addCityButton.classList.remove('search__add-city');
    this.addCityButton.classList.add('search__check--add-city');
  }

  changeAddCityToUnChecked() {
    this.addCityButton.classList.remove('search__check--add-city');
    this.addCityButton.classList.add('search__add-city');
  }

  toggleDeleteButton() {
    if (!this.searchResultsContainer.classList.contains('hide')) {
      return;
    }
    this.deleteButton.classList.toggle('search__delete-city--checked');
    pubsub.emit('ToggleCheckboxes', true);
  }

  renderCitiesList(cities) {
    const compiledTemplate = _.template(this.template);
    this.searchResultsContainer.innerHTML = compiledTemplate({ queryResults: cities });
  }

  toggleSearchVisibility(e) {
    if (e.target.classList.contains('search__check--add-city')) {
      return;
    }
    this.searchField.classList.toggle('hide');
    this.searchField.value = '';
  }

  toggleAddButtonVisibility(e) {

    if (e.target.classList.contains('search__check--add-city')) {
      return;
    }
    this.addCityButton.classList.toggle('search__add-city--checked');
  }

  removeBasketChecked() {
    this.deleteButton.classList.remove('search__delete-city--checked');
  }

  toggleNoResultsMessage(e) {
    if (e.target.classList.contains('search__check--add-city')) {
      return;
    }
    this.searchResultsContainer.classList.toggle('hide');
    this.searchResultsContainer.innerHTML = this.noResultMessage;
  }

  hideNoResultMessage() {
    this.searchResultsContainer.classList.toggle('hide');
    this.searchResultsContainer.innerHTML = this.noResultMessage;
  }

  showNoResultsMessage() {
    this.searchResultsContainer.innerHTML = this.noResultMessage;
  }

  toggleDeleteButtonVisibility() {
    this.deleteButton.classList.remove('search__check--delete-city');
    this.deleteButton.classList.add('search__delete-city');
  }

  isChecked(checkboxClass) {
    const checkboxes = document.getElementsByClassName(checkboxClass);
    return [].some.call(checkboxes, checkbox => {
      return checkbox.checked;
    });
  }

  toggleBasketIcon() {
    const checked = this.isChecked('search__checkbox--queryResults');
    if (checked) {
      this.deleteButton.classList.add('search__check--delete-city');
      this.deleteButton.classList.remove('search__delete-city');
    } else {
      this.deleteButton.classList.remove('search__check--delete-city');
      this.deleteButton.classList.add('search__delete-city');
    }
  }

  defaultState() {
    this.searchField.val = '';
    this.searchField.classList.add('hide');
    this.addCityButton.classList.remove('search__add-city--checked');
    this.addCityButton.classList.remove('search__check--add-city');
    this.addCityButton.classList.add('search__add-city');
    this.deleteButton.classList.add('search__delete-city');
    this.deleteButton.classList.remove('search__check--delete-city');
    this.searchResultsContainer.innerHTML = '';
  }

  searchState() {
    if (!this.deleteButton.classList.contains('search__check--delete-city')) {
      return;
    }
    this.deleteButton.classList.remove('search__check--delete-city');
    this.deleteButton.classList.add('search__delete-city');
  }
}

