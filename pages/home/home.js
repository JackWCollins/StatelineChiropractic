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
  ];

  $scope.services = [
    {
      name: 'Instrument Adjusting',
      image_path: 'images/commercial/proadjuster.jpg',
      path: '#/instrument_adjusting',
      description: 'Our treatments utilize the Pro-Adjuster, DTS Compression, and Palmer method to get you feeling better as fast as possible.'
    },
    {
      name: 'DOT Physicals',
      image_path: 'images/commercial/truck_cabin.jpg',
      path: null,
      description: 'We offer same day certified DOT/CDL Physical exams. Walk ins are always welcome!'},
    {
      name: 'Decompression',
      image_path: 'images/commercial/spine_model.jpg',
      path: '#/decompression',
      description: 'Spinal Decompression therapy works by gently stretching the spine and can be an effective treatment for back pain, bulging or herniated disks, worn spinal joins, and more.'},
    {
      name: 'Nutritional Supplements',
      image_path: 'images/commercial/vitamins_and_fruits.jpg',
      path: '#/nutrition',
      description: 'We offer custom nutritional counseling and holistic, natural supplements to complement and enhance your diet.'},
    {
      name: 'Massage',
      image_path: 'images/commercial/neck_massage.jpg',
      path: '#/massage',
      description: 'Our massage therapists are experts in many different types of massages. Stop in for a relaxing and revitalizing session today!'},
    {
      name: 'Ultrasound',
      image_path: 'images/commercial/ultrasound_neck.jpg',
      path: null,
      description: 'We use special ultrasound techniques to promote deep heating of affected areas. Ultrasound therapy can help with joint swelling, muscle spasms, and much more.'},
    {
      name: 'Sports Physicals',
      image_path: 'images/commercial/football_player.jpg',
      path: null,
      description: 'Active participation in sports can be rough on your body. Our sports physicals will help make sure that you are ready for the next big game!'},
    {
      name: 'Orthotics',
      image_path: 'images/commercial/orthopedic_shoe_insoles.jpg',
      path: '#/orthotics',
      description: 'Many people, especially those who spend much of their day on their feet, experience regular leg, foot, and lower back pain. Our custom orthotics will help relieve that pain and make your everyday life more comfortable.'}
  ];

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