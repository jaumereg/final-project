angular.module('matchApp')
.factory('ApiService', function($http){

  function getAllMatches() {
    return $http.get('/api/matches')
      .then( response => response.data )
  }

  function addMatch( data ) {
    return $http.post('/api/matches', data)
      .then( response => response.data )
  }

  function removeMatch( id ) {
    return $http.delete(`/api/match/${id}`)
      .then( response => response.data )
  }

  function editMatch( data, id ) {
    return $http.put(`/api/match/${id}`, data)
      .then( response => response.data )
  }
  // IN PROGRESS
  function getProfile() {
    return $http.get('/api/profiles')
      .then( response => response.data )
  }

  function addProfile(data) {
    return $http.post('/api/profiles', data)
      .then( response => response.data )
  }

  function editProfile( data, id ) {
    return $http.put(`/api/profile/${id}`, data)
      .then( response => response.data )
  }

  return { getAllMatches, addMatch, removeMatch, editMatch, getProfile, editProfile }
})