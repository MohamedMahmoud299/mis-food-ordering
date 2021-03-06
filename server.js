  'use strict';
  var express = require('express');
  var mongoose = require('mongoose');
  // var creds = require('./server/creds/creds');
  var bodyParser = require('body-parser');
  var app = require('./config');
  var path = require('path');
  var io = require('./socketService');
  // var io = config.io;
  // var app = config.app;
  // var jwt = require('jsonwebtoken');
  // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

  // var app = express();

  // mongoose.connect('mongodb://' + creds.dbUser + ':' + creds.dbPass + '@ds057954.mongolab.com:57954/mis-food-ordering');
  mongoose.connect('mongodb://localhost/mis-food-ordering');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // yay!
    console.log('yay');
    console.log('a');
  });


  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  

  // io.on('connection', function  (socket) {
  //   // body...
  //   socket.on('add new restaurant', function (msg) {
  //     // body...
  //     console.log(msg);
  //     socket.emit('aknowledge newly added restaurant', 'done');
  //     socket.broadcast.emit('new restaurant', 'new restaurant has been added');
  //     io.emit('hi new restaurant', 'hi all');
  //   });
  // });
  // app.use(function(req,res,next){
  //     req.io = io;

  //     next();
  // });
  require('./server/routes/userroutes')(app); //requiring all routes go here// need to use a loop on all routes file // @TODO: loop will be in next version isA.
  require('./server/routes/restaurantroutes')(app); //requiring all routes go here// need to use a loop on all routes file // @TODO: loop will be in next version isA.
  app.use(express.static(path.join(__dirname + '/public')));
  app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));
  app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
  app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
  });
  app.use(function(req, res) {
    res.type('text/plain');
    res.status(500);
    res.send('500 - Internal Server Error');
  });
