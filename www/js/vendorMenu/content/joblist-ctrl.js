/**
 * Created by user on 5/20/2016.
 */
(function () {
  'use strict';

  angular
    .module('joblist.ctrl', [])
    .controller('JoblistCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$window', '$ionicActionSheet', '$http',
      function ($scope, $rootScope, $timeout, $interval, $window, $ionicActionSheet, $http) {
        //variables
        var self = this;

        self.jobs = [];
        self.show = show;
        self.jobClick = jobClick;

        var service = $http.get("content/joblist.json");
        service.then(function (result) {
          self.jobs = result.data.JobList;
        })

        function show() {
          var hideSheet = $ionicActionSheet.show({
            buttons: [
              { text: 'View Job' },
              { text: 'Add to Favourites' }
            ],
            titleText: 'Select Your Action',
            cancelText: 'Cancel',
            cancel: function () {

            },
            buttonClicked: function () {
              return true;
            }
          });
        }

        function jobClick (job) {
          // JSON.stringify(job);
          job = job.toLowerCase();
          job = job.split(' ').join('-');
          $window.location.href = "../../js/jobs/" + job + "/index.html";
        }
        // $scope.show = function() {
        //
        //   // Show the action sheet
        //   var hideSheet = $ionicActionSheet.show({
        //     buttons: [
        //       { text: 'View Job' },
        //       { text: 'Add to Favourites' }
        //     ],
        //     titleText: 'Select Your Action',
        //     cancelText: 'Cancel',
        //     cancel: function() {
        //       // add cancel code..
        //     },
        //     buttonClicked: function(index) {
        //       return true;
        //     }
        //   });
        //
        //   // For example's sake, hide the sheet after two seconds
        //   $timeout(function() {
        //     hideSheet();
        //   }, 5000);
        //
        // };
      }
    ])
})();
