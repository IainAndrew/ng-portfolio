'use strict';

angular.module('app.directives.dropdown', [])
	.directive('dropdown', function() {
		return {
			restrict: 'A',
			link: function(scope, element) {
				element.find('#menu-toggle').click(function() {
					element.find('ul').toggleClass('menu-show');
				});
				element.find('ul').click(function() {
					setTimeout(function() {
						element.find('ul').toggleClass('menu-show');
					}, 500);
				});
			}
		};
	});
