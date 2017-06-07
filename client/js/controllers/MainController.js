angular.module('matchApp')
  .controller('MainController', function ($scope, $location, ApiService) {
    // $scope.title = 'HOME'
    $scope.addMatch = function(){

      const {location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right} = $scope


      ApiService.addMatch({location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right})
      .then(matches => {
        $scope.matches = matches
      })
      $location.path('/matches')
    }
  })

  // angular.module('matchApp')
  // .controller('MainController', function ($scope, $location, ApiService) {
  //   // $scope.title = 'HOME'
  //   $scope.getAllMatches = function(){
  //     $scope.matches = ApiService.getAllMatches()
  //     .then(function(response){
  //       console.log (response)
  //     })
  //     $location.path('/matches/')
  //   }
  // })