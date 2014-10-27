'use strict';

angular.module('app.directives.sidebar', [])
	.directive('sidebar', function() {
		return {
			restrict: 'E',
			scope: {
				projects: '=',
				filterBy: '='
			},
			templateUrl:'views/sidebar.html'
		};
	});
