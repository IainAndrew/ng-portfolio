'use strict';

angular.module('app.directives.headerBlock', [])
	.directive('headerBlock', function() {
		return {
			restrict: 'E',
			scope: {
				projects: '=',
				filterBy: '='
			},
			templateUrl:'views/header-block.html'
		};
	});
