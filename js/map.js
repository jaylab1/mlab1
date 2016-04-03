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

var points = [
  new plugin.google.maps.LatLng(41.79883, 140.75675),
  new plugin.google.maps.LatLng(41.799240000000005, 140.75875000000002),
  new plugin.google.maps.LatLng(41.797650000000004, 140.75905),
  new plugin.google.maps.LatLng(41.79637, 140.76018000000002),
  new plugin.google.maps.LatLng(41.79567, 140.75845),
  new plugin.google.maps.LatLng(41.794470000000004, 140.75714000000002),
  new plugin.google.maps.LatLng(41.795010000000005, 140.75611),
  new plugin.google.maps.LatLng(41.79477000000001, 140.75484),
  new plugin.google.maps.LatLng(41.79576, 140.75475),
  new plugin.google.maps.LatLng(41.796150000000004, 140.75364000000002),
  new plugin.google.maps.LatLng(41.79744, 140.75454000000002),
  new plugin.google.maps.LatLng(41.79909000000001, 140.75465),
  new plugin.google.maps.LatLng(41.79883, 140.75673)
];
var latLngBounds = new plugin.google.maps.LatLngBounds(points);

map.animateCamera({
  'target' : latLngBounds
});
            
          
	map.on(plugin.google.maps.event.CAMERA_CHANGE, function () {
		
		/*ONMOVE();
		
		setTimeout(function(){
  			ONSTOP();
		},7000);*/
		
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
