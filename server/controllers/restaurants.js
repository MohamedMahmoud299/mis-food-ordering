'use strict';

var controller = {};
var restaurantService = require('../services/restaurants');
var io = require ('../../config').io;

controller.getAllRestaurants = function  (req, res) {
	restaurantService.getAllRestaurants(req).then(function  (response) {
		res.json(response);
	}, function  (err) {
		res.json(err);
	});
};

controller.getRestaurantMenu = function  (req, res) {
	restaurantService.getRestaurantMenu(req).then(function  (response) {
		res.json(response);
	}, function  (err) {
		res.json(err);
	});
};

controller.addNewRestaurant = function  (req, res) {
	console.log(req.body, 'add new');
	// console.log(io.connectedSock,'connectedSock')
	// console.log(req.sock,'is there a sock?');
	// var socket = req.socket;
	restaurantService.addNewRestaurant(req).then(function  (response) {
		// console.log('in response of service', io.socket)
		// io.sockets.on('connection', function (socket) {
		//       console.log('client logged in');
		      // io.emit('added restaurant', function (socket) {

		      // 	console.log('socket added restaurant.. and its id is ',socket.id);

		      //     socket.emit('added restaurant', response);
		      // });
		io.emit('added restaurant', response);
		// io.on('hi server', function (socket) {
		// 	// body...
		// 	console.log(socket,'hi server event')
		// })
		io.sockets.connected[io.connectedSock].on('hi server', function (data) {
			// body...
			console.log('hi server event data', data);
		})
		  // });
		      	console.log('global announcment of an added restaurant..', io.sockets.connected[io.connectedSock]);

		res.json(response);

	}, function  (err) {
		res.json(err);
	});
	
};

controller.addRestaurantMenu = function  (req, res) {
	restaurantService.addRestaurantMenu(req).then(function  (response) {
		res.json(response);
	}, function  (err) {
		res.json(err);
	});
};

module.exports = controller;