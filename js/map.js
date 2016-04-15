    var map;
    
    var option = {
        enableHighAccuracy: true      // Force GPS
    };
    
    document.addEventListener("deviceready", function() {
      var div = document.getElementById("map_canvas");
      // Initialize the map view
      map = plugin.google.maps.Map.getMap(div,{
	   
  		'controls': {
    			'myLocationButton': true,
    			'compass': false,
  		},
		'gestures': {
    			'scroll': true,
    			'tilt': true,
    			'rotate': true,
    			'zoom': true
  		},
            	'camera': {
                	'latLng': new plugin.google.maps.LatLng(33.8886459,35.4867246),
                	'zoom': 10,
                	'bearing': 140,
                
            	},
            	'center': new plugin.google.maps.LatLng(33.8886459,35.4867246),
	  });    
      // Wait until the map is ready status.
      map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
      
      
      
    }, false);
    function onMapReady() {
      
      
      map.getMyLocation(option, onLocationSuccess, onLocationError);
      
      
    }
    function onBtnClicked() {
      map.showDialog();
    }

    function onLocationSuccess( result ) {
        alert(JSON.stringify( result, null, 4 ));
    }
    function onLocationError( error_msg ) {
        alert( error_msg );
    }
