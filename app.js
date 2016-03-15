'use strict';

var statelineApp = angular.module('statelineApp', ['ngRoute']);

statelineApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'home/home.html'
    })
    .when('/contact', {
      controller: 'ContactController',
      templateUrl: 'contact/contact.html'
    })
    .when('/about', {
      controller: 'AboutController',
      templateUrl: 'about/about.html'
    })
    .otherwise({redirectTo: '/'});
}]);