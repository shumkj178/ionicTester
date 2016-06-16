/**
 * Created by user on 5/27/2016.
 */
(function () {
  'use strict';

  angular
    .module('taxi.ctrl', [])
    .controller('TaxiCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$ionicSideMenuDelegate', '$window', '$ionicPopup',
      function ($scope, $rootScope, $timeout, $interval, $ionicSideMenuDelegate, $window, $ionicPopup) {
        //variables
        var self = this;

        //function variables
        self.alert = alert;
        self.back = back;
        self.confirmMessage = confirmMessage;

        //function declaration
        function alert(){
          console.log("3");
        }

        function back() {
          $window.history.back();
        }

        function confirmMessage() {
          var alertPopup =  $ionicPopup.alert({
            title: 'Service App',
            template: 'Taxi Subscribed!',
            okText: 'OK',
            okType: 'button-balanced'
          })
        }
      }
    ])
})();
