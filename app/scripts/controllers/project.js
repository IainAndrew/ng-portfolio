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
      			'url':'plugmedia.web-design'
      		},
      		{ 
      			'label':'Web Development',
      			'url':'plugmedia.web-development'
      		},
      		{ 
      			'label':'Logo Design',
      			'url':'plugmedia.logo-design'
      		}
            ],
            'prev':'',
            'next':'#/peter-ashmore'
      },
      {
      	'name':'Peter Ashmore', 
      	'items':[
      		{
      			'label':'Overview',
      			'url':'peter-ashmore.overview'
      		}, 
      		{
      			'label':'Web Design',
      			'url':'peter-ashmore.web-design'
      		},
      		{ 
      			'label':'Web Development',
      			'url':'peter-ashmore.web-development'
      		},
                  {
                        'label':'Graphic Design',
                        'url':'peter-ashmore.graphic-design'
                  },
      		{ 
      			'label':'Logo Design',
      			'url':'peter-ashmore.logo-design'
      		}
            ],
            'prev':'#/plugmedia',
            'next':'#/trunkys'
      },
      {
      	'name':'Trunkys', 
      	'items':[
      		{
      			'label':'Overview',
      			'url':'trunkys.overview'
      		}, 
      		{
      			'label':'Graphic Design',
      			'url':'trunkys.graphic-design'
      		},
                  {
                        'label':'UI Design',
                        'url':'trunkys.ui-design'
                  }
            ],
            'prev':'#/peter-ashmore',
            'next':'#/simplespin'
      },
      {
            'name':'Simplespin.css', 
            'items':[
                  {
                        'label':'Overview',
                        'url':'simplespin.overview'
                  }, 
                  {
                        'label':'Web Development',
                        'url':'simplespin.web-development'
                  }
            ],
            'prev':'#/trunkys',
            'next':'#/footerreveal'
      },
      {
            'name':'Footer-Reveal.js', 
            'items':[
                  {
                        'label':'Overview',
                        'url':'footerreveal.overview'
                  }, 
                  {
                        'label':'Web Development',
                        'url':'footerreveal.web-development'
                  }
            ],
            'prev':'#/simplespin',
            'next':''
      }
    ];
  });
