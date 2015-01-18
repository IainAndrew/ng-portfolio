'use strict';

angular.module('app.directives.backToTop', [])
	.directive('backToTop', function() {
		return {
			restrict: 'E',
			scope: {
				offset: '='
			},
			templateUrl:'views/back-to-top.html',
			link: function(scope, element, attributes) {
				var $win = $('.view-container').add($('.project-main'));
				element.on('click', function(event) {
					$win.animate({scrollTop: $win.offset().top + scope.offset}, 'slow');
					event.preventDefault();
				});
			}
		};
	});
