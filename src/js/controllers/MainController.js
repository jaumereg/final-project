function MainController($scope, ApiService) {


	ApiService.getAllMatches()
		.then(matches => $scope.matches = matches)

}

module.exports = MainController
