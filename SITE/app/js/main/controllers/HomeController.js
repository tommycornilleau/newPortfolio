'use strict';

/* homeController */

var homeController = function($scope, $location) {
	function start() {
		console.log($scope);
		console.log($location);
	}

	var init = function() {
		start();
	};

	init();
};

module.exports = homeController;
