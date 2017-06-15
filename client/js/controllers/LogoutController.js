angular.module('matchApp')
  .controller('LogoutController', function ($scope, $location, AuthService, toastr) {

    AuthService.logout()
    toastr.success('Logged Out successfully', 'Log Out')
    $location.path('/')

})
