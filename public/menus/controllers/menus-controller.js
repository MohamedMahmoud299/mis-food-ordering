'use strict';
angular.module('FoodApp')
	.controller('menusCtrl', ['$scope','ModalService', '$http', function($scope, ModalService, $http){
	var socket = io();
	socket.emit('logged in', 'ello');
	socket.on('message',function  (data) {
		// body...
		console.log('socket data', data)
	})

		console.log(ModalService)
		var getRestaurants = function  () {
			$http.get('/api/restaurants').success(function  (res) {
				// body...
				$scope.restaurants = res;
				console.log(res)
			}).error(function  (err) {
				// body...
				alert(err);
			});
		};
		getRestaurants();
		$scope.addRestaurant = function () {
			ModalService.open({
			   templateUrl: 'menus/views/add-restaurant.html',
			   controller: 'addRestaurantCtrl',
			   backdrop:true
			 });
		};
		
	}]);