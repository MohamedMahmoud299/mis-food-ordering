'use strict';
angular.module('FoodApp').controller('loginCtrl', function($scope, $state, $http, notify, $window, Login) {
    $scope.creds = {};
    $scope.logIn = function() {
        console.log($scope.creds);
        if (!$scope.creds.userName || !$scope.creds.password) {
            notify({
                message: 'Please enter your username and password.',
                duration: 3000,
                classes: 'alert-danger'
            });
            return;
        }
        $http.post('/api/users/login', $scope.creds).success(function(res) {
            console.log(res);
            if (res.result === true) {
                $window.localStorage.token = res.token;
                $window.localStorage.isLoggedIn = true;
                notify({
                    message: 'Welcome ' + $scope.creds.userName[0].toUpperCase() + $scope.creds.userName.substr(1) + ' enjoy your stay ;)',
                    duration: 3000,
                    classes:'btn btn-default'
                });
                $state.go('menu');
            } else if (res.result === false) {
                notify({
                    message: 'Wrong username or password!',
                    duration: 3000,
                    classes: 'alert-danger'
                });
            } else {}
        }).error(function(err) {
            console.log('unknown error');
            notify({
                message: err,
                duration: 3000,
                classes: 'alert-danger'
            });
        });
    };
    $scope.goToRegister = function() {
        $state.go('register');
    };
});