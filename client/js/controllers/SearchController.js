angular.module('matchApp')
  .controller('SearchController', function($scope, $rootScope, ApiService) {
    $rootScope.section = "search-user"

    ApiService.getAllProfiles()
      .then(profiles => $scope.profiles = profiles)

  })
