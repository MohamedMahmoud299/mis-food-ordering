'use strict';
angular.module('FoodApp').config(['$stateProvider', '$urlRouterProvider',function($stateProvider) {
	console.log('menu router')
	$stateProvider
	.state('menu',{
		url:'/menu',
		views:{
			header:{
				templateUrl:'partials/header.html',
				controller:'headerCtrl'
			},
			body:{
				templateUrl:'menus/views/menus.html',
				controller:'menusCtrl'
			}
		},
		resolve:{function  (Login, $window, $state, $location) {
			console.log($window.localStorage.isLoggedIn)
			if($window.localStorage.isLoggedIn === 'false'){
				console.log('ami true')
				// $state.go('app');
				$location.path('/');
			}
		}
	}
	});
}]);