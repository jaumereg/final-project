angular.module('matchApp')
	.factory('AuthInterceptor', function (StorageService) {
  function addToken (config) {
    const token = StorageService.getToken()
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = 'JWT ' + token
    }
    return config
  }

  return {
    request: addToken
  }
})
