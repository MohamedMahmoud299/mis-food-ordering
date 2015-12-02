'use strict';
var userService = require('../services/user');
var io = require('../../config').io;
var controller = {};
controller.logIn = function (req, res) {
  if(req.io) {
    console.log('socket assigned to req');
    console.log(io.bullshit,'first log ');
    console.log (req.io.bullshit,'req');
  }
  console.log('looged in');
  var socket = null;
    // io.on('connection', function(socket){
    //   console.log('a user connected');
    //   console.log('.. id is ', socket.id)
    //   io.connectedSock = socket;
    //   io.emit('hi',{msg:'hi'});
    // });
  userService.logIn(req, socket).then(function (response) {

    res.json(response);


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
