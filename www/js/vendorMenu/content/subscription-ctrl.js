/**
 * Created by user on 5/20/2016.
 */
(function () {
  'use strict';

  angular
    .module('subscription.ctrl', [])
    .controller('SubscriptionCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$window', '$ionicActionSheet',
      function ($scope, $rootScope, $timeout, $interval, $window, $ionicActionSheet) {
        //variables
        var self = this;

        self.show = show;

        function show() {
          var hideSheet = $ionicActionSheet.show({
            buttons: [
              {text: 'View Job'},
              {text: 'View Request'}
            ],
            destructiveText: 'Remove from Subscription',
            titleText: 'Select Your Action',
            cancelText: 'Cancel',
            cancel: function () {

            },
            buttonClicked: function (index) {
              if (index === 0) {
                $window.location.href = "../../js/jobs/taxi/index.html";
              }
            }
          });

          $timeout(function () {
            hideSheet();
          }, 5000);
        }
        // $scope.show = function() {
        //
        //   // Show the action sheet
        //   var hideSheet = $ionicActionSheet.show({
        //     buttons: [
        //       { text: 'View Job' }
        //     ],
        //     destructiveText: 'Remove from Favourites',
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
