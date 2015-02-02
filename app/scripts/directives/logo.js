'use strict';

angular.module('app.directives.logo', [])
	.directive('logo', function() {
		return {
			restrict: 'E',
			templateUrl:'views/logo.html',
			link: function(element) {
				var $logo = $('logo');

				function lineDraw() {
					$logo.addClass('line-animate');
					//console.log('line-animate');
				}
				function lineHide() {
					//console.log('line-hide');
					$logo.find('svg').hide();
				}
				function wobble() {
					//console.log('logo-wobble');
					$logo.find('img').css({'opacity': 1});
					$logo.addClass('logo-wobble');
				}
				function scale() {
					//console.log('logo-scale');
					$logo.addClass('logo-scale');
				}
				function toTop() {
					//console.log('logo-to-top');
					$logo.addClass('logo-to-top');
				}
				function nav() {
					var $nav = $('nav'),
							touch = Modernizr.touch,
							$ovl = $('.overlay');

					$nav.css({'opacity': 1}).addClass('nav-show');
					//console.log('nav-show');

					$logo.addClass('hoverable');
					$('.view-container').addClass('on-load');
					$('body').animate({scrollTop: 0}, 'slow');

					function navShow() {
						$nav.addClass('nav-show');
						$logo.removeClass('logo-scroll');
						if ( $(window).scrollTop() > 30 ) {
							$ovl.addClass('show');
						}
					}
					function navHide() {
						$nav.removeClass('nav-show');
						$logo.addClass('logo-scroll');
						$ovl.removeClass('show');
					}
					
					if (!touch) { // if not a touch screen
						$logo.mouseenter(function() {
							navShow();
						});
						$nav.mouseenter(function() {
							navShow();
						});
						$nav.mouseleave(function() {
							if ( $(window).scrollTop() <= 30 ) {
								navShow();
							} else {
								navHide();
							}
						});	
					} else { // if touch screen
						$logo.click(function(event) {
							$nav.toggleClass('nav-show');
							$logo.toggleClass('logo-scroll');
							if ( $(window).scrollTop() > 30 ) {
								$ovl.toggleClass('show');
							}
							event.stopPropagation();
						});
						$('body').click(function() {
							if ( $(window).scrollTop() > 30 ) {
								navHide();
							}
						});
					}

					$(window).on('scroll load', function() {
						if ( $(window).scrollTop() <= 30 ) {
							navShow();
							$ovl.removeClass('show');
							//$nav.removeClass('dark-labels');
						} else {
							navHide();
							//$nav.addClass('dark-labels');
						}
					});
				}
				lineDraw();
				setTimeout (function() { lineHide(); }, 2500);
				setTimeout (function() { wobble(); }, 2500);
				setTimeout (function() { scale(); }, 3500);
				setTimeout (function() { toTop(); }, 4200);
				setTimeout (function() { nav(); }, 4800);
			}
		};
	});
