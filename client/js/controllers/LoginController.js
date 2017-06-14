angular.module('matchApp')
  .controller('LoginController', function($scope, $rootScope, $location, ApiService, AuthService) {
  	$rootScope.section = "login"

 		$scope.login = function (event) {
	    event.preventDefault()
	    const { username, password } = $scope

	    AuthService.login(username, password)
					.then(msg => {
						console.log(msg)
						$rootScope.section = "main"
						$location.path('/main')
					})
					.catch(console.log)
	  }

	  $scope.getData = function () {
	    DataService.getSecretData()
					.then(data => $scope.message = data.msg)
		 }


  })
