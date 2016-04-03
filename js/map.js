// Add Google Native Map
document.addEventListener("deviceready", function() {
    
    

    var div = document.getElementById("map_canvas");
    
    var option = {
        enableHighAccuracy: true,      // Force GPS
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
        
        
    //START NAVIGATOR ////////////////////////////////////////////////////////////////////////////   
    navigator.geolocation.getCurrentPosition(function (position) {
        
        
        var location = setPosition(position.coords.latitude, position.coords.longitude);

        map.setOptions({
            'camera': {
                'latLng': location,
                'zoom': 14,
                'bearing': 50
            },
            'center': setPosition(position.coords.latitude, position.coords.longitude)
        });
        //map.setPadding(0, 0, 0);

        // Capturing event when Map load are ready.
        map.addEventListener(plugin.google.maps.event.MAP_READY, function(){
            // Defining markers for demo
            map.animateCamera({
                'target': setPosition(position.coords.latitude, position.coords.longitude),
                'zoom': 14,
                'bearing': 140
            });

            //map.setCenter(location);
            //marker.setMap(map); */
            //map.refreshLayout();
        });
    }, onLocationError, option);
	//END NAVIGATOR ////////////////////////////////////////////////////////////////////////////  


	map.on(plugin.google.maps.event.MY_LOCATION_BUTTON_CLICK, function (position) {
		console.log(position);
    });
    
    

    // Function that return a LatLng Object to Map
    function setPosition(lat, lng) {
        return new plugin.google.maps.LatLng(lat, lng);
    }
});

//END DEVICE READY////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function onLocationError( error_msg ) {
    alert("Plase enable GPS location service.\n" + JSON.stringify(error_msg, null, 4));
}
