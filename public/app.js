'use strict';
var app = angular.module('FoodApp',['ui.bootstrap', 'ui.router', 'cgNotify', 'ngMaterial']);
app.config(function ($locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('authInterceptor');

}).factory('Io', function (events, $q, $rootScope, restaurants) {
	var socket = io.connect('http://localhost:4000');
	socket.on('addedRestaurant',function  (data) {
		// def = $q.defer ();
		console.log('client socket', data);

			// events.details.details.addedRestaurant = data;
			console.log(events.details.details.addedRestaurant)
			$rootScope.$apply(function(){
				restaurants.details.push(data[0]);
			});

		
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
	// socket.on('my event','hiiiiiiiiiiiiiiiiiiii');

  return{
  	socket:socket
  } 
}).factory('events', function($q){
	var events = {details:{}};
	var def = $q.defer();
	def.resolve(events);
	return {
		event:def.promise,
		details:events
	};

}).value('restaurants', {details:[]});
