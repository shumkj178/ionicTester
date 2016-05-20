/**
 * Created by user on 5/19/2016.
 */
(function () {
  'use strict';

  angular
    .module('about.ctrl', [])
    .controller('AboutCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$ionicSideMenuDelegate',
      function ($scope, $rootScope, $timeout, $interval, $ionicSideMenuDelegate) {
        //variables
        var self = this;
        
        //function variables
        self.alert = alert;

        //function declaration
        function alert(){
          console.log("3");
        }

      }
    ])
})();
