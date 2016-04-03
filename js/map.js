// Add Google Native Map
document.addEventListener("deviceready", function() {
    
    
    
    var option = {
        enableHighAccuracy: true,      // Force GPS
        timeout: 5000,
        maximumAge: 3000
    };

        
    //START NAVIGATOR ////////////////////////////////////////////////////////////////////////////   
    navigator.geolocation.getCurrentPosition(function (position) {
        
        var location = setPosition(position.coords.latitude, position.coords.longitude);
        
        var div = document.getElementById("map_canvas");
        
        
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
    	
        map.setOptions({
            'camera': {
                'latLng': location,
                'zoom': 10,
                'bearing': 50,
                'duration': 15000 // 10 seconds
            },
            'center': location,
        });
        
       
	/*setTimeout(function(){
  			
            map.animateCamera({
                'zoom': 14,
                'bearing': 140
            }); 
            
            ONSTOP();
  			
  			
	},2000);*/


            
          
	map.on(plugin.google.maps.event.CAMERA_CHANGE, function () {
		
		/*ONMOVE();
		
		setTimeout(function(){
  			ONSTOP();
		},7000);*/
		
    	});
    	
	map.on(plugin.google.maps.event.MAP_CLICK, function () {
		
    		map.getCameraPosition(function(camera) {
    		
  		var buff = ["Current camera position:\n",
      		"latitude:" + camera.target.lat,
      		"longitude:" + camera.target.lng,
      		"zoom:" + camera.zoom,
      		"tilt:" + camera.tilt,
        	"bearing:" + camera.bearing].join("\n");
        	
  		alert(buff);
       		});
       });

    }, onLocationError, option);
	//END NAVIGATOR ////////////////////////////////////////////////////////////////////////////  




    	
    	
    	
    

});

//END DEVICE READY////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setPosition(lat, lng) {
        return new plugin.google.maps.LatLng(lat, lng);
 }


function onLocationError( error_msg ) {
         alert("Plase enable GPS location service.\n" + JSON.stringify(error_msg, null, 4));
}



function ONMOVE(){
	
  $( ".PIN" ).animate({
    opacity: 0.25
  }, 100, function() {
    // Animation complete.
  });
  
}


function ONSTOP(){
	
  $( ".PIN" ).animate({
    opacity: 1
  }, 500, function() {
    // Animation complete.
  });
  
}
