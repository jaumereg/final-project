angular.module('matchApp')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../templates/main-page.html',
                controller: 'MainController'
            })
            .when('/main', {
                templateUrl: '../templates/main-page.html'
            })
            .when('/matches', {
                templateUrl: '../templates/matches.html',
                controller: 'MainController'
            })
            .when('/user-profile', {
                templateUrl: '../templates/user-profile.html',
                controller: 'MainController'
            })
    })
