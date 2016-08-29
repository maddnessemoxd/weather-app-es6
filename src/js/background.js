import $ from 'jquery';
import pubsub from './pubsub';

export default class BackgroundAnimation {
  constructor(slider) {
    this.slider = slider;
    this.setBG = this.setBG.bind(this);
    this.setBGs = this.setBGs.bind(this);
    this.setFirstBG = this.setFirstBG.bind(this);
    this.setPrecipeAnimation = this.setPrecipeAnimation.bind(this);
  }
  setBGs() {
    this.slider.mainSwiper.on('onSlideChangeEnd', () => {
      const activeSlide = $('.swiper-slide-active');
      const currentTime = activeSlide.find('.main-info__time').text().slice(0, -3);
      const currentTemperature = parseInt(activeSlide.find('.main-info__degree').text(), 10);
      const weatherIcon = activeSlide.find('.main-info__main-weather-icon').attr('class').split(' ')[1];
      this.setBG(currentTime, currentTemperature);
      this.setPrecipeAnimation(weatherIcon);
    });
  }

  setFirstBG(cities) {
    if (cities[0].length === 0) {
      $('.page').css('background', '#166eef');
      $('.weather-animation').removeClass('weather-animation--rain weather-animation--snow');
    } else {
      const activeSlide = $('.swiper-slide-active');
      const currentTime = activeSlide.find('.main-info__time').text().slice(0, -3);
      const currentTemperature = parseInt(activeSlide.find('.main-info__degree').text(), 10);
      const weatherIcon = activeSlide.find('.main-info__main-weather-icon').attr('class').split(' ')[1];
      this.setBG(currentTime, currentTemperature);
      this.setPrecipeAnimation(weatherIcon);
    }
  }

  setBG(currentTime, currentTemperature) {
    let minTemp;
    let seasonColor;
    let background;
    const page = $('.page');
    const nightColor = '#080b22';
    const id = $('.settings__radio:checked').prop('id');

    if (id === 'celsius') {
      minTemp = 20;
    } else {
      minTemp = 68;
    }

    if (currentTemperature < minTemp) {
      seasonColor = '#166eef';
    } else {
      seasonColor = '#ff7200';
    }

    if (currentTime >= 6 && currentTime < 10) {
      background = 'linear-gradient(to right, ' + nightColor + ' 0%, ' + seasonColor + ')';
    }
    if (currentTime >= 10 && currentTime < 17) {
      background = 'linear-gradient(to right, ' + seasonColor + ' 0%, ' + seasonColor + ')';
    }
    if (currentTime >= 17 && currentTime < 21) {
      background = 'linear-gradient(to right, ' + seasonColor + ' 0%, ' + nightColor + ')';
    }
    if ((currentTime >= 21 && currentTime < 23.59) || (currentTime >= 0 && currentTime < 6)) {
      background = 'linear-gradient(to right, ' + nightColor + ' 0%, ' + nightColor + ')';
    }
    $(page).css('background', background);
  }

  setPrecipeAnimation(icon) {
    const animationContainer = $('.weather-animation');

    if (icon === 'icon-rain') {
      animationContainer.addClass('weather-animation--rain');
    } else {
      animationContainer.removeClass('weather-animation--rain');
    }

    if (icon === 'icon-snow') {
      animationContainer.addClass('weather-animation--snow');
    } else {
      animationContainer.removeClass('weather-animation--snow');
    }
  }


  init() {
    this.setBGs();
    pubsub.subscribe('CitiesCollectionUpdated', this.setFirstBG);
  }
}

