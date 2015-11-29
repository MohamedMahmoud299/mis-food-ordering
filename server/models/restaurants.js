'use strict';
var mongoose = require('mongoose');
// var Schema = require('mongoose').Schema;
var userSchema = mongoose.Schema({
    name: String,
    phone: String,
    description: String,
    rating: String,
    priceRange: String,
    menu: [{
        name: String,
        price: Number,
        type: String
    }]
});
module.exports = mongoose.model('Restaurant', userSchema);