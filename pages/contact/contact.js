var statelineApp = angular.module('statelineApp');

statelineApp.controller('ContactController', ['$scope', function($scope) {

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