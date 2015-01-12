'use strict';

angular.module('app.directives.headerBlock', [])
	.directive('headerBlock', function() {
		return {
			restrict: 'E',
			scope: {
				heading: '=',
				subhead: '='
			},
			/*link: function(scope, element, attributes) {
				var $cont = $('.circles'),
					$btn = $cont.find('.button');

				$btn.click(function() {
					if (!$cont.is('.move-one, .move-two, .move-three')) {
						$cont.addClass('move-one');
					} else if ($cont.is('.move-one')) {
						$cont.addClass('move-two').removeClass('move-one');
					} else if ($cont.is('.move-two')) {
						$cont.addClass('move-three').removeClass('move-two');
						setTimeout(function() {
							$cont.removeClass('move-three');
						}, 1000);
					}
				});
			},*/
			templateUrl:'views/header-block.html'
		};
	});
