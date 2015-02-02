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
				var $win = $('body').add($('.project-main'));

				function toTop() {
					$win.animate({scrollTop: 0 + scope.offset}, 'slow');
				}
				element.on('click', function(event) {
					toTop();
					event.preventDefault();
				});
			}
		};
	});
