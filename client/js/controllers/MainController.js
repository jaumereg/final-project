angular.module('matchApp')
  .controller('MainController', function ($scope, $location, ApiService) {
    $scope.title = 'HOME'
    $scope.getAllMatches = function(){
      $scope.matches = ApiService.getAllMatches()
      .then(function(response){
        console.log (response)
      })
      $location.path('/matches/')
    }
  })