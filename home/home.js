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
    {name: 'Sports Physicals', image_path: 'images/commercial/football_player.jpg'},
    {name: 'Graston', image_path: 'images/graston.jpg'},
    {name: 'Decompression', image_path: 'images/spine_model.jpg'},
    {name: 'Massage', image_path: 'images/neck_massage.jpg'},
    {name: 'Ultrasound', image_path: 'images/ultrasound_neck.jpg'},
    {name: 'DOT Physicals', image_path: 'images/truck_cabin.jpg'},
    {name: 'Same Day X-Rays', image_path: 'images/doctor_with_xray.jpg'},
    {name: 'Orthodics', image_path: 'images/orthopedic_shoe_insoles.jpg'}
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