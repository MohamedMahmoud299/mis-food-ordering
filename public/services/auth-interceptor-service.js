'use strict';
angular.module('FoodApp').factory('authInterceptor', ['$window', function($window) {
    return {
        request: function(config) {
        	if($window.localStorage.token){
        		config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
        	}
        	return config;
        }
    };
}]);