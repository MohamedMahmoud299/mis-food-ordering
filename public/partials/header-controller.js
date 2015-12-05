'use strict';
angular.module('FoodApp')
	.controller('headerCtrl', ['$scope','Login','$window', '$state', function($scope, Login, $window, $state){
		$scope.logout = function  () {
			console.log('here?')
			$window.localStorage.isLoggedIn = false;
			$window.localStorage.removeItem('token');
			$state.go('app');
		};
		
		$scope.goHome = function  () {
			// body...
			// console.log(Login);
			$state.go('menu')
		};
		$scope.openProfile = function () {
			$state.go('profile');
		};
	}]);