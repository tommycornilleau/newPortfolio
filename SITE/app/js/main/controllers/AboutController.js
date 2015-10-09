'use strict';

/* Controllers */

var angular = angular;

angular.module('main').controller('AboutController', ['$scope', '$location', function($scope, $location) {
	function start() {
		console.log($scope);
		console.log($location);
	}

	var init = function() {
		start();
	};

	init();
}]);
