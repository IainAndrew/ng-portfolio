'use strict';

angular.module('app.directives.dropdown', [])
	.directive('dropdown', function() {
		return {
			restrict: 'A',
			link: function(scope, element) {
				var toggle = element.find('#menu-toggle'),
					menu = element.find('ul');

				toggle.click(function() {
					menu.toggleClass('menu-show');
					toggle.find('i').toggleClass('icon-menu icon-close');
				});
				menu.click(function() {
					setTimeout(function() {
						menu.removeClass('menu-show');
						toggle.find('i').toggleClass('icon-menu icon-close');
					}, 500);
				});
			}
		};
	});
