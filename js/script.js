$('document').ready(function(){

	// map

	// Initialize the map 
const map = L.map('map');
  
	// Get the tile layer from OpenStreetMaps 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 

	// Specify the maximum zoom of the map 
maxZoom: 19, 

	// Set the attribution for OpenStreetMaps 
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
}).addTo(map); 

	// Set the view of the map 
	// with the latitude, longitude and the zoom value e.g
	//map.setView([48.8584, 2.2945], 16); 
  


	// Set the map view to the user's location 
map.locate({setView: true, maxZoom: 13}); 



function onLocationFound(e) {
  var radius = e.accuracy / 2;
  L.marker(e.latlng).addTo(map)
	.bindPopup("You are within " + radius + " meters from this point").openPopup();
  L.circle(e.latlng, radius).addTo(map);

}

map.on('locationfound', onLocationFound);
map.locate({setView: true, watch: true, maxZoom: 13});


if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      var latLong = latitude + ',' + longitude;

