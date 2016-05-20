(function () {
  'use strict';

  angular
    .module('login.ctrl', [])
    .controller('LoginCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$window',
      function ($scope, $rootScope, $timeout, $interval, $window) {
        //variables
        var self = this;

        self.go = go;

        function go() {
          $window.location.href = "../../js/vendorMenu/index.html";
        }
      }
    ])
})();
