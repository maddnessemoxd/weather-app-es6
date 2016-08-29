var pubsub = require('./pubsub');
var $ = require('jquery');

function Sun(slider) {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;

  var self = this;
  this.slider = slider;
  this.prevPhase = 0;
  var holder = document.getElementsByClassName('sun__holder')[0];
  var x = 0;
  var y = 0;
  var cWidth = document.body.clientWidth;
  var cHeight = document.body.clientHeight / 2;
  var radius = 0.5 * cHeight + cWidth * cWidth / (8 * cHeight);
  var alfa = 0.3 * Math.acos((radius - cHeight) / radius);
  var gamma = Math.asin(cWidth / (radius * 2));
  var fullAngle = alfa + 2 * gamma;
  var beta = Math.PI / 2 - fullAngle / 2;
  var t;
  var timerID;
  var tValue;

  function moveSun(sunrise, sunset, current, phase) {
    t = phase;
    tValue = (current - sunrise) / (sunset - sunrise);
    self.prevPhase = parseFloat(tValue);
    function draw() {
      x = cWidth / 2 - radius * Math.cos(beta + fullAngle * t) - 100;
      y = radius + cHeight / 2 - radius * Math.sin(beta + fullAngle * t) + 100;
      holder.style.left = x + 'px';
      holder.style.top = y + 'px';
      timerID = requestAnimationFrame(draw);
      if (phase > tValue) {
        if (t < tValue) {
          t = 0;
          cancelAnimationFrame(timerID);
        }
        t -= 0.005;
      }
      if (phase < tValue) {
        if (t > tValue) {
          t = 0;
          cancelAnimationFrame(timerID);
        }
        t += 0.005;
      }
    }

    draw();
  }

  this.setDefaultSun = function () {
    cancelAnimationFrame(timerID);
    var activeSlide = $('.swiper-slide-active');
    var currentTime = activeSlide.find('.main-info__time').text().slice(0, -3);
    var sunriseTime = activeSlide.find('.sunrise').text().slice(0, -3);
    var sunsetTime = activeSlide.find('.sunset').text().slice(0, -3);
    var phase = parseFloat(((currentTime - sunriseTime) / (sunsetTime - sunriseTime)).toFixed(1));
    if (phase === self.prevPhase) {
      return;
    }
    moveSun(sunriseTime, sunsetTime, currentTime, self.prevPhase);
  };

  this.listenToCityChange = function () {
    self.slider.mainSwiper.on('onSlideChangeEnd', function () {
      cancelAnimationFrame(timerID);
      var activeSlide = $('.swiper-slide-active');
      var currentTime = activeSlide.find('.main-info__time').text().slice(0, -3);
      var sunriseTime = activeSlide.find('.sunrise').text().slice(0, -3);
      var sunsetTime = activeSlide.find('.sunset').text().slice(0, -3);
      moveSun(sunriseTime, sunsetTime, currentTime, self.prevPhase);
    });
  };

  this.toggleSun = function (cities) {
    if (cities[0].length === 0) {
      moveSun(1, 10, 1, self.prevPhase);
    } else {
      self.setDefaultSun();
    }
  };

  this.init = function () {
    self.listenToCityChange();
    pubsub.subscribe('CitiesCollectionUpdated', self.toggleSun);
  };
}

module.exports = Sun;

