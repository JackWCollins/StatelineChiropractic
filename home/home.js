var statelineApp = angular.module('statelineApp');

statelineApp.controller('HomeController', ['$scope', function($scope) {
  console.log("Initialized the home controller");
  $('.slider').slider();
  $('.materialboxed').materialbox();

  $scope.specialties = [
    {name: 'Disc Herniation'},
    {name: 'Sports, Auto, and Work Injuries'},
    {name: 'Whiplash and Spinal Treatments'},
    {name: 'Headaches and Migraines'},
    {name: 'Neck Pain and Stiffness'},
    {name: 'Back, Hip, and Leg Pain'},
    {name: 'Nutritional and Herbal Medicine'},
    {name: 'Se Habla Espanol'}
  ]
}]);