'use strict';

angular.module('app.directives.sectionNavigation', [])
	.directive('sectionNavigation', function() {
		return {
			restrict: 'E',
			scope: {
				next: '=',
				nextUrl: '=',
				prev: '=',
				prevUrl: '='
			},
			templateUrl:'views/section-navigation.html'
		};
	});
