'use strict';

var controller = {};
var restaurantService = require('../services/restaurants');

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
	restaurantService.addNewRestaurant(req).then(function  (response) {
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