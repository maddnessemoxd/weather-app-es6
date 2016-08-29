export default class AutocompleteService {
  constructor() {
    this.service = new google.maps.places.AutocompleteService();
  }

  getPlacePredictions(input, callback, errorCallback) {
    try {
      this.service.getPlacePredictions({ input: input, types: ['(cities)'] }, (res) => {
        try {
          callback(this.createCitiesList(res));
        } catch (err) {
          errorCallback();
        }
      });
    } catch (err) {
      errorCallback();
    }
  }

  createCitiesList(res) {
    const citiesList = [];
    res.forEach((item) => {
      const cityObj = {};
      cityObj.address = {};
      cityObj.place_id = item.place_id;
      cityObj.address.city_name = item.terms[0].value;
      cityObj.address.country = item.terms[item.terms.length - 1].value;
      citiesList.push(cityObj);
    });
    return citiesList;
  }
}
