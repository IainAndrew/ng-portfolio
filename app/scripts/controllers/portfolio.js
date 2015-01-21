'use strict';

angular.module('app')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.projects = [
      {
      	'name':'Plugmedia', 
      	'roles':['Web Design', 'Web Development', 'Logo Design'], 
      	'desc':'A website and logo design for a Dublin based digital media agency.',
      	'url':'plugmedia',
        'liveUrl':'//www.plugmedia.ie',
        'image':'../../images/plugmedia/thumb.png'
      },
      {
      	'name':'Peter Ashmore', 
      	'roles':['Web Design', 'Web Development', 'Graphic Design', 'Logo Design'],
      	'desc':'A single page website for a talented audio engineer & producer.',
      	'url':'peter-ashmore',
        'liveUrl':'//peterashmore.net',
        'image':'../../images/peter-ashmore/thumb.png'
      },
      {
        'name':'Footer-reveal.js', 
        'roles':['Web Development'],
        'desc':'A jQuery plugin for quick implementation of a revealing footer effect.',
        'url':'footerreveal',
        'liveUrl':'//iainandrew.github.io/footer-reveal',
        'image':'../../images/landscape.png'
      },
      {
      	'name':'Trunkys', 
      	'roles':['Graphic Design', 'UI Design'],
      	'desc':'Illustrations and UI design for a mobile app concept.',
      	'url':'trunkys',
        'liveUrl':'',
        'image':'../../images/trunkys/thumb.png'
      },
      {
        'name':'Simplespin.css', 
        'roles':['Web Development'],
        'desc':'A CSS library for basic spinning animations, built with LESS.',
        'url':'simplespin',
        'liveUrl':'//iainandrew.github.io/simplespin.css',
        'image':'../../images/simplespin/thumb.gif'
      }
    ];
  });
