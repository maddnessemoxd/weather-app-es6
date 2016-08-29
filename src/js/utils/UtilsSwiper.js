import Swiper from 'swiper';
import $ from 'jquery';
import pubsub from '../pubsub';

export default class UtilsSwiper {
  constructor() {
    this.mainSwiper = new Swiper('.swiper-container-main', {
      pagination: '.swiper-pagination-main',
      paginationClickable: true,
      spaceBetween: 50,
      loop: false,
      grabCursor: true,
      touchMoveStopPropagation: true
    });

    this.swiperOverview = new Swiper('.swiper-container-overview', {
      scrollbar: '.swiper-scrollbar',
      slideClass: '.overview-for-day__slide-item',
      scrollbarHide: false,
      scrollbarDraggable: true,
      slidesPerView: '4',
      centeredSlides: false,
      spaceBetween: 5,
      nested: true,
      touchMoveStopPropagation: true
    });
    this.togglePaginationVisibility = this.togglePaginationVisibility.bind(this);
    this.updateMain = this.updateMain.bind(this);
    this.updateOverview = this.updateOverview.bind(this);
    $('.swiper-pagination-main').hide();
  }

  updateMain() {
    this.mainSwiper.update(true);
  }

  updateOverview() {
    return new Swiper('.swiper-container-overview', {
      scrollbar: '.swiper-scrollbar',
      scrollbarHide: false,
      scrollbarDraggable: true,
      slidesPerView: '4',
      centeredSlides: false,
      spaceBetween: 5,
      nested: true,
      touchMoveStopPropagation: true
    });
  }

  togglePaginationVisibility(data) {
    const cities = data[0];
    if (cities.length === 0) {
      $('.swiper-pagination-main').hide();
    } else {
      $('.swiper-pagination-main').show();
    }
  }

  init() {
    pubsub.subscribe('CitiesCollectionUpdated', this.togglePaginationVisibility);
    pubsub.subscribe('SwiperMainUpdate', this.updateMain);
    pubsub.subscribe('SwiperOverviewUpdate', this.updateOverview);
  }
}


