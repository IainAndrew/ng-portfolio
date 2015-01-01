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
    'app.directives.headerBlock',
    'app.directives.dropdown',
    'app.directives.backToTop',
    'app.directives.tooltip'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider
      .when('/plugmedia', '/plugmedia/')
      .when('/peter-ashmore', '/peter-ashmore/')
      .when('/trunkys', '/trunkys/')
      .when('/footerreveal', '/footerreveal/')
      .when('/simplespin', '/simplespin/')
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

      // Plugmedia

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
      .state('plugmedia.web-design', {
        url: '/web-design',
        templateUrl: 'views/plugmedia/webdesign.html',
        controller: 'ProjectCtrl'
      })
      .state('plugmedia.web-development', {
        url: '/web-development',
        templateUrl: 'views/plugmedia/webdev.html',
        controller: 'ProjectCtrl'
      })
      .state('plugmedia.logo-design', {
        url: '/logo-design',
        templateUrl: 'views/plugmedia/logodesign.html',
        controller: 'ProjectCtrl'
      })

      // Peter Ashmore

      .state('peter-ashmore', {
        url: '/peter-ashmore',
        templateUrl: 'views/peter-ashmore.html',
        controller: 'ProjectCtrl'
      })
      .state('peter-ashmore.overview', {
        url: '/',
        templateUrl: 'views/peter-ashmore/overview.html',
        controller: 'ProjectCtrl'
      })
      .state('peter-ashmore.web-design', {
        url: '/web-design',
        templateUrl: 'views/peter-ashmore/webdesign.html',
        controller: 'ProjectCtrl'
      })
      .state('peter-ashmore.web-development', {
        url: '/web-development',
        templateUrl: 'views/peter-ashmore/webdev.html',
        controller: 'ProjectCtrl'
      })
      .state('peter-ashmore.graphic-design', {
        url: '/graphic-design',
        templateUrl: 'views/peter-ashmore/graphicdesign.html',
        controller: 'ProjectCtrl'
      })
      .state('peter-ashmore.logo-design', {
        url: '/logo-design',
        templateUrl: 'views/peter-ashmore/logodesign.html',
        controller: 'ProjectCtrl'
      })

      // Trunkys

      .state('trunkys', {
        url: '/trunkys',
        templateUrl: 'views/trunkys.html',
        controller: 'ProjectCtrl'
      })
      .state('trunkys.overview', {
        url: '/',
        templateUrl: 'views/trunkys/overview.html',
        controller: 'ProjectCtrl'
      })
      .state('trunkys.graphic-design', {
        url: '/graphic-design',
        templateUrl: 'views/trunkys/graphicdesign.html',
        controller: 'ProjectCtrl'
      })
      .state('trunkys.ui-design', {
        url: '/ui-design',
        templateUrl: 'views/trunkys/uidesign.html',
        controller: 'ProjectCtrl'
      })

      // Footer-reveal.js

      .state('footerreveal', {
        url: '/footerreveal',
        templateUrl: 'views/footerreveal.html',
        controller: 'ProjectCtrl'
      })
      .state('footerreveal.overview', {
        url: '/',
        templateUrl: 'views/footerreveal/overview.html',
        controller: 'ProjectCtrl'
      })
      .state('footerreveal.web-development', {
        url: '/web-development',
        templateUrl: 'views/footerreveal/webdev.html',
        controller: 'ProjectCtrl'
      })

      // Simplespin.css

      .state('simplespin', {
        url: '/simplespin',
        templateUrl: 'views/simplespin.html',
        controller: 'ProjectCtrl'
      })
      .state('simplespin.overview', {
        url: '/',
        templateUrl: 'views/simplespin/overview.html',
        controller: 'ProjectCtrl'
      })
      .state('simplespin.web-development', {
        url: '/web-development',
        templateUrl: 'views/simplespin/webdev.html',
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
