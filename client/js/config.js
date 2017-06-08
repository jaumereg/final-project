angular.module('matchApp')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../templates/main-page.html'
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
                controller: 'ProfileController'
            })
            .when('/user-search', {
                templateUrl: '../templates/user-search.html',
                controller: 'SearchController'
            })
            .when('/edit-profile', {
                templateUrl: '../templates/edit-profile.html',
                controller: 'ProfileController'
            })
    })
