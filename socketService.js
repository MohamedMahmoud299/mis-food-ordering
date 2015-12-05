'use strict';
var io = require('socket.io').listen(4000);
var restaurantsSockets = require('./server/sockets/restaurants');
// var socket = null;
io.on('connection', function(socket) {
    console.log('connected is..', socket.id)
        // socket = connectedSocket;
        // socket.emit('news', { hello: 'world' });
        // socket.on('my other event', function (data) {
        //   console.log(data);
        // });
    socket.on('my event', function(data) {
        // body...
        console.log('listed to my event finally!', data);
        restaurantsSockets.socket = socket;
        restaurantsSockets.data = data;
    });
});
module.exports = io;