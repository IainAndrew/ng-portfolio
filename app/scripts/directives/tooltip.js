'use strict';

angular.module('app.directives.tooltip', [])
	.directive('tooltip', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				element.append('<div class="tooltip"><div class="tooltip-inner"><div class="tooltip-text"><p>'+ element.attr('tooltip') +'</p></div></div></div>');
				element.hover(function() {
					element.find('.tooltip').toggleClass('tooltip-show');
				});
			}
		};
	});
