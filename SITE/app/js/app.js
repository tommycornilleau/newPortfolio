'use strict';

var HomeController = require('./main/controllers/HomeController');

angular.module('app', ['ngRoute', 'main']).
config(function($routeProvider) {
	$routeProvider.when('/', { templateUrl: 'partials/home.html', controller: 'HomeController' });
	$routeProvider.when('/projects', { templateUrl: 'partials/projects.html', controller: 'ProjectsController' });
	$routeProvider.when('/project/:name', { templateUrl: 'partials/single.html', controller: 'SingleController' });
	$routeProvider.when('/about', { templateUrl: 'partials/about.html', controller: 'AboutController' });
	$routeProvider.otherwise({ redirectTo: '/' });
});

var main = angular.module('main', []);

main.controller('HomeController', ['$scope', '$location', HomeController]);
