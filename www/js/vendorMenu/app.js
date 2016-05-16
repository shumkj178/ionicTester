/**
 * Created by user on 5/13/2016.
 */

angular
  .module('vendorMenu', [
    'ionic',
    'vendorMenu.ctrl',
    'test.ctrl'
  ])

  .run(function($ionicPlatform,$timeout) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }

    });
  })
  .config(function($ionicConfigProvider,$stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'content/vendorMenu.html',
        controller:'VendorMenuCtrl as vc'
      })

      .state('app.test', {
        url: '/test',
        views: {
          'menuContent': {
            templateUrl: 'content/test.html',
            controller: 'TestCtrl as tc'
          }
        }
      })
      .state('app.second', {
        url: '/second',
        views: {
          'menuContent': {
            templateUrl: 'content/second.html',
            controller: 'SecondCtrl as sc'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/test');
  })
