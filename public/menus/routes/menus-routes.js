'use strict';
angular.module('FoodApp').config(['$stateProvider', '$urlRouterProvider',function($stateProvider) {
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
			if($window.localStorage.isLoggedIn === 'false' || !$window.localStorage.isLoggedIn ||$window.localStorage.token){
				// $state.go('app');
				$location.path('/');
			}
		}
	}
	})
	.state('profile',{
		url:'/profile',
		templateUrl:'partials/profile.html',
		controller:'profileCtrl'
	})
	.state('restaurant',{
		url:'/restaurant/:id',
		views:{
			header:{
				templateUrl:'partials/header.html',
				controller: 'headerCtrl'
			},
			body:{
				templateUrl:'restaurant/views/restaurant.html',
				controller:'restaurantCtrl'
			}
		}
	})
}]);