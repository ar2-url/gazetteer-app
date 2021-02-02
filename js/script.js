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

  });



$('#countrySelect').html('');

 

$.each(result.data, function(index) {

 

    $('#countrySelect').append($("<option>", {

        value: result.data[index].code,

        text: result.data[index].name


    })); 

 

});

function change_countrySelect(sel) {
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { table: sel, limit: 200 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<table border='1'>"
        for (x in myObj) {
          txt += "<tr><td>" + myObj[x].name + "</td></tr>";
        }
        txt += "</table>"    
        document.getElementById("show").innerHTML = txt;
        }
      };
    xmlhttp.open("POST", "php/ctr.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send("x=" + dbParam);
  }


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



