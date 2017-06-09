angular.module('matchApp', ['ngRoute'])

function dateToday($scope, $filter) {
  $scope.date = $filter("date")(Date.now(), "yyyy-MM-dd")
}