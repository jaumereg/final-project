function DataService ($http) {

	function getAllMatches() {
		return $http.get('/api/matches')
			.then( response => response.data )
	}

	return { getAllMatches }

}

module.exports = DataService
