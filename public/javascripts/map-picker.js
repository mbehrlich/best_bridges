function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.75, lng: -122.44},
    zoom: 12
  });

  google.maps.event.addListener(map, "click", function(e) {
    var latLng = e.latLng;
    locationField = document.getElementById('latlng');
    locationField.value = latLng;
  })

}
