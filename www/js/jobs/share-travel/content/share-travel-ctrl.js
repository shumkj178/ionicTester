/**
 * Created by user on 5/27/2016.
 */
(function () {
  'use strict';

  angular
    .module('share-travel.ctrl', [])
    .controller('ShareTravelCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$ionicSideMenuDelegate', '$window', '$ionicPopup',
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
            template: 'Share Travel Subscribed! You will received a code shortly',
            okText: 'OK',
            okType: 'button-balanced'
          })
        }
      }
    ])
})();
