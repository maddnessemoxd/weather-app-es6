import pubsub from '../pubsub';
import _ from 'lodash';

export default class CitiesGalleryItemView {
  constructor(template) {
    this.template = template;
    this.render = this.render.bind(this);
  }

  render(data) {
    const collection = data[0];
    const option = data[1];
    const compiled = _.template(this.template);
    const overviewContainers = document.getElementsByClassName('overview-for-day-container');
    [].map.call(overviewContainers, (item, index) => {
      item.innerHTML = compiled({ forecast: collection[index].hourly, options: option });
    });
    pubsub.emit('SwiperOverviewUpdate', true);
  }
}

