'use strict';
angular.module('FoodApp')
	.controller('addRestaurantCtrl', ['$scope','$uibModalInstance','$http', function($scope, $uibModalInstance, $http){
		$scope.close = function  () {
			// body...
			$uibModalInstance.close();
		};

		$scope.add = function  () {
			$http.post('/api/restaurants', $scope.restaurant).success(function  (res) {
				console.log(res);
				$uibModalInstance.close();
			}).error(function  (err) {
				console.log(err);
			});
		};
	}]);