// function MainController($scope, ApiService) {


// 	ApiService.getAllMatches()
// 		.then(matches => $scope.matches = matches)

// }

// module.exports = MainController

angular.module('matchApp')
  .controller('MomeController', function ($scope, $location, ApiService) {
    $scope.title = 'HOME'
    $scope.getAllMatches = function(){
      $scope.matches = ApiService.getAllMatches()
      .then(function(response){
        console.log (response)
      })
      $location.path('/matches/')
    }
  })