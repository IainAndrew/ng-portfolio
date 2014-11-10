'use strict';

angular.module('app')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.projects = [
      {
      	'name':'Plugmedia', 
      	'roles':['Web Design', 'Web Development', 'Logo Design', 'Branding'], 
      	'desc':'A website for a Dublin based digital media company Lorem ipsum dolor sit amet, consectetur adipisicing.',
      	'url':'plugmedia',
        'image':'"../../images/landscape.png'
      },
      {
      	'name':'Peter Ashmore', 
      	'roles':['Web Design', 'Web Development', 'Logo Design', 'Branding'],
      	'desc':'I designed this website for an audio engineer',
      	'url':'peter-ashmore',
        'image':'"../../images/landscape.png'
      },
      {
      	'name':'Trunkys', 
      	'roles':['Graphic Design'],
      	'desc':'Illustrations for a stupid app',
      	'url':'trunkys',
        'image':'"../../images/landscape.png'
      },
      {
        'name':'Footer-reveal.js', 
        'roles':['Web Development'],
        'desc':'a jquery plugin',
        'url':'footerreveal',
        'image':'../../images/landscape.png'
      },
      {
        'name':'Simplespin.css', 
        'roles':['Web Development'],
        'desc':'a css library',
        'url':'simplespin',
        'image':'../../images/landscape.png'
      }
    ];
  });
