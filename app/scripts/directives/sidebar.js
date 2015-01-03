'use strict';

angular.module('app.directives.sidebar', [])
	.directive('sidebar', function() {
		return {
			restrict: 'E',
			scope: {
				projects: '=',
				filterBy: '='
			},
			link: function(scope, element, attributes) {
				var $container = $('.view-container');

				function projectLoad() {
					if ($('.container').is('.plugmedia-overview, .plugmedia-web-design, .plugmedia-web-development,.plugmedia-logo-design,.peter-ashmore-overview,.peter-ashmore-web-design,.peter-ashmore-web-development,.peter-ashmore-graphic-design,.peter-ashmore-logo-design,.trunkys-overview,.trunkys-graphic-design,.trunkys-ui-design,.footerreveal-overview,.footerreveal-web-development,.simplespin-overview,.simplespin-web-development')) {
						$container.addClass('project-load');
					} else {
						$container.removeClass('project-load');
					}
				}
				setInterval(projectLoad, 100);
			},
			templateUrl:'views/sidebar.html'
		};
	});
