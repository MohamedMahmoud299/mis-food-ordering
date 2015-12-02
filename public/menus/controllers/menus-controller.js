'use strict';
angular.module('FoodApp')
	.controller('menusCtrl', ['$scope','ModalService', '$http','$location', 'Socket','restaurants', function($scope, ModalService, $http, $location,Socket, restaurants){
		// console.log(Socket)
		console.log(Socket)

		// var socket = Socket;
		Socket.on('connection', function  (data) {
			// body...
			console.log(data);
		});
		Socket.on('hi', function  (data) {
			// body...
			console.log(data);
		})
		console.log(ModalService)
		$scope.restaurants = restaurants;
		var getRestaurants = function  () {
			$http.get('/api/restaurants').success(function  (res) {
				// body...
				restaurants.details = res;
				console.log(res)
			}).error(function  (err) {
				// body...
				if(err === 'Unauthorized'){
					$location.path('/')
				}
				console.log(err);
			});
		};
		getRestaurants();
		$scope.addRestaurant = function () {
			ModalService.open({
			   templateUrl: 'menus/views/add-restaurant.html',
			   controller: 'addRestaurantCtrl',
			   parentScope:$scope,
			   backdrop:true
			 });
		};

	}]);
