'use strict';
var express = require('express');
var jwt = require('express-jwt');
var creds = require('../creds/creds');
// var permissions = require ('../middlewares/permissions');
var router = express.Router();
var controller = require('../controllers/user');
module.exports = function(app) {
  console.log('are we here');
    app.use('/api/users', jwt({secret:creds.jwtSecret}).unless({path:['/api/users/login','/api/users/signup']}), router);
};
router.post('/login', controller.logIn);
router.post('/signup', controller.signUp);
