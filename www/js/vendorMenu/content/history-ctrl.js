/**
 * Created by user on 5/20/2016.
 */
(function () {
  'use strict';

  angular
    .module('history.ctrl', [])
    .controller('HistoryCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$window', '$http',
      function ($scope, $rootScope, $timeout, $interval, $window, $http) {
        //variables
        var self = this;

        self.jobsdone = [];

        var service = $http.get("content/jobsdone.json");
        service.then(function (result) {
          self.jobsdone = result.data.JobsDone;
        })
      }
    ])
})();
