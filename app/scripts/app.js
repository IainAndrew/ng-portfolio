'use strict';

angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'app.directives.sidebar',
    'app.directives.headerBlock'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider
      .when('/plugmedia', '/plugmedia/')
      .otherwise('/');

    $stateProvider
      .state('about', {
        url: '/',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('about-more', {
        url: '/about-more',
        templateUrl: 'views/about-more.html',
        controller: 'AboutCtrl'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .state('plugmedia', {
        url: '/plugmedia',
        templateUrl: 'views/plugmedia.html',
        controller: 'ProjectCtrl'
      })
      .state('plugmedia.overview', {
        url: '/',
        templateUrl: 'views/plugmedia/overview.html',
        controller: 'ProjectCtrl'
      })
      .state('plugmedia.webdesign', {
        url: '/webdesign',
        templateUrl: 'views/plugmedia/webdesign.html',
        controller: 'ProjectCtrl'
      })
      .state('peter-ashmore', {
        url: '/peter-ashmore',
        templateUrl: 'views/peter-ashmore.html',
        controller: 'ProjectCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      });
  }])
  .run(function($rootScope, $state) {
    $rootScope.$state = $state;
  });
