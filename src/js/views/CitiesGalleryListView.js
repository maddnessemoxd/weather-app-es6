import pubsub from '../pubsub';

export default class CitiesGalleryListView {
  constructor(template) {
    this.template = template;
    this.swiperWrapper = document.getElementsByClassName('citiesGalleryView')[0];
    this.render = this.render.bind(this);
  }

  render(data) {
    const collection = data[0];
    const option = data[1];
    const compiled = _.template(this.template);
    this.swiperWrapper.innerHTML = compiled({ forecast: collection, options: option });
    pubsub.emit('SwiperMainUpdate', true);
  }

}

