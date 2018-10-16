var app = angular.module('weatherApp', ['ngRoute']);



app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/views/search.html',
      controller: 'searchCtrl'
    })
    .otherwise({
      templateUrl: 'js/views/404.html'
    });
});




app.controller('searchCtrl', ['$scope', 'getWeatherByCity', 'getImages', function ($scope, getWeatherByCity, getImages) {
  $scope.savedCities = [];
  $scope.date = new Date();
  $scope.resultsFound = false;
  $scope.cardPlaceholder = true;
  $scope.noResults = false;
  $scope.loading = true;
  $scope.getData = function () {
    $scope.noResults = false;
    $scope.cardPlaceholder = false;
    $scope.loading = true;
    $scope.result = {};
    return getWeatherByCity.getWeather($scope.userInput)
      .then(function (response) {
        console.log(response.data);
        $scope.resultsFound = true;
        $scope.loading = false;
        $scope.result = response.data;
      }, function (response) {
        console.error('Error getting data');
        $scope.noResults = true;
        $scope.resultsFound = false;
      })
  }
  
   
  $scope.saveCity = function(city) {
   $scope.savedCities.push(city);
  }
  
  $scope.removeCity = function(city) {
    $scope.savedCities.pop(city);
  }


}]);

