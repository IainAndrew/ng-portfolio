'use strict';

angular.module('app.directives.headerBlock', [])
	.directive('headerBlock', function() {
		return {
			restrict: 'E',
			scope: {
				heading: '=',
				subhead: '='
			},
			templateUrl:'views/header-block.html'
		};
	});
