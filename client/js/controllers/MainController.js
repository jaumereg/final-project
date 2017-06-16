angular.module('matchApp')
    .controller('MainController', function($scope, $location, $rootScope, ApiService, $window, toastr) {
        $rootScope.section = "main"
        ApiService.getAllMatches()
            .then(matches => $scope.matches = matches)

        $scope.addMatch = function(e) {
            e.preventDefault()
            const { location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right } = $scope

            ApiService.addMatch({ location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right })
                .then(matches => {
                    $scope.matches = matches
                    // toastr.success('Match created successfully', 'Success')
                })
                $window.location.reload()
            
        }

        $scope.removeMatch = function(id) {

            ApiService.removeMatch(id)
                .then( () => {
                    $window.location.reload() 
                    // toastr.success('Match removed successfully', 'Success')
                    })
                
        }

        $scope.editMatch = function(id) {
            const { location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right } = $scope
            
            ApiService.editMatch({ location, court, date, hour, duration, price, levelFrom, levelTo, gender, team1Left, team1Right, team2Left, team2Right }, id)
                .then(matches => {
                    $scope.matches = matches
                    // toastr.success('Match created successfully', 'Success')
                })
                $window.location.reload()
            
        }

        var today = moment().format('YYYY, MM, DD')
        $scope.dates = new Date(today)

        var hour = moment().format('HH')
        $scope.hours = new Date(0, 0, 0, hour, 0)

    })
