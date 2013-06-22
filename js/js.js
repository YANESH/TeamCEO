function initialize() {
var mapOptions = {

	//center = 315+Front+Street+West,+Toronto+ON+M5V+3A4
  center: new google.maps.LatLng(43.64350550, -79.38945280),
  zoom: 14,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map-canvas"),
	mapOptions);
}


google.maps.event.addDomListener(window, 'load', initialize);