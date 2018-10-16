var app = angular.module('weatherApp');

app.service('getImages', function($http){

    this.getImagesByCity = function (city) {
        return $http.get('https://pixabay.com/api/?key=10323867-e95883613bbf87d806424e81d&q=' + city + '&image_type=photo&pretty=true');
    }

});