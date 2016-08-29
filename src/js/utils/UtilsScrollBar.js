import $ from 'jquery';
require('jquery-mousewheel')($);
require('malihu-custom-scrollbar-plugin')($);

export default class UtilsScrollBar {
  constructor() {
    $('.scroll-container').mCustomScrollbar({
      axis:'yx',
      setHeight:'100%'
    });
  }
}


