'use strict';
angular.module('FoodApp').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/',
    views: {
      header: {
        templateUrl: 'landing/views/header.html',
        controller: 'mainCtrl'
      },
      body: {
        templateUrl: 'landing/views/login.html',
        controller: 'loginCtrl'
      }
    },
  })
  .state('register',{
    url:'/register',
    templateUrl:'landing/views/register.html',
    controller:'registerCtrl'
  });


  $urlRouterProvider.otherwise('/');
});
