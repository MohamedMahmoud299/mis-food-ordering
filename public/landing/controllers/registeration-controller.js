'use strict';
angular.module('FoodApp')
  .controller('registerCtrl', function ($scope, $http, notify) {
    $scope.passwordField = 'password';
    $scope.register = function () {
      $http.post('/api/users/signup', $scope.creds).success(function (res) {
        console.log(res);
        if(res.result === true){
          notify({
            message:res.message,
            duration:3000,
            classes:'alert-success'
          });
        }
        else if(res.result === false){
          notify({
            message:res.message,
            duration:3000,
            classes:'alert-danger'
          });
        } else {
          notify({
            message:res.message,
            duration:3000,
            classes:'alert-danger'
          });
        }
      }).error(function (err) {
        notify({
          message:err,
          duration:3000,
          classes:'alert-danger'
        });
        console.log(err);
      });
    };
    $scope.unmask = function (flag) {
      if(flag){
        $scope.passwordField = 'text';
      } else {
        $scope.passwordField = 'password';
      }
    };
  });
