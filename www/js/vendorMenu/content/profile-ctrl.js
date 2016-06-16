/**
 * Created by user on 5/20/2016.
 */
(function () {
  'use strict';

  angular
    .module('profile.ctrl', [])
    .controller('ProfileCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$window', '$ionicPopup',
      function ($scope, $rootScope, $timeout, $interval, $window, $ionicPopup) {
        //variables
        var self = this;

        self.popCreditTopUp = popCreditTopUp;

        function popCreditTopUp() {
          var myPopup = $ionicPopup.show({
            template: '<input style="text-align: center" type="number" value="10">',
            title: 'Credits Topup',
            subTitle: 'Enter The Amount of Credits',
            buttons: [
              {
                text: 'Confirm',
                type: 'button-balanced',
                onTap: function (ex) {
                  //return true;
                  myPopup = $ionicPopup.alert({
                    template: 'Top Up Successful!',
                    title: 'Service App',
                    okText: 'OKAY',
                    okType: 'button-positive'
                  })
                }
              },
              {
                text: 'Cancel',
                type: 'button-assertive',
                onTap: function () {
                  return true;
                }
              }
            ]
          })
        }

        $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
            title: 'Don\'t eat that!',
            template: 'It might taste good'
          });
          alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
          });
        }

      }
    ])
})();
