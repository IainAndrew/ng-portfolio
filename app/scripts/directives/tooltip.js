'use strict';

angular.module('app.directives.tooltip', [])
	.directive('tooltip', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				element.append('<div class="tooltip"><div class="tooltip-inner"><div class="tooltip-text">'+ element.attr('tooltip') +'</div></div></div>');
				if ( Modernizr.touch ) {
					element.click(function(event) {
						element.find('.tooltip').toggleClass('tooltip-show');
						event.stopPropagation();
					});
					$('body').click(function() {
						element.find('.tooltip').removeClass('tooltip-show');
					});
				} else {
					element.hover(function() {
						element.find('.tooltip').toggleClass('tooltip-show');
					});
				}
				if ( element.css('position') !== 'relative' || 'fixed' || 'absolute' ) {
					element.css({
						position: 'relative'
					});
				}
			}
		};
	});
