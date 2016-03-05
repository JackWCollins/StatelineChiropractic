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

  $scope.services = [
    {name: 'Sports Physicals'},
    {name: 'Graston'},
    {name: 'Decompression'},
    {name: 'Cold Laser'},
    {name: 'Ultrasound'},
    {name: 'DOT Physicals'},
    {name: 'Same Day X-Rays'},
    {name: 'Orthodics'}
  ]

  function initializeMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center:new google.maps.LatLng(45.9929026,-118.38734540000002),
      zoom: 11
    });
    var marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(45.9929026,-118.38734540000002)
    });
    var infowindow = new google.maps.InfoWindow({
      content:'<strong>Stateline Chiropractic</strong><br>85458 Oregon 11, Milton-Freewater, OR 97862<br>'
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map,marker);
      });
    infowindow.open(map,marker);
  }

  initializeMap()
}]);