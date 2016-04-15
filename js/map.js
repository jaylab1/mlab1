 /**
 * For debug purpose, catch JavaScript errors.
 */
window.onerror = function(message, file, line) {
  var error = [];
  error.push('---[error]');
  if (typeof message == "object") {
    var keys = Object.keys(message);
    keys.forEach(function(key) {
      error.push('[' + key + '] ' + message[key]);
    });
  } else {
    error.push(line + ' at ' + file);
    error.push(message);
  }
  alert(error.join("\n"));
};
    
    
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

    //WHEN GPS RETURN SUCESS OF CURRENT LOCATION
    function onLocationSuccess( result ) {
        
        
        //alert(JSON.stringify( result, null, 4 ));
        var MYPLACE = new plugin.google.maps.LatLng(result.latLng.lat,result.latLng.lng);
        map.animateCamera({
                'target': MYPLACE,
                'zoom': 14,
                'bearing': 0,
                'duration': 4000 // 10 seconds
            }, function() {
                console.log("The animation is done");
                ONSTOP();
            });        
        
        
    }
    function onLocationError( error_msg ) {
        alert( error_msg );
    }
