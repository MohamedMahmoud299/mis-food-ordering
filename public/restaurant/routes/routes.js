'use strict';
angular.module('FoodApp')
	.config(['$stateProvider',function($stateProvider) {
		$stateProvider
			.state('restaurant/:id',{
				url:'/restaurant/:id',
				views:{
					header:{
						templateUrl:'/partials/header.html',
						controller:'headerCtrl'
					},
					body:{
						templateUrl:'/restaurant/views/restaurant.html',
						controller:'restaurantCtrl'
					}
				}
			});
	}]);