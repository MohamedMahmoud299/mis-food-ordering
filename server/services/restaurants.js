'use strict';

var service = {};
var db = require('../models');
var Q = require('q');

service.getAllRestaurants = function  (req) {
	var q = db.Restaurant.find();
	return Q.nfcall(q.exec.bind(q));
};

service.getRestaurantMenu = function  (req) {
	var id = req.params.id;
	var q = db.Restaurant.find({'_id':id}).select('menu');
	return Q.nfcall(q.exec.bind(q));
};

service.addNewRestaurant = function  (req) {
	var restaurant = new db.Restaurant(req.body);
	return Q.nfcall(restaurant.save.bind(restaurant));

};

service.addRestaurantMenu = function  (req) {
	var restaurant = new db.Restaurant();
	restaurant.menu.push(req.body.item);
	return Q.nfcall(restaurant.save.bind(restaurant));
};

module.exports = service;