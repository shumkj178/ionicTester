/**
 * Created by user on 5/13/2016.
 */
(function () {
  'use strict';

  angular
    .module('home.ctrl', [])
    .controller('HomeCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$ionicSideMenuDelegate', '$window', '$http',
      function ($scope, $rootScope, $timeout, $interval, $ionicSideMenuDelegate, $window, $http) {
        //console.log('test');
        var self = this;
        self.items = [];

        var service = $http.get("content/dummy.json");
        service.then(function (result) {
          self.items = result.data.android;
        });
      }
    ])
})();
