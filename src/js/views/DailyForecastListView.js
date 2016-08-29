import _ from 'lodash';

export default class DailyForecastListView {
  constructor(template) {
    this.template = template;
    this.render = this.render.bind(this);
    this.updateVisibility = this.updateVisibility.bind(this);
  }

  set setDays(days) {
    this.days = days;
  }

  render(data) {
    const collection = data[0];
    const option = data[1];
    const compiled = _.template(this.template);
    const container = document.getElementsByClassName('temperature-for-week');
    [].map.call(container, (item, index) => {
      item.innerHTML = compiled({ forecast: collection[index].daily, options: option });
    });
    this.updateVisibility(this.days);
  }

  updateVisibility(value) {
    this.setDays = value;
    const updateWeekLength = 7 - value;
    const container = document.getElementsByClassName('temperature-for-week');
    [].forEach.call(container, (item) => {
      if (updateWeekLength === 0) {
        [].forEach.call(item.children, (current) => {
          current.style.display = 'flex';
        });
        return;
      }

      const visible = [].slice.call(item.children, 0, -updateWeekLength);
      const hidden = [].slice.call(item.children, -updateWeekLength);

      visible.forEach((item) => {
        item.style.display = 'flex';
      });

      hidden.forEach((item) => {
        item.style.display = 'none';
      });
    });
  }
}


