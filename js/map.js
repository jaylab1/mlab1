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



// Add Google Native Map
document.addEventListener("deviceready", function() {
    
    
    
    var location =  GETcoord(33.8886459,35.4867246);
        
    var div = document.getElementById("map_canvas");    
    
	var map = plugin.google.maps.Map.getMap(div,{
	   
  		'backgroundColor': 'white',
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
                	'latLng': location,
                	'zoom': 10,
                	'bearing': 140,
                
            	},
            	'center': location,
	});    
    
    
    
    
    
    
//GET COORDINATION   
function GETcoord(lat,long,mode='0'){
	
	if (mode==0)
	  return new plugin.google.maps.LatLng(lat,long);
       else
          return [lat,long];
	
}    
    
    
});
