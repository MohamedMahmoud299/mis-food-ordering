'use strict';
var app = angular.module('FoodApp',['ui.bootstrap', 'ui.router', 'cgNotify']);
app.config(function ($locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('authInterceptor');

});
