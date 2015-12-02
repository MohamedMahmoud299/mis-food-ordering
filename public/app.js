'use strict';
var app = angular.module('FoodApp',['ui.bootstrap', 'ui.router', 'cgNotify']);
app.config(function ($locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('authInterceptor');

}).factory('Socket', function (restaurants, $rootScope) {
	var socket = io.connect('http://localhost:4000');
	socket.on('added restaurant',function  (data) {
		// body...
		console.log('client socket', data[0]);
		// x++;
		// console.log(x);
		// console.log(parentScope.restaurants);
			// console.log(data,'in apply')
			$rootScope.$apply(function () {
				// body...
				// restaurants.details.push(data[0]);
			});
			// body...
	});
	socket.on('aknowledge newly added restaurant', function (msg) {
		// body...
		console.log(msg);
	});

	socket.on('new restaurant', function (msg) {
		// body...
		console.log(msg);
	});
	
	socket.on('hi new restaurant', function (msg) {
		// body...
		console.log(msg);
	});

  return socket;
}).value('restaurants', {details:{}});
