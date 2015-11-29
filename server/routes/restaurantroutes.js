'use strict';
var express = require('express');
var router = express.Router();
var jwt = require ('express-jwt');
var creds = require('../creds/creds');
var permissions = require('../middlewares/permissions');
var controller = require('../controllers/restaurants');
module.exports = function (app) {
	// body...
	app.use('/api/restaurants', jwt({secret:creds.jwtSecret}), permissions, router);
};

router.get('/', controller.getAllRestaurants);
router.get('/:id/menu', controller.getRestaurantMenu);
router.post('/', controller.addNewRestaurant);
router.post('/:id/menu', controller.addRestaurantMenu);


