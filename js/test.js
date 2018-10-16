

    return $http({
        method : 'GET',
        url : 'http://api.openweathermap.org/data/2.5/weather?q=' + $scope.userInput + '&appid='+ appID + '&units=' + units + '&lan=' + language,
    }).then(function mySuccess(response) {
        $scope.result = response.data;
        
        if($scope.result) {
            $scope.result_found = true;
        }else {
            $scope.result_found = true;
        }
    }, function myError(response) {
        $scope.result = response.statusText;
    });
  