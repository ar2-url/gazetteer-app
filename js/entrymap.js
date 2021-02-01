


    // Initialize the map 
    const entryMap = L.map('entryMap');
  
    // Get the tile layer from OpenStreetMaps 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
  
    // Specify the maximum zoom of the map 
    maxZoom: 19, 
  
    // Set the attribution for OpenStreetMaps 
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
    }).addTo(entryMap); 
  
    // Set the view of the map 
    // with the latitude, longitude and the zoom value 
    //map.setView([48.8584, 2.2945], 16); 
      
    
 
    // Set the map view to the user's location 
    // Uncomment below to set map according to user location 
    entryMap.locate({setView: true, maxZoom: 13}); 
  
    
 
    function onLocationFound(e) {
      var radius = e.accuracy / 2;
      L.marker(e.latlng).addTo(entryMap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
      L.circle(e.latlng, radius).addTo(entryMap);
 
 }
 
 entryMap.on('locationfound', onLocationFound);
 entryMap.locate({setView: true, watch: true, maxZoom: 13});
   
