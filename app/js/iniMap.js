var map;
function initMap() {
  var myLatLng = {lat: 47.90999952, lng: 33.39411646};	
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17
  });

   // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Web-Studio FIDEZ'
  });
}
