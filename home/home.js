var statelineApp = angular.module('statelineApp');

statelineApp.controller('HomeController', ['$scope', function($scope) {
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
    {name: 'Instrument Adjusting', image_path: 'images/commercial/proadjuster.jpg', path: '#/instrument_adjusting'},
    {name: 'DOT Physicals', image_path: 'images/truck_cabin.jpg', path: '#/'},
    {name: 'Decompression', image_path: 'images/spine_model.jpg', path: '#/decompression'},
    {name: 'Nutritional Counseling', image_path: 'images/commercial/fruits.jpg', path: '#/nutrition'},
    {name: 'Massage', image_path: 'images/neck_massage.jpg', path: '#/'},
    {name: 'Ultrasound', image_path: 'images/ultrasound_neck.jpg', path: '#/'},
    {name: 'Sports Physicals', image_path: 'images/commercial/football_player.jpg', path: '#/'},
    {name: 'Orthotics', image_path: 'images/orthopedic_shoe_insoles.jpg', path: '#/orthotics'}
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