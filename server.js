'use strict';
var express = require('express');
var mongoose = require('mongoose');
var creds = require('./server/creds/creds');
var bodyParser = require('body-parser');
// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.set('port', process.env.PORT || 9000);
// mongoose.connect('mongodb://' + creds.dbUser + ':' + creds.dbPass + '@ds057954.mongolab.com:57954/mis-food-ordering');
mongoose.connect('mongodb://localhost/mis-food-ordering');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // yay!
  console.log('yay');
});

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(function(req,res,next){
    req.io = io;
    next();
});
require('./server/routes/userroutes')(app); //requiring all routes go here// need to use a loop on all routes file // @TODO: loop will be in next version isA.
require('./server/routes/restaurantroutes')(app); //requiring all routes go here// need to use a loop on all routes file // @TODO: loop will be in next version isA.
app.use(express.static(__dirname + '/public'));
app.all('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
// io.sockets.on('connection', function (socket) {
//     console.log('client connect');
//     socket.on('echo', function (data) {
//         io.sockets.emit('message', data);
//     });
// });
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
http.listen(app.get('port'), function() {
  console.log('listening on port 3000');
  console.log(creds.dbPass);
});
