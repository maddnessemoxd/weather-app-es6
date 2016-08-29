/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

import Collection from '../js/collections/CitiesCollection';
import Forecast from '../js/services/ForecastService';
import Auto from '../js/services/AutocompleteService';
import Geo from '../js/services/GeocoderService';
import Model from '../js/models/CityModel';

describe('City Model test', () => {
  let collection;
  let forecast;
  let auto;
  let geo;
  let model;

  beforeEach(() => {
    window.google = {
      maps: {
        Geocoder: function () {
          return {};
        },
        places: {
          AutocompleteService: function () {
            return {};
          }
        }
      }
    };

    forecast = new Forecast();
    auto = new Auto();
    geo = new Geo();

    collection = new Collection(auto, geo, forecast, Model);
    auto.service.getPlacePredictions = function () {};
  });

  it('should exist', () => {
    expect(collection).to.exist;
  });

  it('should delete forecast correctly', () => {
    let ids = ["ChIJRcbZaklDXz4RYlEphFBu5r0"];
    let cityModel = [
      {
        "current_temperature": {
          "celsius": "39",
          "fahrenheit": "102"
        },
        "place_id": "ChIJRcbZaklDXz4RYlEphFBu5r0",
        "city_offset": 4,
        "time": "17:03",
        "sunrise_time": "05:51",
        "sunset_time": "19:00",
        "current_icon": "clear-day",
        "city_name": "Dubai",
        "current_summary": "Clear",
        "moon_phase": "young-moon",
        "current_month": "AUGUST",
        "current_day": "TUESDAY",
        "current_date": 9,
        "humidity": "38",
        "windspeed": "6",
        "hourly": [
          {
            "icon": "partly-cloudy-day",
            "time": "16:00",
            "temperature": {
              "celsius": "38",
              "fahrenheit": "101"
            }
          },
          {
            "icon": "partly-cloudy-day",
            "time": "17:00",
            "temperature": {
              "celsius": "37",
              "fahrenheit": "99"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "18:00",
            "temperature": {
              "celsius": "35",
              "fahrenheit": "97"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "19:00",
            "temperature": {
              "celsius": "35",
              "fahrenheit": "95"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "20:00",
            "temperature": {
              "celsius": "34",
              "fahrenheit": "94"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "21:00",
            "temperature": {
              "celsius": "34",
              "fahrenheit": "93"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "22:00",
            "temperature": {
              "celsius": "33",
              "fahrenheit": "92"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "23:00",
            "temperature": {
              "celsius": "32",
              "fahrenheit": "91"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "00:00",
            "temperature": {
              "celsius": "32",
              "fahrenheit": "90"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "01:00",
            "temperature": {
              "celsius": "31",
              "fahrenheit": "89"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "02:00",
            "temperature": {
              "celsius": "31",
              "fahrenheit": "88"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "03:00",
            "temperature": {
              "celsius": "30",
              "fahrenheit": "87"
            }
          },
          {
            "icon": "partly-cloudy-night",
            "time": "04:00",
            "temperature": {
              "celsius": "31",
              "fahrenheit": "88"
            }
          },
          {
            "icon": "partly-cloudy-day",
            "time": "05:00",
            "temperature": {
              "celsius": "31",
              "fahrenheit": "89"
            }
          },
          {
            "icon": "partly-cloudy-day",
            "time": "06:00",
            "temperature": {
              "celsius": "32",
              "fahrenheit": "90"
            }
          },
          {
            "icon": "partly-cloudy-day",
            "time": "07:00",
            "temperature": {
              "celsius": "33",
              "fahrenheit": "93"
            }
          },
          {
            "icon": "partly-cloudy-day",
            "time": "08:00",
            "temperature": {
              "celsius": "35",
              "fahrenheit": "96"
            }
          },
          {
            "icon": "partly-cloudy-day",
            "time": "09:00",
            "temperature": {
              "celsius": "37",
              "fahrenheit": "99"
            }
          },
          {
            "icon": "clear-day",
            "time": "10:00",
            "temperature": {
              "celsius": "38",
              "fahrenheit": "101"
            }
          },
          {
            "icon": "clear-day",
            "time": "11:00",
            "temperature": {
              "celsius": "39",
              "fahrenheit": "103"
            }
          },
          {
            "icon": "clear-day",
            "time": "12:00",
            "temperature": {
              "celsius": "40",
              "fahrenheit": "105"
            }
          },
          {
            "icon": "clear-day",
            "time": "13:00",
            "temperature": {
              "celsius": "41",
              "fahrenheit": "106"
            }
          },
          {
            "icon": "clear-day",
            "time": "14:00",
            "temperature": {
              "celsius": "40",
              "fahrenheit": "106"
            }
          },
          {
            "icon": "clear-day",
            "time": "15:00",
            "temperature": {
              "celsius": "40",
              "fahrenheit": "105"
            }
          },
          {
            "icon": "clear-day",
            "time": "16:00",
            "temperature": {
              "celsius": "39",
              "fahrenheit": "103"
            }
          }
        ],
        "daily": [
          {
            "day": "Mon",
            "icon": "partly-cloudy-night",
            "temperatureMin": {
              "celsius": "32",
              "fahrenheit": "90"
            },
            "temperatureMax": {
              "celsius": "39",
              "fahrenheit": "104"
            }
          },
          {
            "day": "TODAY",
            "icon": "partly-cloudy-day",
            "temperatureMin": {
              "celsius": "30",
              "fahrenheit": "87"
            },
            "temperatureMax": {
              "celsius": "40",
              "fahrenheit": "104"
            }
          },
          {
            "day": "Wed",
            "icon": "partly-cloudy-day",
            "temperatureMin": {
              "celsius": "30",
              "fahrenheit": "87"
            },
            "temperatureMax": {
              "celsius": "41",
              "fahrenheit": "106"
            }
          },
          {
            "day": "Thu",
            "icon": "partly-cloudy-day",
            "temperatureMin": {
              "celsius": "31",
              "fahrenheit": "89"
            },
            "temperatureMax": {
              "celsius": "45",
              "fahrenheit": "115"
            }
          },
          {
            "day": "Fri",
            "icon": "clear-day",
            "temperatureMin": {
              "celsius": "30",
              "fahrenheit": "88"
            },
            "temperatureMax": {
              "celsius": "44",
              "fahrenheit": "112"
            }
          },
          {
            "day": "Sat",
            "icon": "clear-day",
            "temperatureMin": {
              "celsius": "30",
              "fahrenheit": "86"
            },
            "temperatureMax": {
              "celsius": "43",
              "fahrenheit": "111"
            }
          },
          {
            "day": "Sun",
            "icon": "clear-day",
            "temperatureMin": {
              "celsius": "30",
              "fahrenheit": "87"
            },
            "temperatureMax": {
              "celsius": "44",
              "fahrenheit": "112"
            }
          }
        ]
      }
    ];
    collection.appendCities = cityModel;
    collection.deleteCities(ids);
    expect(collection.citiesCollection.length).equal(0);
    collection.appendCities = cityModel;
    collection.deleteCities(['test']);
    expect(collection.citiesCollection.length).equal(1);
  });

  it('should add cities forecast correctly', () => {
    let forecast = [{
      "latitude": 25.2048493,
      "longitude": 55.270782800000006,
      "timezone": "Asia/Dubai",
      "offset": 4,
      "currently": {
        "time": 1470748367,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 38.99,
        "apparentTemperature": 44.96,
        "dewPoint": 22.23,
        "humidity": 0.38,
        "windSpeed": 5.77,
        "windBearing": 336,
        "visibility": 8,
        "cloudCover": 0.09,
        "pressure": 997.04,
        "ozone": 281.74
      },
      "hourly": {
        "summary": "Partly cloudy starting later this evening.",
        "icon": "partly-cloudy-day",
        "data": [
          {
            "time": 1470747600,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 39.21,
            "apparentTemperature": 45.11,
            "dewPoint": 22.12,
            "humidity": 0.38,
            "windSpeed": 5.84,
            "windBearing": 335,
            "visibility": 8,
            "cloudCover": 0.07,
            "pressure": 997.03,
            "ozone": 281.85
          },
          {
            "time": 1470751200,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 38.21,
            "apparentTemperature": 44.37,
            "dewPoint": 22.61,
            "humidity": 0.41,
            "windSpeed": 5.5,
            "windBearing": 340,
            "visibility": 8,
            "cloudCover": 0.16,
            "pressure": 997.08,
            "ozone": 281.35
          },
          {
            "time": 1470754800,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 37.18,
            "apparentTemperature": 43.36,
            "dewPoint": 22.87,
            "humidity": 0.44,
            "windSpeed": 4.98,
            "windBearing": 344,
            "visibility": 8,
            "cloudCover": 0.23,
            "pressure": 997.24,
            "ozone": 280.83
          },
          {
            "time": 1470758400,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 36.36,
            "apparentTemperature": 42.34,
            "dewPoint": 22.92,
            "humidity": 0.46,
            "windSpeed": 4.19,
            "windBearing": 347,
            "visibility": 8,
            "cloudCover": 0.26,
            "pressure": 997.54,
            "ozone": 280.3
          },
          {
            "time": 1470762000,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 35.61,
            "apparentTemperature": 41.33,
            "dewPoint": 22.89,
            "humidity": 0.48,
            "windSpeed": 3.19,
            "windBearing": 350,
            "visibility": 8,
            "cloudCover": 0.27,
            "pressure": 997.93,
            "ozone": 279.74
          },
          {
            "time": 1470765600,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 34.93,
            "apparentTemperature": 40.44,
            "dewPoint": 22.87,
            "humidity": 0.5,
            "windSpeed": 2.49,
            "windBearing": 351,
            "visibility": 8,
            "cloudCover": 0.29,
            "pressure": 998.18,
            "ozone": 279.04
          },
          {
            "time": 1470769200,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 34.27,
            "apparentTemperature": 39.59,
            "dewPoint": 22.88,
            "humidity": 0.52,
            "windSpeed": 2.38,
            "windBearing": 343,
            "cloudCover": 0.34,
            "pressure": 998.14,
            "ozone": 278.07
          },
          {
            "time": 1470772800,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 33.57,
            "apparentTemperature": 38.69,
            "dewPoint": 22.86,
            "humidity": 0.54,
            "windSpeed": 2.63,
            "windBearing": 333,
            "cloudCover": 0.39,
            "pressure": 997.95,
            "ozone": 276.96
          },
          {
            "time": 1470776400,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 32.84,
            "apparentTemperature": 37.73,
            "dewPoint": 22.84,
            "humidity": 0.56,
            "windSpeed": 2.68,
            "windBearing": 329,
            "cloudCover": 0.42,
            "pressure": 997.75,
            "ozone": 275.99
          },
          {
            "time": 1470780000,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 31.99,
            "apparentTemperature": 36.71,
            "dewPoint": 22.91,
            "humidity": 0.59,
            "windSpeed": 2.29,
            "windBearing": 337,
            "cloudCover": 0.42,
            "pressure": 997.57,
            "ozone": 275.26
          },
          {
            "time": 1470783600,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 31.17,
            "apparentTemperature": 35.67,
            "dewPoint": 22.95,
            "humidity": 0.62,
            "windSpeed": 1.86,
            "windBearing": 358,
            "cloudCover": 0.39,
            "pressure": 997.4,
            "ozone": 274.67
          },
          {
            "time": 1470787200,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 30.67,
            "apparentTemperature": 34.84,
            "dewPoint": 22.78,
            "humidity": 0.63,
            "windSpeed": 1.6,
            "windBearing": 22,
            "cloudCover": 0.35,
            "pressure": 997.37,
            "ozone": 274.22
          },
          {
            "time": 1470790800,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 30.94,
            "apparentTemperature": 34.97,
            "dewPoint": 22.52,
            "humidity": 0.61,
            "windSpeed": 1.4,
            "windBearing": 53,
            "cloudCover": 0.32,
            "pressure": 997.6,
            "ozone": 273.91
          },
          {
            "time": 1470794400,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 31.51,
            "apparentTemperature": 35.19,
            "dewPoint": 21.98,
            "humidity": 0.57,
            "windSpeed": 1.54,
            "windBearing": 88,
            "cloudCover": 0.28,
            "pressure": 997.97,
            "ozone": 273.73
          },
          {
            "time": 1470798000,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 32.32,
            "apparentTemperature": 35.79,
            "dewPoint": 21.54,
            "humidity": 0.53,
            "windSpeed": 1.73,
            "windBearing": 108,
            "cloudCover": 0.25,
            "pressure": 998.3,
            "ozone": 273.69
          },
          {
            "time": 1470801600,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 33.57,
            "apparentTemperature": 37.3,
            "dewPoint": 21.52,
            "humidity": 0.49,
            "windSpeed": 1.66,
            "windBearing": 124,
            "cloudCover": 0.25,
            "pressure": 998.56,
            "ozone": 273.89
          },
          {
            "time": 1470805200,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 35.12,
            "apparentTemperature": 39.42,
            "dewPoint": 21.72,
            "humidity": 0.46,
            "windSpeed": 1.39,
            "windBearing": 145,
            "cloudCover": 0.26,
            "pressure": 998.77,
            "ozone": 274.23
          },
          {
            "time": 1470808800,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 36.51,
            "apparentTemperature": 41.47,
            "dewPoint": 21.98,
            "humidity": 0.43,
            "windSpeed": 0.82,
            "windBearing": 179,
            "cloudCover": 0.27,
            "pressure": 998.82,
            "ozone": 274.49
          },
          {
            "time": 1470812400,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 37.66,
            "apparentTemperature": 43.33,
            "dewPoint": 22.33,
            "humidity": 0.42,
            "windSpeed": 1.25,
            "windBearing": 288,
            "cloudCover": 0.29,
            "pressure": 998.64,
            "ozone": 274.59
          },
          {
            "time": 1470816000,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 38.77,
            "apparentTemperature": 45.4,
            "dewPoint": 22.85,
            "humidity": 0.4,
            "windSpeed": 3.37,
            "windBearing": 309,
            "cloudCover": 0.3,
            "pressure": 998.29,
            "ozone": 274.61
          },
          {
            "time": 1470819600,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 39.71,
            "apparentTemperature": 47.47,
            "dewPoint": 23.49,
            "humidity": 0.4,
            "windSpeed": 5.12,
            "windBearing": 314,
            "cloudCover": 0.32,
            "pressure": 997.88,
            "ozone": 274.59
          },
          {
            "time": 1470823200,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 40.23,
            "apparentTemperature": 49.1,
            "dewPoint": 24.16,
            "humidity": 0.4,
            "windSpeed": 6.06,
            "windBearing": 318,
            "cloudCover": 0.33,
            "pressure": 997.4,
            "ozone": 274.48
          },
          {
            "time": 1470826800,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 39.93,
            "apparentTemperature": 49.04,
            "dewPoint": 24.4,
            "humidity": 0.42,
            "windSpeed": 6.51,
            "windBearing": 322,
            "cloudCover": 0.34,
            "pressure": 996.9,
            "ozone": 274.35
          },
          {
            "time": 1470830400,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 39.27,
            "apparentTemperature": 48.19,
            "dewPoint": 24.41,
            "humidity": 0.43,
            "windSpeed": 6.49,
            "windBearing": 324,
            "cloudCover": 0.34,
            "pressure": 996.58,
            "ozone": 274.4
          },
          {
            "time": 1470834000,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 38.27,
            "apparentTemperature": 46.49,
            "dewPoint": 24.16,
            "humidity": 0.45,
            "windSpeed": 5.8,
            "windBearing": 325,
            "cloudCover": 0.31,
            "pressure": 996.5,
            "ozone": 274.73
          },
          {
            "time": 1470837600,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 37.07,
            "apparentTemperature": 44.39,
            "dewPoint": 23.79,
            "humidity": 0.47,
            "windSpeed": 4.61,
            "windBearing": 325,
            "cloudCover": 0.27,
            "pressure": 996.58,
            "ozone": 275.25
          },
          {
            "time": 1470841200,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 35.98,
            "apparentTemperature": 42.51,
            "dewPoint": 23.45,
            "humidity": 0.49,
            "windSpeed": 3.51,
            "windBearing": 324,
            "cloudCover": 0.25,
            "pressure": 996.76,
            "ozone": 275.91
          },
          {
            "time": 1470844800,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 35.2,
            "apparentTemperature": 41.16,
            "dewPoint": 23.19,
            "humidity": 0.5,
            "windSpeed": 2.62,
            "windBearing": 319,
            "cloudCover": 0.25,
            "pressure": 997.1,
            "ozone": 276.74
          },
          {
            "time": 1470848400,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 34.62,
            "apparentTemperature": 40.19,
            "dewPoint": 23.01,
            "humidity": 0.51,
            "windSpeed": 1.87,
            "windBearing": 309,
            "cloudCover": 0.26,
            "pressure": 997.54,
            "ozone": 277.71
          },
          {
            "time": 1470852000,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 34.12,
            "apparentTemperature": 39.47,
            "dewPoint": 22.93,
            "humidity": 0.52,
            "windSpeed": 1.43,
            "windBearing": 303,
            "cloudCover": 0.29,
            "pressure": 997.83,
            "ozone": 278.73
          },
          {
            "time": 1470855600,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 33.57,
            "apparentTemperature": 38.82,
            "dewPoint": 22.98,
            "humidity": 0.54,
            "windSpeed": 1.48,
            "windBearing": 321,
            "cloudCover": 0.32,
            "pressure": 997.85,
            "ozone": 279.9
          },
          {
            "time": 1470859200,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 32.95,
            "apparentTemperature": 38.08,
            "dewPoint": 23.04,
            "humidity": 0.56,
            "windSpeed": 2.04,
            "windBearing": 342,
            "cloudCover": 0.36,
            "pressure": 997.71,
            "ozone": 281.11
          },
          {
            "time": 1470862800,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 32.32,
            "apparentTemperature": 37.16,
            "dewPoint": 22.93,
            "humidity": 0.58,
            "windSpeed": 2.34,
            "windBearing": 355,
            "cloudCover": 0.39,
            "pressure": 997.54,
            "ozone": 281.93
          },
          {
            "time": 1470866400,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 31.64,
            "apparentTemperature": 35.92,
            "dewPoint": 22.57,
            "humidity": 0.59,
            "windSpeed": 1.97,
            "windBearing": 14,
            "cloudCover": 0.4,
            "pressure": 997.32,
            "ozone": 282.1
          },
          {
            "time": 1470870000,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 31.01,
            "apparentTemperature": 34.62,
            "dewPoint": 22.04,
            "humidity": 0.59,
            "windSpeed": 1.72,
            "windBearing": 49,
            "cloudCover": 0.4,
            "pressure": 997.09,
            "ozone": 281.87
          },
          {
            "time": 1470873600,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 30.67,
            "apparentTemperature": 33.74,
            "dewPoint": 21.49,
            "humidity": 0.58,
            "windSpeed": 1.94,
            "windBearing": 77,
            "cloudCover": 0.39,
            "pressure": 997.05,
            "ozone": 281.56
          },
          {
            "time": 1470877200,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 31.01,
            "apparentTemperature": 33.85,
            "dewPoint": 21.11,
            "humidity": 0.56,
            "windSpeed": 2.11,
            "windBearing": 87,
            "cloudCover": 0.39,
            "pressure": 997.36,
            "ozone": 281.19
          },
          {
            "time": 1470880800,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 31.61,
            "apparentTemperature": 34.16,
            "dewPoint": 20.58,
            "humidity": 0.52,
            "windSpeed": 2.08,
            "windBearing": 93,
            "cloudCover": 0.39,
            "pressure": 997.86,
            "ozone": 280.74
          },
          {
            "time": 1470884400,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 32.48,
            "apparentTemperature": 34.85,
            "dewPoint": 20.15,
            "humidity": 0.48,
            "windSpeed": 1.99,
            "windBearing": 101,
            "cloudCover": 0.38,
            "pressure": 998.34,
            "ozone": 280.48
          },
          {
            "time": 1470888000,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 33.84,
            "apparentTemperature": 36.4,
            "dewPoint": 20.09,
            "humidity": 0.45,
            "windSpeed": 1.99,
            "windBearing": 118,
            "cloudCover": 0.37,
            "pressure": 998.75,
            "ozone": 280.57
          },
          {
            "time": 1470891600,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 35.53,
            "apparentTemperature": 38.62,
            "dewPoint": 20.29,
            "humidity": 0.41,
            "windSpeed": 2.14,
            "windBearing": 137,
            "cloudCover": 0.35,
            "pressure": 999.09,
            "ozone": 280.86
          },
          {
            "time": 1470895200,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 37.08,
            "apparentTemperature": 40.81,
            "dewPoint": 20.58,
            "humidity": 0.39,
            "windSpeed": 2.06,
            "windBearing": 148,
            "cloudCover": 0.31,
            "pressure": 999.25,
            "ozone": 281.22
          },
          {
            "time": 1470898800,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 38.36,
            "apparentTemperature": 42.81,
            "dewPoint": 20.99,
            "humidity": 0.37,
            "windSpeed": 1.39,
            "windBearing": 158,
            "cloudCover": 0.23,
            "pressure": 999.12,
            "ozone": 281.65
          },
          {
            "time": 1470902400,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 39.56,
            "apparentTemperature": 44.93,
            "dewPoint": 21.56,
            "humidity": 0.36,
            "windSpeed": 0.4,
            "windBearing": 196,
            "cloudCover": 0.12,
            "pressure": 998.79,
            "ozone": 282.15
          },
          {
            "time": 1470906000,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 40.54,
            "apparentTemperature": 46.96,
            "dewPoint": 22.22,
            "humidity": 0.35,
            "windSpeed": 0.96,
            "windBearing": 322,
            "cloudCover": 0.04,
            "pressure": 998.4,
            "ozone": 282.54
          },
          {
            "time": 1470909600,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 41.1,
            "apparentTemperature": 48.57,
            "dewPoint": 22.94,
            "humidity": 0.36,
            "windSpeed": 2.47,
            "windBearing": 341,
            "cloudCover": 0.02,
            "pressure": 997.95,
            "ozone": 282.71
          },
          {
            "time": 1470913200,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 40.9,
            "apparentTemperature": 48.81,
            "dewPoint": 23.32,
            "humidity": 0.37,
            "windSpeed": 4.2,
            "windBearing": 349,
            "cloudCover": 0.03,
            "pressure": 997.49,
            "ozone": 282.78
          },
          {
            "time": 1470916800,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 40.41,
            "apparentTemperature": 48.2,
            "dewPoint": 23.35,
            "humidity": 0.38,
            "windSpeed": 5.32,
            "windBearing": 353,
            "cloudCover": 0.05,
            "pressure": 997.21,
            "ozone": 282.85
          },
          {
            "time": 1470920400,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 39.68,
            "apparentTemperature": 46.74,
            "dewPoint": 22.97,
            "humidity": 0.39,
            "windSpeed": 5.42,
            "windBearing": 358,
            "cloudCover": 0.06,
            "pressure": 997.14,
            "ozone": 282.97
          }
        ]
      },
      "daily": {
        "summary": "No precipitation throughout the week, with temperatures rising to 46°C on Friday.",
        "icon": "clear-day",
        "data": [
          {
            "time": 1470686400,
            "summary": "Partly cloudy starting in the evening.",
            "icon": "partly-cloudy-night",
            "sunriseTime": 1470707479,
            "sunsetTime": 1470754809,
            "moonPhase": 0.21,
            "precipIntensity": 0,
            "precipIntensityMax": 0,
            "precipProbability": 0,
            "temperatureMin": 32.16,
            "temperatureMinTime": 1470700800,
            "temperatureMax": 39.87,
            "temperatureMaxTime": 1470744000,
            "apparentTemperatureMin": 34.01,
            "apparentTemperatureMinTime": 1470704400,
            "apparentTemperatureMax": 45.63,
            "apparentTemperatureMaxTime": 1470744000,
            "dewPoint": 21.25,
            "humidity": 0.43,
            "windSpeed": 2.07,
            "windBearing": 356,
            "visibility": 8,
            "cloudCover": 0.26,
            "pressure": 998.09,
            "ozone": 282.02
          },
          {
            "time": 1470772800,
            "summary": "Partly cloudy throughout the day.",
            "icon": "partly-cloudy-day",
            "sunriseTime": 1470793907,
            "sunsetTime": 1470841165,
            "moonPhase": 0.24,
            "precipIntensity": 0,
            "precipIntensityMax": 0,
            "precipProbability": 0,
            "temperatureMin": 30.67,
            "temperatureMinTime": 1470787200,
            "temperatureMax": 40.23,
            "temperatureMaxTime": 1470823200,
            "apparentTemperatureMin": 34.84,
            "apparentTemperatureMinTime": 1470787200,
            "apparentTemperatureMax": 49.1,
            "apparentTemperatureMaxTime": 1470823200,
            "dewPoint": 22.95,
            "humidity": 0.5,
            "windSpeed": 2.23,
            "windBearing": 327,
            "cloudCover": 0.31,
            "pressure": 997.66,
            "ozone": 275.29
          },
          {
            "time": 1470859200,
            "summary": "Partly cloudy in the morning.",
            "icon": "partly-cloudy-day",
            "sunriseTime": 1470880335,
            "sunsetTime": 1470927520,
            "moonPhase": 0.27,
            "precipIntensity": 0,
            "precipIntensityMax": 0,
            "precipProbability": 0,
            "temperatureMin": 30.67,
            "temperatureMinTime": 1470873600,
            "temperatureMax": 41.1,
            "temperatureMaxTime": 1470909600,
            "apparentTemperatureMin": 33.74,
            "apparentTemperatureMinTime": 1470873600,
            "apparentTemperatureMax": 48.57,
            "apparentTemperatureMaxTime": 1470909600,
            "dewPoint": 21.42,
            "humidity": 0.44,
            "windSpeed": 1.73,
            "windBearing": 30,
            "cloudCover": 0.21,
            "pressure": 997.98,
            "ozone": 282.2
          },
          {
            "time": 1470945600,
            "summary": "Dry and partly cloudy throughout the day.",
            "icon": "partly-cloudy-day",
            "sunriseTime": 1470966763,
            "sunsetTime": 1471013874,
            "moonPhase": 0.3,
            "precipIntensity": 0,
            "precipIntensityMax": 0,
            "precipProbability": 0,
            "temperatureMin": 31.41,
            "temperatureMinTime": 1470960000,
            "temperatureMax": 45.89,
            "temperatureMaxTime": 1470999600,
            "apparentTemperatureMin": 29.99,
            "apparentTemperatureMinTime": 1470960000,
            "apparentTemperatureMax": 47.88,
            "apparentTemperatureMaxTime": 1470999600,
            "dewPoint": 16.2,
            "humidity": 0.28,
            "windSpeed": 0.92,
            "windBearing": 138,
            "cloudCover": 0.34,
            "pressure": 999.43,
            "ozone": 279.28
          },
          {
            "time": 1471032000,
            "summary": "Clear throughout the day.",
            "icon": "clear-day",
            "sunriseTime": 1471053190,
            "sunsetTime": 1471100226,
            "moonPhase": 0.33,
            "precipIntensity": 0,
            "precipIntensityMax": 0,
            "precipProbability": 0,
            "temperatureMin": 30.84,
            "temperatureMinTime": 1471046400,
            "temperatureMax": 44.58,
            "temperatureMaxTime": 1471086000,
            "apparentTemperatureMin": 30.52,
            "apparentTemperatureMinTime": 1471046400,
            "apparentTemperatureMax": 46.2,
            "apparentTemperatureMaxTime": 1471086000,
            "dewPoint": 16.48,
            "humidity": 0.3,
            "windSpeed": 0.89,
            "windBearing": 288,
            "cloudCover": 0.04,
            "pressure": 999.66,
            "ozone": 276.89
          },
          {
            "time": 1471118400,
            "summary": "Clear throughout the day.",
            "icon": "clear-day",
            "sunriseTime": 1471139618,
            "sunsetTime": 1471186578,
            "moonPhase": 0.36,
            "precipIntensity": 0,
            "precipIntensityMax": 0,
            "precipProbability": 0,
            "temperatureMin": 30.27,
            "temperatureMinTime": 1471132800,
            "temperatureMax": 43.94,
            "temperatureMaxTime": 1471168800,
            "apparentTemperatureMin": 30.57,
            "apparentTemperatureMinTime": 1471132800,
            "apparentTemperatureMax": 45.73,
            "apparentTemperatureMaxTime": 1471168800,
            "dewPoint": 16.92,
            "humidity": 0.32,
            "windSpeed": 0.84,
            "windBearing": 298,
            "cloudCover": 0.03,
            "pressure": 999.08,
            "ozone": 271.91
          },
          {
            "time": 1471204800,
            "summary": "Dry throughout the day.",
            "icon": "clear-day",
            "sunriseTime": 1471226045,
            "sunsetTime": 1471272929,
            "moonPhase": 0.39,
            "precipIntensity": 0,
            "precipIntensityMax": 0,
            "precipProbability": 0,
            "temperatureMin": 30.62,
            "temperatureMinTime": 1471219200,
            "temperatureMax": 44.52,
            "temperatureMaxTime": 1471255200,
            "apparentTemperatureMin": 30.53,
            "apparentTemperatureMinTime": 1471219200,
            "apparentTemperatureMax": 46.63,
            "apparentTemperatureMaxTime": 1471255200,
            "dewPoint": 16.01,
            "humidity": 0.29,
            "windSpeed": 0.96,
            "windBearing": 342,
            "cloudCover": 0,
            "pressure": 998.8,
            "ozone": 271.32
          },
          {
            "time": 1471291200,
            "summary": "Clear throughout the day.",
            "icon": "clear-day",
            "sunriseTime": 1471312472,
            "sunsetTime": 1471359279,
            "moonPhase": 0.43,
            "precipIntensity": 0,
            "precipIntensityMax": 0,
            "precipProbability": 0,
            "temperatureMin": 30.07,
            "temperatureMinTime": 1471305600,
            "temperatureMax": 44.16,
            "temperatureMaxTime": 1471345200,
            "apparentTemperatureMin": 28.81,
            "apparentTemperatureMinTime": 1471305600,
            "apparentTemperatureMax": 45.13,
            "apparentTemperatureMaxTime": 1471345200,
            "dewPoint": 13.26,
            "humidity": 0.24,
            "windSpeed": 0.7,
            "windBearing": 88,
            "cloudCover": 0,
            "pressure": 998.29,
            "ozone": 273.21
          }
        ]
      },
      "flags": {
        "sources": [
          "gfs",
          "cmc",
          "fnmoc",
          "isd",
          "madis"
        ],
        "isd-stations": [
          "404480-99999",
          "404490-99999",
          "411940-99999",
          "411960-99999",
          "412164-99999"
        ],
        "madis-stations": [
          "OMDB",
          "OMDW",
          "OMSJ"
        ],
        "units": "si"
      }
    }];
    let cities = [
      {
        "address": {
          "city_name": "Dubai",
          "country": "United Arab Emirates"
        },
        "location": {
          "lat": 25.2048493,
          "lng": 55.270782800000006
        },
        "place_id": "ChIJRcbZaklDXz4RYlEphFBu5r0"
      }
    ];
    let units = 'celsius';
    collection.addCitiesToCollection(forecast, cities, units);
    expect(collection.citiesCollection[0].city_offset).equal(4);
    expect(collection.citiesCollection[0].place_id).equal("ChIJRcbZaklDXz4RYlEphFBu5r0");
  });



});
