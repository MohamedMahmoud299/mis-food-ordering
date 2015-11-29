'use strict';
var userService = require('../services/user');
var controller = {};
controller.logIn = function (req, res) {
  if(req.io) {
    console.log('socket assigned to req');
  }
  userService.logIn(req).then(function (response) {

    res.json(response);
    // req.io.on('connection', function(socket){
    //   console.log('a user connected');
    // });
  req.io.sockets.on('connection', function (socket) {
        console.log('client connect');
        socket.on('logged in', function (data) {
            req.io.sockets.emit('message', data);
        });
    });
  }, function (err) {
    res.json(err);
  });
};
controller.signUp = function (req, res) {
  userService.signUp(req.body.userName, req.body.password).then(function (response) {
    res.json(response);
  }, function (err) {
    res.json(err);
  });
};

module.exports = controller;
