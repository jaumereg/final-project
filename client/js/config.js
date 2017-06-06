angular.module('matchApp')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../templates/main-page.html',
                controller: 'MainController'
            })
            .when('/main', {
                templateUrl: '../templates/main-page.html',
                controller: 'MainController'
            })
    })
