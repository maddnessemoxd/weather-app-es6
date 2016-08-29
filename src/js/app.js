import 'babel-polyfill';

//STYLES
import '../css/swiper.min.css';
import '../css/rangeslider.css';
import '../css/jquery.mCustomScrollbar.css';
import '../css/iconmoon.css';
import '../scss/app.scss';

//COLLECTION
import CitiesCollection from './collections/CitiesCollection';

//MODELS
import SettingsModel from './models/SettingsModel';
import CityModel from './models/CityModel';

//CONTROLLERS
import CitiesGalleryController from './controllers/CitiesGalleryController';
import SearchController from './controllers/SearchController';
import SettingsController from './controllers/SettingsController';
import CitiesListController from './controllers/CitiesListController';
import DailyForecastController from './controllers/DailyForecastController';

//VIEWS
import CitiesGalleryListView from './views/CitiesGalleryListView';
import CitiesGalleryItemView from './views/CitiesGalleryItemView';
import SearchView from './views/SearchView';
import CitiesListView from './views/CitiesListView';
import DailyForecastListView from './views/DailyForecastListView';
import SettingsView from './views/SettingsView';

//UTILS
import UtilsSwiper from './utils/UtilsSwiper';
import UtilsRangeslider from './utils/UtilsRangeslider';
import UtilsScrollBar from './utils/UtilsScrollBar';
import BackgroundAnimation from './background';
import Sun from './sun';

//SERVICES
import AutocompleteService from './services/AutocompleteService';
import ForecastService from './services/ForecastService';
import GeocoderService from './services/GeocoderService';

//TEMPLATES
import NoResultMessage from './views/templates/NoResultMessage.html';
import SearchTemplate from './views/templates/SearchTemplate.html';
import CitiesListTemplate from './views/templates/CitiesListTemplate.html';
import CitiesGalleryListTemplate from './views/templates/CitiesGalleryListTemplate.html';
import CitiesGalleryItemTemplate from './views/templates/CitiesGalleryItemTemplate.html';
import DailyForecastListTemplate from './views/templates/DailyForecastListTemplate.html';

class WeatherApp {
  constructor() {
    this.UtilsSwiper = new UtilsSwiper();
    this.UtilsRangeslider = new UtilsRangeslider();
    this.UtilsScrollBar = new UtilsScrollBar();
    this.Sun = new Sun(this.UtilsSwiper);
    this.BackgroundAnimation = new BackgroundAnimation(this.UtilsSwiper);
    this.AutocompleteService = new AutocompleteService();
    this.GeocoderService = new GeocoderService();
    this.ForecastService = new ForecastService();
    this.CitiesCollection = new CitiesCollection(this.AutocompleteService,
      this.GeocoderService, this.ForecastService, CityModel);
    this.DailyForecastListView = new DailyForecastListView(DailyForecastListTemplate);
    this.SettingsView = new SettingsView(this.UtilsRangeslider);
    this.SettingsModel = new SettingsModel(this.ForecastService);
    this.CitiesGalleryItemView = new CitiesGalleryItemView(CitiesGalleryItemTemplate);
    this.CitiesGalleryListView = new CitiesGalleryListView(CitiesGalleryListTemplate);
    this.SearchView = new SearchView(SearchTemplate, NoResultMessage);
    this.CitiesListView = new CitiesListView(CitiesListTemplate, this.UtilsSwiper);
    this.CitiesListController = new CitiesListController(this.CitiesCollection, this.CitiesListView);
    this.CitiesGalleryController = new CitiesGalleryController(this.CitiesCollection, this.CitiesGalleryListView,
      this.CitiesGalleryItemView);
    this.SearchController = new SearchController(this.CitiesCollection, this.SearchView);
    this.SettingsController = new SettingsController(this.SettingsModel, this.SettingsView);
    this.DailyForecastController = new DailyForecastController(this.SettingsModel, this.DailyForecastListView,
      this.CitiesCollection);
  }

  init() {
    this.UtilsSwiper.init();
    this.CitiesListController.init();
    this.CitiesGalleryController.init();
    this.SearchController.init();
    this.DailyForecastController.init();
    this.SettingsController.init();
    this.SettingsModel.init();
    this.Sun.init();
    this.BackgroundAnimation.init();
    this.CitiesCollection.init();
    this.UtilsRangeslider.minutesSliderUpdate();
    this.UtilsRangeslider.daysSliderUpdate();
  }
}

const WA = new WeatherApp();

WA.init();
