'use strict';

angular.module('app.directives.logo', [])
	.directive('logo', function() {
		return {
			restrict: 'E',
			templateUrl:'views/logo.html',
			link: function(element) {
				var $logo = $('logo'),
					$svg = $logo.find('svg');
				$logo.addClass('line-animate');
			}
		};
	});
