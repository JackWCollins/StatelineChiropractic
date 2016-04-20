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
    .when('/instrument_adjusting', {
      controller: 'InstrumentController',
      templateUrl: 'instrument_adjusting/instrument_adjusting.html'
    })
    .when('/nutrition', {
      controller: 'NutritionController',
      templateUrl: 'nutrition/nutrition.html'
    })
    .when('/orthotics', {
      controller: 'OrthoticsController',
      templateUrl: 'orthotics/orthotics.html'
    })
    .when('/decompression', {
      controller: 'DecompressionController',
      templateUrl: 'decompression/decompression.html'
    })
    .when('/massage', {
      controller: 'MassageController',
      templateUrl: 'massage/massage.html'
    })
    .otherwise({redirectTo: '/'});
}]);