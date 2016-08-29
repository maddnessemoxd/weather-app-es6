import $ from 'jquery';
import 'rangeslider.js';
require('jquery-mousewheel')($);
require('malihu-custom-scrollbar-plugin')($);

export default class UtilsRangeslider {
  constructor() {
    $('.range-slide-days').rangeslider({
      polyfill: false,
      onSlide: (position, value) => {
        $('#days').html(value + ' days');
      }
    });

    $('.range-slide-update').rangeslider({
      polyfill: false,
      onSlide: (position, value) => {
        $('#minutes').html(value + ' min');
      }
    });

    this.daysSliderUpdate = this.daysSliderUpdate.bind(this);
    this.minutesSliderUpdate = this.minutesSliderUpdate.bind(this);
  }

  daysSliderUpdate() {
    $('.range-slide-days').rangeslider('update', true);
  }

  minutesSliderUpdate() {
    $('.range-slide-update').rangeslider('update', true);
  }
}


