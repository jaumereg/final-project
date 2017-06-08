angular.module('matchApp')
    .controller('MainController', function($scope, $location, ApiService, $window) {

        ApiService.getAllMatches()
            .then(matches => $scope.matches = matches)

        $scope.addMatch = function(e) {
            e.preventDefault()
            const { location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right } = $scope

            ApiService.addMatch({ location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right })
                .then(matches => {
                    $scope.matches = matches
                })
                $window.location.reload()
            
        }

        $scope.removeMatch = function(id) {

            ApiService.removeMatch(id)
                .then( $window.location.reload() )
                
        }
    })
