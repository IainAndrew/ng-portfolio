'use strict';

angular.module('app')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.projects = [
      {
      	'name':'Plugmedia', 
      	'roles':['Web Design', 'Web Development', 'Logo Design', 'Branding'], 
      	'desc':'A website for a Dublin based digital media company',
      	'url':'plugmedia'
      },
      {
      	'name':'Peter Ashmore', 
      	'roles':['Web Design', 'Web Development', 'Logo Design', 'Branding'],
      	'desc':'I designed this website for an audio engineer',
      	'url':'peter-ashmore'
      },
      {
      	'name':'Trunkys', 
      	'roles':['Graphic Design'],
      	'desc':'Illustrations for a stupid app',
      	'url':'trunkys'
      }
    ];
  });
