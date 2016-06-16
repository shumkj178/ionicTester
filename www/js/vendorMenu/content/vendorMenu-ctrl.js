/**
 * Created by user on 5/13/2016.
 */
(function () {
  'use strict';

  angular
    .module('vendorMenu.ctrl', [])
    .controller('VendorMenuCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$ionicSideMenuDelegate', '$window',
      function ($scope, $rootScope, $timeout, $interval, $ionicSideMenuDelegate, $window) {
        //variables
        var self = this;

        self.logout = logout;

        function logout() {
          $window.location.href = "../../js/loginPage/index.html";
        }
      }
    ])

})();
