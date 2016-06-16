/**
 * Created by user on 5/13/2016.
 */

angular
  .module('vendorMenu', [
    'ionic',
    'vendorMenu.ctrl',
    'home.ctrl',
    'about.ctrl',
    'profile.ctrl',
    'joblist.ctrl',
    'history.ctrl',
    'settings.ctrl',
    'subscription.ctrl',
    'distributor.ctrl'
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

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'content/home.html',
            controller: 'HomeCtrl as hc'
          }
        }
      })

      .state('app.about', {
        url: '/about',
        views: {
          'menuContent': {
            templateUrl: 'content/about.html',
            controller: 'AboutCtrl as ac'
          }
        }
      })

      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'content/profile.html',
            controller: 'ProfileCtrl as pc'
          }
        }
      })

      .state('app.joblist', {
        url: '/joblist',
        views: {
          'menuContent': {
            templateUrl: 'content/joblist.html',
            controller: 'JoblistCtrl as jc'
          }
        }
      })

      .state('app.history', {
        url: '/history',
        views: {
          'menuContent': {
            templateUrl: 'content/history.html',
            controller: 'HistoryCtrl as hc'
          }
        }
      })

      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'content/settings.html',
            controller: 'SettingsCtrl as sc'
          }
        }
      })

      .state('app.subscription', {
        url: '/subscription',
        views: {
          'menuContent': {
            templateUrl: 'content/subscription.html',
            controller: 'SubscriptionCtrl as fc'
          }
        }
      })

      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: '../loginPage/index.html',
            controller: 'LoginCtrl as lc'
          }
        }
      })
    
      .state('app.distributor', {
        url: '/distributor',
        views: {
          'menuContent': {
            templateUrl: 'content/distributor.html',
            controller: 'DistributorCtrl as dc'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  })
