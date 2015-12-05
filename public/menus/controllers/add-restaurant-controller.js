'use strict';
angular.module('FoodApp')
	.controller('addRestaurantCtrl', ['$scope','$uibModalInstance','$http', 'parentScope', 'Io', 'events', '$q', function($scope, $uibModalInstance, $http, parentScope, Io, events, $q){
		$scope.close = function  () {
			// body...
			$uibModalInstance.close();
		};
		var x = 1;
		

		$scope.add = function  () {
			// Socket.emit('add new restaurant', 'hi');
			// Socket.emit('my event', 'hiiiiiiiiiiiiiii');
			

				// var socket = io.connect('http://localhost:4000');
			$http.post('/api/restaurants', $scope.restaurant).success(function  () {
				
				$uibModalInstance.close();
			}).error(function  (err) {
				console.log(err);
			});
		};
	}]);