'use strict';

angular.module('app.directives.logo', [])
	.directive('logo', function() {
		return {
			restrict: 'E',
			templateUrl:'views/logo.html',
			link: function(element) {
				var $logo = $('logo');

				$logo.addClass('line-animate');
				console.log('line-animate');

				setTimeout (function() {
					console.log('line-hide');
					$logo.find('svg').hide();
				}, 2500);

				setTimeout (function() {
					console.log('logo-wobble');
					$logo.find('img').css({'opacity': 1});
					$logo.addClass('logo-wobble');
				}, 2500);

				setTimeout (function() {
					console.log('logo-scale');
					$logo.addClass('logo-scale');
				}, 3500);

				setTimeout (function() {
					console.log('logo-to-top');
					$logo.addClass('logo-to-top');
				}, 4500);

				setTimeout (function() {
					var $nav = $('nav'),
						touch = Modernizr.touch;

					$nav.css({'opacity': 1}).addClass('nav-show');
					console.log('nav-show');

					$logo.addClass('hoverable');

					function navShow() {
						$nav.addClass('nav-show');
						$logo.removeClass('logo-scroll');
					}
					function navHide() {
						$nav.removeClass('nav-show');
						$logo.addClass('logo-scroll');
					}
	
					if (!touch) { // if not a touch screen
						$logo.mouseenter(function() {
							navShow();
						});
						$nav.mouseenter(function() {
							navShow();
						});
						$nav.mouseleave(function() {
							if ( $(window).scrollTop() <= 50 ) {
								navShow();
							} else {
								navHide();
							}
						});	
					} else { // if touch screen
						$logo.click(function(event) {
							$nav.toggleClass('nav-show');
							$logo.toggleClass('logo-scroll');
							event.stopPropagation();
						});
						$('body').click(function() {
							if ( $(window).scrollTop() > 50 ) {
								navHide();
							}
						});
					}

					$(window).on('scroll load', function() {
						if ( $(window).scrollTop() <= 50 ) {
							navShow();
						} else {
							navHide();
						}
					});
				}, 5000);
			}
		};
	});
