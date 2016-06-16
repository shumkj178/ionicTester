(function () {
  'use strict';

  angular
    .module('login.ctrl', [])
    .controller('LoginCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$window', '$ionicPopup', '$http',
      function ($scope, $rootScope, $timeout, $interval, $window, $ionicPopup, $http) {
        //variables
        var self = this;

        self.login = login;
        self.users = [];

        function login() {
          var alertPopup = $ionicPopup.alert({
            title: 'Service App',
            template: 'Login Successful ! Welcome !',
            okText: 'PROCEED',
            okType: 'button-dark'
          });

          alertPopup.then(function (respond) {
            $window.location.href = "../../js/vendorMenu/index.html";
          }); 
        }

        // $scope.showAlert = function() {
        //   var alertPopup = $ionicPopup.alert({
        //     title: 'Don\'t eat that!',
        //     template: 'It might taste good'
        //   });
        //   alertPopup.then(function(res) {
        //     console.log('Thank you for not eating my delicious ice cream cone');
        //   });
        // }

        var service = $http.get("content/user.json");
        service.then(function (result) {
          self.users = result.data.user;
        });
      }
    ])
})();
