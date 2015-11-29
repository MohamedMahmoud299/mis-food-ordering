'use strict';
var db = require('../models');
var service = {};
var Q = require('q');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');


function encryption(password) {
    var def = Q.defer();
    bcrypt.hash(password, null, null, function(err, hashedpwd) { //null for salt which will be generated for us automatically
        if (hashedpwd) {
            def.resolve(hashedpwd);
        }
        if (err) {
            def.reject(err);
        }
    });
    return def.promise;
}

function validatePassword(password, hashedpwd) {
    var def = Q.defer();
    bcrypt.compare(password, hashedpwd, function(err, res) {
        if (res === true) {
            def.resolve({
                isValid: true
            });
        } else if (res === false) {
            def.resolve({
                isValid: false
            });
        } else {
            def.reject(err);
        }
    });
    return def.promise;
}
service.logIn = function(req) {
    var def = Q.defer();
    var q = db.User.findOne({
        'userName': req.body.userName
    });
    Q.nfcall(q.exec.bind(q)).then(function(user) {
        if (user) {
            validatePassword(req.body.password, user.password).then(function(res) {
                if (res.isValid === true) {
                  var token = jwt.sign(user, 'hahahaha', {expiresIn:60*200});
                    def.resolve({
                        result: true,
                        message: 'Authenticated.',
                        token: token
                    });
                } else if (res.isValid === false) {
                    def.reject({
                        result: false,
                        message: 'Wrong username or password.'
                    });
                } else {
                    def.reject({
                        result: false,
                        message: 'Unknown error.'
                    });
                }
            }, function(err) {
                def.reject(err);
            });
        } else {
            def.reject({
                result: false,
                message: 'Wrong username or password.'
            });
        }
    }, function(err) {
        def.reject(err);
    });
    return def.promise;
};
service.signUp = function(userName, password) {
    var def = Q.defer();
    var q = db.User.findOne({
        'userName': userName
    });
    Q.nfcall(q.exec.bind(q)).then(function(user) {
        if (user) {
            def.reject({
                result: false,
                message: 'Username is already taken, think of another one, moron!'
            });
        } else {
            var newUser = new db.User();
            newUser.userName = userName;
            encryption(password).then(function(res) {
                newUser.password = res;
                newUser.save(function(err, res) {
                    if (err) {
                        def.reject(err);
                    } else {
                        def.resolve({
                            result: true,
                            message: 'Thank you for registering!'
                        });
                    }
                });
            }, function(err) {
                def.reject(err);
            });
        }
    }, function(err) {
        def.reject(err);
    });
    return def.promise;
};
module.exports = service;