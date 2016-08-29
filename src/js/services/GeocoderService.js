export default class GeocoderService {
  constructor() {
    this.geocoder = new google.maps.Geocoder();
    this.createGeocodedObject = this.createGeocodedObject.bind(this);
  }

  getPlaceCordinates(placeId, callback) {
    this.geocoder.geocode({ placeId: placeId }, (res) => {
      callback(this.createGeocodedObject(res[0]));
    });
  }

  createGeocodedObject(res) {
    const cityObj = {};
    cityObj.address = {};
    cityObj.location = {};
    cityObj.place_id = res.place_id;
    cityObj.address.city_name = res.address_components[0].long_name;
    cityObj.address.country = res.address_components[res.address_components.length - 1].long_name;
    cityObj.location.lat = res.geometry.location.lat();
    cityObj.location.lng = res.geometry.location.lng();
    return cityObj;
  }
}

