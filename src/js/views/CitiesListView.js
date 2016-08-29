import _ from 'lodash';
import pubsub from '../pubsub';

export default class CitiesListView {
  constructor(template, utils) {
    this.template = template;
    this.utils = utils;
    this.render = this.render.bind(this);
    this.toggleCheckboxes = this.toggleCheckboxes.bind(this);
    this.hideCheckboxes = this.hideCheckboxes.bind(this);
    this.removeChecked = this.removeChecked.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.slideTo = this.slideTo.bind(this);
    this.citiesListContainer = document.getElementsByClassName('mCSB_container')[0];
  }

  slideTo(e) {
    if (!e.target.classList.contains('cities-list__slide')) {
      return;
    }
    const index  = e.target.getAttribute('data-index');
    this.utils.mainSwiper.slideTo(index, 500, true);
  }

  render(data) {
    const container = document.getElementsByClassName('mCSB_container')[0];
    const collection = data[0];
    const option = data[1];
    const compiled = _.template(this.template);
    container.innerHTML = compiled({forecast: collection, options: option});
  }

  toggleCheckboxes() {
    const labels = document.getElementsByClassName('cities-list__city-check');
    [].forEach.call(labels, (item) => {
      item.classList.toggle('hide');
    });
  }

  hideCheckboxes() {
    const labels = document.getElementsByClassName('cities-list__city-check');
    [].forEach.call(labels, (item) => {
      item.classList.add('hide');
    });
  }

  removeChecked() {
    const checkboxes = document.getElementsByClassName('cities-list__checkbox');
    [].forEach.call(checkboxes, (checkbox) => {
      checkbox.checked = false;
    });
  }

  isChecked(checkboxClass) {
    const checkboxes = document.getElementsByClassName(checkboxClass);
    return [].some.call(checkboxes, checkbox => {
      return checkbox.checked;
    });
  }

  toggleAddCityButton(e) {
    if (!e.target.classList.contains('cities-list__checkbox')) {
      return;
    }
    const checked = this.isChecked('cities-list__checkbox');
    if (checked) {
      pubsub.emit('ChangeAddCityToChecked', true);
    } else {
      pubsub.emit('ChangeAddCityToUnChecked', true);
    }
  }
}


