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

// Set the view of the map on point
// with the latitude, longitude and the zoom value 
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





//ajax call
$(document).ready(function(){

 

  $.ajax({

      type: 'POST',

      url: 'php/ctr.php',

      dataType: 'json',

      success: function(result) {



          $('#countrySelect').html('');



          $.each(result.data, function(index) {

          

              $('#countrySelect').append($("<option>", {

                  value: result.data[index].code,

                  text: result.data[index].name

              })); 

          

          }); 

      }

  })
});


// border

const border = L.border('border');

if (map.hasLayer(border)) {

  map.removeLayer(border);

}



border = L.geoJson(result.data,{

  color: '#ff7800',

  weight: 2,

  opacity: 0.65

}).addTo(map);         



map.fitBounds(border.getBounds());


//listener to select

document.getElementById('countrySelect').html; //listener should get countrySelect or border??


//another ajax call to get border??
$(document).ready(function(){

 

  $.ajax({

      type: 'POST',

      url: 'php/getBorder.php',     //to get border ??

      dataType: 'json',

      success: function(result) {



          $('#countrySelect').html('');



          $.each(result.data, function(index) {

          

              $('#countrySelect').append($("<option>", {

                  value: result.data[index].code,

                  text: result.data[index].name

              })); 

          

          }); 

      }

  })
});
