'use strict';

var statelineApp = angular.module('statelineApp', ['ngRoute']);

statelineApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'pages/home/home.html'
    })
    .when('/contact', {
      controller: 'ContactController',
      templateUrl: 'pages/contact/contact.html'
    })
    .when('/about', {
      controller: 'AboutController',
      templateUrl: 'pages/about/about.html'
    })
    .when('/instrument_adjusting', {
      controller: 'InstrumentController',
      templateUrl: 'pages/instrument_adjusting/instrument_adjusting.html'
    })
    .when('/nutrition', {
      controller: 'NutritionController',
      templateUrl: 'pages/nutrition/nutrition.html'
    })
    .when('/orthotics', {
      controller: 'OrthoticsController',
      templateUrl: 'pages/orthotics/orthotics.html'
    })
    .when('/decompression', {
      controller: 'DecompressionController',
      templateUrl: 'pages/decompression/decompression.html'
    })
    .when('/massage', {
      controller: 'MassageController',
      templateUrl: 'pages/massage/massage.html'
    })
    .otherwise({redirectTo: '/'});
}]);