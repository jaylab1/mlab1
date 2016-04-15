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
      
      		/*SENDget1(
			'getCARS',
			'',
			testing
		);*/
      
      
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
    
    //add markers
    function addMarkers(data,callback) {
	   
		var markers = [];
		
		var markerOption;

		function onMarkerAdded(marker) {
			markers.push(marker);
			if (markers.length === data.length) {
				callback(markers);
			}
		}
        
 		$.each(data, function(k,items){
				
			var translate = items['from'].split(","); 
                  	map.addMarker({
        				'position' : new plugin.google.maps.LatLng(translate[0],translate[1]);
        				'rotation' : items['bearing'],
        				'icon'     : CARicon(),
        				'title'    : 'car'+k
        				
 				      }, 
                    		      onMarkerAdded);
                       
		});                     

	}
    
    
 
 
//ANIMATION MARKER   
function ONSTOP(){
	
  $( ".PIN" ).animate({
    opacity: 1
  }, 500, function() {
    // Animation complete.
  });
  
}


function CARicon(){
	
	
   return "data:image/png;base64,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";	
	
	
}
