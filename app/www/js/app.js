/**
 * App configuration and initialisation
 */

var app = angular.module('Bitocracy', ['ionic'])

  .run(function ($ionicPlatform, $window) {
    //$ionicPlatform.ready(function () {
    //  if ($window.StatusBar) {
    //    StatusBar.styleDefault();
    //  }
    //});
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: 'views/tabs.html'
      })

      .state('tab.tokens', {
        url: '/tokens',
        views: {
          'tab-tokens': {
            templateUrl: 'views/tab-tokens.html',
            controller: 'TokensController'
          }
        }
      })

      .state('tab.project-details', {
        url: '/project-details/{id}',
        views: {
          'tab-tokens': {
            templateUrl: 'views/tab-project-details.html',
            controller: 'ProjectDetailsController'
          }
        }
      })

    // default state
    $urlRouterProvider.otherwise('/tab/tokens');

  })
