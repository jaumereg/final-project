angular.module('matchApp')
  .controller('LogoutController', function ($scope, $location, AuthService) {

    AuthService.logout()
    console.log("Logging out...");
    $location.path('/')

})
