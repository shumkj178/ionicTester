
angular
  .module('loginPage', [
    'ionic',
    'loginPage.ctrl'
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
        url: '/',
        templateUrl: 'content/loginPage.html',
        controller:'LoginPageCtrl as sc'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

  });
