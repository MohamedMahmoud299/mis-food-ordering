'use strict';
var mongoose = require('mongoose');
// var Schema = require('mongoose').Schema;

  var userSchema = mongoose.Schema({
    userName: String,
    password: String,
    avatarUrl: String,
    type: String,
    isRekt: {
      type: Boolean,
      default: false
    },
    activationCode: String
  });

module.exports = mongoose.model('User', userSchema);
