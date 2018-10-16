var app = angular.module('weatherApp');

var appID = '12dcff3d0dae19f0d04182d6c2abd64a';
var units = 'metric';
var language = 'hr'
var data = {};


app.service('getWeatherByCity', function($http){
    this.getWeather = function(userInput) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid='+ appID + '&units=' + units + '&lan=' + language)
    }
  });
  app.service('getWeatherByLocation', function($http){
    this.getWeather = function(coords) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon +'&appid=' + appID + '&units=' + units + '&lan=' + language);
    }
  });
  