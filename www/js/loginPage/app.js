
angular
  .module('login', [
    'ionic',
    'login.ctrl'
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
        templateUrl: 'content/loginPage.html',
        controller:'LoginCtrl as lc'
      })

      .state('vendorMenu', {
        url: '/vendorMenu',
        views: {
          'menuContent': {
            templateUrl: '../vendorMenu/index.html',
            controller: 'VendorMenuCtrl as vc'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');

  });
