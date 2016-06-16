/**
 * Created by user on 5/27/2016.
 */
angular
  .module('taxi', [
    'ionic',
    'taxi.ctrl'
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
        //abstract: true,
        templateUrl: 'content/taxi.html',
        controller: 'TaxiCtrl as tc'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');
  })
