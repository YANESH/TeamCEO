
//store 1 The source 200 Wellington Street West, Toronto, ON M5V 3C7
var store1String = '<div id="content">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Source</h1>'+
      '<div id="bodyContent">'+
      '<p>200 Wellington Street Weset<br>Toronto, ON M5V 3C7<br>(416)263-9858</p>'+
      '<p><a href="http://www.thesource.ca/">'+
      'thesource.ca</a></p>'+
      '</div>';
var store1LatLng = new google.maps.LatLng(43.64275410, -79.39328590);
var store1InfoWindow = new google.maps.InfoWindow({
	content: store1String
});

//store 2 Mountain Equipment Co-op
var store2String = '<div id="content">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Mountain Equipment Co-op</h1>'+
      '<div id="bodyContent">'+
      '<p>200 Wellington Street Weset<br>Toronto, ON M5V 3C7<br>(416)263-9858</p>'+
      '<p><a href="http://www.thesource.ca/">'+
      'thesource.ca</a></p>'+
      '</div>';
var store2LatLng = new google.maps.LatLng(43.64609030, -79.3931060);
var store2InfoWindow = new google.maps.InfoWindow({
	content: store2String
});

//store 3 Alpine Motors Ltd
var store3String = '<div id="content">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Alpine Motors Ltd</h1>'+
      '<div id="bodyContent">'+
      '<p>200 Wellington Street Weset<br>Toronto, ON M5V 3C7<br>(416)263-9858</p>'+
      '<p><a href="http://www.thesource.ca/">'+
      'thesource.ca</a></p>'+
      '</div>';
var store3LatLng = new google.maps.LatLng(43.64687480,-79.39129020);
var store3InfoWindow = new google.maps.InfoWindow({
	content: store3String
});

//store 4 King Furniture
var store4String = '<div id="content">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">King Furniture</h1>'+
      '<div id="bodyContent">'+
      '<p>200 Wellington Street Weset<br>Toronto, ON M5V 3C7<br>(416)263-9858</p>'+
      '<p><a href="http://www.thesource.ca/">'+
      'thesource.ca</a></p>'+
      '</div>';
var store4LatLng = new google.maps.LatLng(43.64691550, -79.38858429999999);
var store4InfoWindow = new google.maps.InfoWindow({
	content: store4String
});

//store 5 Adelaide Sports Store
var store5String = '<div id="content">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Adelaide Sports Store</h1>'+
      '<div id="bodyContent">'+
      '<p>200 Wellington Street Weset<br>Toronto, ON M5V 3C7<br>(416)263-9858</p>'+
      '<p><a href="http://www.thesource.ca/">'+
      'thesource.ca</a></p>'+
      '</div>';
var store5LatLng = new google.maps.LatLng(43.64865420, -79.38193050);
var store5InfoWindow = new google.maps.InfoWindow({
	content: store5String
});


function initialize() {
var mapOptions = {

	//center = 315+Front+Street+West,+Toronto+ON+M5V+3A4
center: new google.maps.LatLng(43.64350550, -79.38945280),
  zoom: 14,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map-canvas"),
	mapOptions);

var store1Marker = new google.maps.Marker({
	position: store1LatLng,
	map: map,
	title: 'The Source'
});

var store2Marker = new google.maps.Marker({
	position: store2LatLng,
	map: map,
	title: 'Mountain Equipment Co-op'
});

var store3Marker = new google.maps.Marker({
	position: store3LatLng,
	map: map,
	title: 'Alpine Motors Ltd'
});

var store4Marker = new google.maps.Marker({
	position: store4LatLng,
	map: map,
	title: 'King Furniture'
});
var store5Marker = new google.maps.Marker({
	position: store5LatLng,
	map: map,
	title: 'Adelaide Sports Store'
});

var infoWindow1 = new google.maps.InfoWindow({
	content: store1String
});

  google.maps.event.addListener(store1Marker, 'click', function() {
    infoWindow1.open(map,store1Marker);
  });
  
  var infoWindow2 = new google.maps.InfoWindow({
	content: store2String
});

  google.maps.event.addListener(store2Marker, 'click', function() {
    infoWindow2.open(map,store2Marker);
  });
  
  var infoWindow3 = new google.maps.InfoWindow({
	content: store3String
});

  google.maps.event.addListener(store3Marker, 'click', function() {
    infoWindow3.open(map,store3Marker);
  });


var infoWindow4 = new google.maps.InfoWindow({
	content: store4String
});

  google.maps.event.addListener(store4Marker, 'click', function() {
    infoWindow4.open(map,store4Marker);
  });
  
  var infoWindow5 = new google.maps.InfoWindow({
	content: store5String
});

  google.maps.event.addListener(store5Marker, 'click', function() {
    infoWindow5.open(map,store5Marker);
  });
  
  }
  
  
function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map-canvas");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '750px';
  }
}

google.maps.event.addDomListener(window, 'load', initialize);