angular.module('matchApp')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: '../templates/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: '../templates/register.html',
                controller: 'RegisterController'
            })
            .when('/main', {
                templateUrl: '../templates/main-page.html',
                secure: true
            })
            .when('/matches', {
                templateUrl: '../templates/matches.html',
                controller: 'MainController',
                secure: true
            })
            .when('/user-profile', {
                templateUrl: '../templates/user-profile.html',
                controller: 'ProfileController',
                secure: true
            })
            .when('/user-search', {
                templateUrl: '../templates/user-search.html',
                controller: 'SearchController',
                secure: true
            })
            .when('/edit-profile', {
                templateUrl: '../templates/edit-profile.html',
                controller: 'ProfileController',
                secure: true
            })
            .when('/logout', {
                template: '<h1>Logging out..</h1>',
                controller: 'LogoutController'
            })
            .otherwise('/login')
    })
