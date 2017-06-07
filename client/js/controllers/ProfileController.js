angular.module('matchApp')
    .controller('ProfileController', function($scope, $location, ApiService) {

        ApiService.getProfile()
            .then(profile => $scope.profile = profile)

        // $scope.addMatch = function() {

        //     const { location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right } = $scope

        //     ApiService.addMatch({ location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right })
        //         .then(matches => {
        //             $scope.matches = matches
        //         })
        //         $window.location.reload()
            
        // }

        $scope.editProfile = function(id) {

            const { name, description, image } = $scope

            ApiService.editProfile({ name, description, image }, id)
                .then(profile => {
                    $scope.profile = profile
                })
                $location.path('/user-profile')
                
        }
    })