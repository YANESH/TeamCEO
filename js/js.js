
//store 1 The source 200 Wellington Street West, Toronto, ON M5V 3C7
var store1String = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
var store1LatLng = new google.maps.LatLng(43.64275410, -79.39328590);
var store1InfoWindow = new google.maps.InfoWindow({
	content: store1String
});

//store 2 Mountain Equipment Co-op
var store2LatLng = new google.maps.LatLng(43.64609030, -79.3931060);


//store 3 Alpine Motors Ltd
var store3LatLng = new google.maps.LatLng(43.64687480,-79.39129020);

//store 4 King Furniture
var store4LatLng = new google.maps.LatLng(43.64691550, -79.38858429999999);

//store 5 Adelaide Sports Store
var store5LatLng = new google.maps.LatLng(43.64865420, -79.38193050);

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

google.maps.event.addListener(store1Marker, 'click', function() {
	infowindow.open(map,store1Marker);
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