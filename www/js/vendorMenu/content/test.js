/**
 * Created by user on 5/13/2016.
 */
(function () {
  'use strict';

  angular
    .module('test.ctrl', [])
    .controller('TestCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$ionicSideMenuDelegate',
      function ($scope, $rootScope, $timeout, $interval, $ionicSideMenuDelegate) {
        console.log('test');
      }
    ])
})();
