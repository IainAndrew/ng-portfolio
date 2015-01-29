'use strict';

angular
  .module('app', [
    'ui.router',
    'app.directives.sidebar',
    'app.directives.headerBlock',
    'app.directives.dropdown',
    'app.directives.backToTop',
    'app.directives.tooltip',
    'app.directives.logo'
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
        controller: 'AboutCtrl',
        title: 'About'
      })
      .state('about-more', {
        url: '/about-more',
        templateUrl: 'views/about-more.html',
        controller: 'AboutCtrl',
        title: 'More About Me'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        title: 'Portfolio'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        title: 'Contact'
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
        controller: 'ProjectCtrl',
        title: 'Plugmedia'
      })
      .state('plugmedia.web-design', {
        url: '/web-design',
        templateUrl: 'views/plugmedia/webdesign.html',
        controller: 'ProjectCtrl',
        title: 'Plugmedia - Web Design'
      })
      .state('plugmedia.web-development', {
        url: '/web-development',
        templateUrl: 'views/plugmedia/webdev.html',
        controller: 'ProjectCtrl',
        title: 'Plugmedia - Web Development'
      })
      .state('plugmedia.logo-design', {
        url: '/logo-design',
        templateUrl: 'views/plugmedia/logodesign.html',
        controller: 'ProjectCtrl',
        title: 'Plugmedia - Logo Design'
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
        controller: 'ProjectCtrl',
        title: 'Peter Ashmore'
      })
      .state('peter-ashmore.web-design', {
        url: '/web-design',
        templateUrl: 'views/peter-ashmore/webdesign.html',
        controller: 'ProjectCtrl',
        title: 'Peter Ashmore - Web Design'
      })
      .state('peter-ashmore.web-development', {
        url: '/web-development',
        templateUrl: 'views/peter-ashmore/webdev.html',
        controller: 'ProjectCtrl',
        title: 'Peter Ashmore - Web Development'
      })
      .state('peter-ashmore.graphic-design', {
        url: '/graphic-design',
        templateUrl: 'views/peter-ashmore/graphicdesign.html',
        controller: 'ProjectCtrl',
        title: 'Peter Ashmore - Graphic Design'
      })
      .state('peter-ashmore.logo-design', {
        url: '/logo-design',
        templateUrl: 'views/peter-ashmore/logodesign.html',
        controller: 'ProjectCtrl',
        title: 'Peter Ashmore - Logo Design'
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
        controller: 'ProjectCtrl',
        title: 'Trunkys'
      })
      .state('trunkys.graphic-design', {
        url: '/graphic-design',
        templateUrl: 'views/trunkys/graphicdesign.html',
        controller: 'ProjectCtrl',
        title: 'Trunkys - Graphic Design'
      })
      .state('trunkys.ui-design', {
        url: '/ui-design',
        templateUrl: 'views/trunkys/uidesign.html',
        controller: 'ProjectCtrl',
        title: 'Trunkys - UI Design'
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
        controller: 'ProjectCtrl',
        title: 'Footer-reveal.js'
      })
      .state('footerreveal.web-development', {
        url: '/web-development',
        templateUrl: 'views/footerreveal/webdev.html',
        controller: 'ProjectCtrl',
        title: 'Footer-reveal.js - Web Development'
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
        controller: 'ProjectCtrl',
        title: 'Simplespin.css'
      })
      .state('simplespin.web-development', {
        url: '/web-development',
        templateUrl: 'views/simplespin/webdev.html',
        controller: 'ProjectCtrl',
        title: 'Simplespin.css - Web Development'
      });
  }])
  .run([ '$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeSuccess', function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  }])

