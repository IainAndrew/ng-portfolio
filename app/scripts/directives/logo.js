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
				console.log('logo-animate');
				setTimeout (function() {
					console.log('logo-scale');
					$logo.addClass('logo-scale');
				}, 3500);
				setTimeout (function() {
					console.log('logo-to-top');
					$logo.addClass('logo-to-top');
				}, 4500);
				setTimeout (function() {
					//$('nav').addClass('nav-show');
					$('nav').css({'opacity': 1}).addClass('nav-show');
					console.log('nav-show');

					$logo.addClass('hoverable');
	
					if (!Modernizr.touch) {
						$logo.mouseenter(function() {
							$('nav').addClass('nav-show');
							$logo.removeClass('logo-scroll');
						});
						$('nav').mouseenter(function() {
							$('nav').addClass('nav-show');
							$logo.removeClass('logo-scroll');
						});
						$('nav').mouseleave(function() {
							if ( $(window).scrollTop() <= 50 ) {
								$('nav').addClass('nav-show');
								$logo.removeClass('logo-scroll');
							} else {
								$('nav').removeClass('nav-show');
								$logo.addClass('logo-scroll');
							}
						});	
					} else {
						$logo.click(function() {
							$('nav').toggleClass('nav-show');
							$logo.removeClass('logo-scroll');
						});
					}

					$(window).on('scroll load', function() {
						if ( $(this).scrollTop() <= 50 ) {
							$('nav').addClass('nav-show');
							$logo.removeClass('logo-scroll');
						} else {
							$('nav').removeClass('nav-show');
							$logo.addClass('logo-scroll');
						}
					});
				}, 5000);
			}
		};
	});
