'use strict';

angular.module('app.directives.logo', [])
	.directive('logo', function() {
		return {
			restrict: 'E',
			templateUrl:'views/logo.html',
			link: function(element) {
				var $logo = $('logo'),
					$svg = $logo.find('svg');
				$logo.addClass('logo-animate');
				setTimeout (function() {
					$('nav').addClass('nav-show');
				}, 4200);
				$logo.find('img').mouseenter(function() {
					$('nav').addClass('nav-show');
				});
				$logo.find('img').mouseleave(function() {
					$('nav').addClass('nav-hide');
				});
			}
		};
	});
