'use strict';
var controller = {};
var restaurantService = require('../services/restaurants');
// var io = require ('../../config').io;
// var restaurantsSocket = require('../sockets/restaurants');
var io = require('../../socketService');
controller.getAllRestaurants = function(req, res) {
    restaurantService.getAllRestaurants(req).then(function(response) {
        res.json(response);
    }, function(err) {
        res.json(err);
    });
};
controller.getRestaurantMenu = function(req, res) {
    restaurantService.getRestaurantMenu(req).then(function(response) {
        res.json(response);
    }, function(err) {
        res.json(err);
    });
};
controller.addNewRestaurant = function(req, res) {
    restaurantService.addNewRestaurant(req).then(function(response) {
        io.emit('addedRestaurant', response);
        console.log('added restaurant and socket shouldve emitted')
            // console.log('global announcment of an added restaurant..', io.sockets.connected[io.connectedSock]);
        res.json(response);
    }, function(err) {
        res.json(err);
    });
};
controller.addRestaurantMenu = function(req, res) {
    restaurantService.addRestaurantMenu(req).then(function(response) {
        res.json(response);
    }, function(err) {
        res.json(err);
    });
};
module.exports = controller;