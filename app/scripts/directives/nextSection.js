'use strict';

angular.module('app.directives.sectionNavigation', [])
	.directive('sectionNavigation', function() {
		return {
			restrict: 'E',
			scope: {
				next: '=',
				previous: '='
			},
			templateUrl:'views/section-navigation.html'
		};
	});
