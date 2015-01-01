'use strict';

angular.module('app')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.projects = [
      {
      	'name':'Plugmedia', 
      	'roles':['Web Design', 'Web Development', 'Logo Design'], 
      	'desc':'A website for a Dublin based digital media company Lorem ipsum dolor sit amet, consectetur adipisicing.',
      	'url':'plugmedia',
        'liveUrl':'//www.plugmedia.ie',
        'image':'../../images/plugmedia/thumb.png'
      },
      {
      	'name':'Peter Ashmore', 
      	'roles':['Web Design', 'Web Development', 'Logo Design', 'Graphic Design'],
      	'desc':'I designed this website for an audio engineer',
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
      	'roles':['Graphic Design'],
      	'desc':'Illustrations for a stupid app',
      	'url':'trunkys',
        'liveUrl':'',
        'image':'../../images/trunkys/thumb.png'
      },
      {
        'name':'Simplespin.css', 
        'roles':['Web Development'],
        'desc':'a css library',
        'url':'simplespin',
        'liveUrl':'//iainandrew.github.io/simplespin.css',
        'image':'../../images/simplespin/thumb.gif'
      }
    ];
  });
