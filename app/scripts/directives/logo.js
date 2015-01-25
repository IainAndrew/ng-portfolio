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

					$logo.addClass('hoverable');
	
					if (!Modernizr.touch) {
						$logo.mouseenter(function() {
							$('nav').addClass('nav-show');
						});
						$('nav').mouseenter(function() {
							$('nav').addClass('nav-show');
						});
						$('nav').mouseleave(function() {
							$('nav').removeClass('nav-show');
						});	
					} else {
						$logo.click(function() {
							$('nav').toggleClass('nav-show');
						});
					}
				}, 4500);
			}
		};
	});
