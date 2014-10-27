'use strict';

angular.module('app')
  .controller('ProjectCtrl', function ($scope) {
    $scope.projects = [
      {
      	'name':'Plugmedia', 
      	'items':[
      		{
      			'label':'Overview',
      			'url':'plugmedia.overview'
      		}, 
      		{
      			'label':'Web Design',
      			'url':'plugmedia.webdesign'
      		},
      		{ 
      			'label':'Web Development',
      			'url':'plugmedia-overview'
      		},
      		{ 
      			'label':'Logo Design',
      			'url':'plugmedia-overview'
      		},
      		{ 
      			'label':'Branding',
      			'url':'plugmedia-overview'
      		}
            ]
      },
      {
      	'name':'Peter Ashmore', 
      	'items':[
      		{
      			'label':'Overview',
      			'url':'peter-ashmore-overview'
      		}, 
      		{
      			'label':'Web Design',
      			'url':'peter-ashmore-overview'
      		},
      		{ 
      			'label':'Web Development',
      			'url':'peter-ashmore-overview'
      		},
      		{ 
      			'label':'Logo Design',
      			'url':'peter-ashmore-overview'
      		},
      		{ 
      			'label':'Branding',
      			'url':'peter-ashmore-overview'
      		}
            ]
      },
      {
      	'name':'Trunkys', 
      	'items':[
      		{
      			'label':'Overview',
      			'url':'trunkys-overview'
      		}, 
      		{
      			'label':'Web Design',
      			'url':'trunkys-overview'
      		},
      		{ 
      			'label':'Web Development',
      			'url':'trunkys-overview'
      		},
      		{ 
      			'label':'Logo Design',
      			'url':'trunkys-overview'
      		},
      		{ 
      			'label':'Branding',
      			'url':'trunkys-overview'
      		}
            ]
      }
    ];
  });
