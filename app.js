'use strict';

var statelineApp = angular.module('statelineApp', ['ngRoute']);

statelineApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'home/home.html'
    })
    .otherwise({redirectTo: '/'});
}]);