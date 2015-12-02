'use strict';
angular.module('FoodApp')
	.controller('addRestaurantCtrl', ['$scope','$uibModalInstance','$http', 'parentScope', 'Socket', function($scope, $uibModalInstance, $http, parentScope, Socket){
		$scope.close = function  () {
			// body...
			$uibModalInstance.close();
		};
		var x = 1;

		$scope.add = function  () {
			Socket.emit('add new restaurant', 'hi');
			

				// var socket = io.connect('http://localhost:4000');
			$http.post('/api/restaurants', $scope.restaurant).success(function  (res) {
				// socket.emit('add restaurant', 'hi');
				// socket.emit('add restaurant','add that restaurant')
				// Socket.on('added restaurant',function  (data) {
				// 	// body...
				// 	console.log('client socket', data[0])
				// 	x++;
				// 	console.log(x);
				// 	console.log(parentScope.restaurants);
				// 		// console.log(data,'in apply')
				// 		$scope.$apply(function () {
				// 			// body...
				// 			parentScope.restaurants.push(data[0]);
				// 		})
				// 		// body...
				// });
				Socket.emit('hi', 'hi server');
				console.log(res);
				$uibModalInstance.close();
			}).error(function  (err) {
				console.log(err);
			});
		};
	}]);