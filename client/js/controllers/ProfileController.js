angular.module('matchApp')
    .controller('ProfileController', function($scope, $location, $rootScope, ApiService) {

        $rootScope.section = 'add-profile'

        $scope.editProfile = function(e) {
            e.preventDefault()
            const { name, description, image } = $scope

            ApiService.addProfile({ name, description, image })
                .then(console.log)
                // $location.path('/user-profile')
                
        }
    })