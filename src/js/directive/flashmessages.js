(function () {
	'use strict';

	/**
	 * @ngdoc directive
	 * @name angular-flash-messages:FlashMessages
	 * @description
	 * Render the flash messages, optionally filtering them by type
	 */
	function FlashMessages () {
		return {
			restrict: 'E',
			scope: {
				type: '@?'
			},
			templateUrl: 'templates/flashmessages.html',
			controller: 'FlashMessagesController'
		};
	}

	angular
		.module('angular-flash-messages')
		.directive('flashMessages', FlashMessages);
})();