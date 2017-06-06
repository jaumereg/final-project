// function DataService ($http) {

// 	function getAllMatches() {
// 		return $http.get('/api/matches')
// 			.then( response => response.data )
// 	}

// 	return { getAllMatches }

// }

// module.exports = DataService

angular.module('matchApp')
.factory('ApiService', function($http){

  function getAllMatches() {
    return $http.get('/api/matches')
      .then(function(response){
        return response.data
      })
  }
  return { getAllMatches }
})