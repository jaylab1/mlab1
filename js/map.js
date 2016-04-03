//CONNECTING MAP

function showLocation(position) {
    
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            alert("Latitude : " + latitude + " Longitude: " + longitude);
            
return new plugin.google.maps.LatLng(latitude,longitude);        
}

function errorHandler(err) {
    
            if(err.code == 1) {
               alert("Error: Access is denied!");
            }
            
            else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
}
			
function getLocation(){

            if(navigator.geolocation){
               // timeout at 60000 milliseconds (60 seconds)
               var options = {
                
                    enableHighAccuracy: true,      // Force GPS
                    timeout: 5000,
                    maximumAge: 3000
                    
                };
                
               navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
            }
            
            else{
               alert("Sorry, browser does not support geolocation!");
            }
}


// Add Google Native Map
document.addEventListener("deviceready", function() {
    
    // Getting the map selector in DOM
    var div = document.getElementById("map_canvas");
    
    var option = {
        enableHighAccuracy: true, // Force GPS
        timeout: 5000,
        maximumAge: 3000
    };

    var map = plugin.google.maps.Map.getMap(div, {
        'controls': {
            'compass': false,
            'zoom': false,
            'myLocationButton': true,
            'indoorPicker': true
        },
        'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
        }
    });

            
            
        map.animateCamera({
            	'target': GOOGLE,
                'zoom'   : 14,
                'bearing': 140
   	    });



     map.on(plugin.google.maps.event.MY_LOCATION_BUTTON_CLICK, function() {

    });
    
    
	
	
});




$("#map_canvas").on('touchstart click', function(e){
  e.preventDefault();
  alert("test");
});
