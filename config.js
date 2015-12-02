'use strict';
var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
var io = require('socket.io').listen(4000);
io.bullshit = 'hiedeed';

app.set('port', process.env.PORT || 9000);
app.listen(app.get('port'), function() {
  console.log('listening on port 9000');
});

module.exports = {
  io : io,
  app:app
};
