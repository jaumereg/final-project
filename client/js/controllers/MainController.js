angular.module('matchApp')
    .controller('MainController', function($scope, $location, $rootScope, ApiService, $window, toastr) {
        $rootScope.section = "main"
        ApiService.getAllMatches()
            .then(matches => $scope.matches = matches)

        $scope.addMatch = function(e) {
            e.preventDefault()
            const { location, court, date, hour, duration, price, levelFrom, gender, team1Left, team1Right, team2Left, team2Right } = $scope
            const data = { location, court, date, hour, duration, price, levelFrom, gender, team1Left, team1Right, team2Left, team2Right }
            console.log(data)
            ApiService.addMatch( data )
                .then(matches => {
                    $scope.matches = matches
                    $window.location.reload()
                })
            
        }

        $scope.removeMatch = function(id) {

            ApiService.removeMatch(id)
                .then( () => {
                    $window.location.reload()
                    })
                
        }

        $scope.editMatch = function(id) {
            const { location, court, date, hour, duration, price, levelFrom, gender, team1Left, team1Right, team2Left, team2Right } = $scope
            
            ApiService.editMatch({ location, court, date, hour, duration, price, levelFrom, gender, team1Left, team1Right, team2Left, team2Right }, id)
                .then(matches => {
                    $scope.matches = matches
                    $window.location.reload()
                })
            
        }

        var today = moment().format('YYYY, MM, DD')
        $rootScope.dates = new Date(today)

        var hourNow = moment().format('HH')
        $rootScope.hours = new Date(0, 0, 0, hourNow, 0)

    })
