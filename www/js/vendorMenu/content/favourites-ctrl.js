/**
 * Created by user on 5/20/2016.
 */
(function () {
  'use strict';

  angular
    .module('favourites.ctrl', [])
    .controller('FavouritesCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$window', '$ionicActionSheet',
      function ($scope, $rootScope, $timeout, $interval, $window, $ionicActionSheet) {
        //variables
        var self = this;

        $scope.show = function() {

          // Show the action sheet
          var hideSheet = $ionicActionSheet.show({
            buttons: [
              { text: 'View Job' }
            ],
            destructiveText: 'Remove from Favourites',
            titleText: 'Select Your Action',
            cancelText: 'Cancel',
            cancel: function() {
              // add cancel code..
            },
            buttonClicked: function(index) {
              return true;
            }
          });

          // For example's sake, hide the sheet after two seconds
          $timeout(function() {
            hideSheet();
          }, 5000);

        };
      }
    ])
})();
