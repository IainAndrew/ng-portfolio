'use strict';

angular.module('app.directives.headerBlock', [])
	.directive('headerBlock', function() {
		return {
			restrict: 'E',
			scope: {
				heading: '=',
				subhead: '='
			},
			link: function(scope, element, attributes) {
				$('button').click(function() {
					$('.circle-two').toggleClass('zip');
				});
			},
			templateUrl:'views/header-block.html'
		};
	});
