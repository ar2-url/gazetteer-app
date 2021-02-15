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
// with the latitude, longitude and the zoom value 
//map.setView([48.8584, 2.2945], 16); 
  


// Set the map view to the user's location 
// Uncomment below to set map according to user location 
map.locate({setView: true, maxZoom: 13}); 



function onLocationFound(e) {
  var radius = e.accuracy / 2;
  L.marker(e.latlng).addTo(map)
	.bindPopup("You are within " + radius + " meters from this point").openPopup();
  L.circle(e.latlng, radius).addTo(map);

}

map.on('locationfound', onLocationFound);
map.locate({setView: true, watch: true, maxZoom: 13});


//variable declaration
border = L.geoJson(result.data,{

  color: '#ff7800',

  weight: 2,

  opacity: 0.65

}).addTo(map);


// document.ready
$(document).ready(function(){


  $.ajax({

      type: 'POST',

      url: 'php/ctr.php',

      dataType: 'json',

      cache: false,

      async: true,

      success: function(result) {

        $ajax({
      
          type: 'POST',

          url: 'php/getBorder.php',

          dataType: 'json',

          cache: false,

          async: true,

          success: function(result) {

          }

        })

        if (map.hasLayer(border)) {

          map.removeLayer(border);
  
      }


               
      
      
      
      map.fitBounds(border.getBounds());

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







//get modal buttons
const modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn){
    btn.onclick = function(){
        const modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display = 'block';
    };
});

const closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        const modal = (btn.closest('.modal').style.display = 'none');
    };
});

window.onclick = function(e){
    if(e.target.className == 'modal'){
        e.target.style.display = 'none';
    }
};

//modal element
var modal = document.getElementById('mainModal');

//open modal
var modalBtn = document.getElementById('modalBtn');

// close button
var closeBtn = document.getElementById('closeBtn');

//listen for open click
modalBtn.addEventListener('click', openModal);

//listen for close click
modalBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', clickOutside);

//function to open modal
function openModal(){
    modal2.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
        modal2.style.display = 'none';
    }
    
};



