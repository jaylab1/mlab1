// Add Google Native Map
document.addEventListener("deviceready", function() {
    
    
    var option = {
        enableHighAccuracy: true,      // Force GPS
        timeout: 5000,
        maximumAge: 3000
    };

        
    //START NAVIGATOR ////////////////////////////////////////////////////////////////////////////   
    navigator.geolocation.getCurrentPosition(function (position) {
    	
  				//FETCH THE lnglng from server and get back with address
  				var geocode = position.coords.latitude+','+position.coords.longitude;
  				
  				
  				SENDget(
  					'get-geoaddress',
  					'geocode='+geocode,
  					'NO'
  				);    	
        
        var location = setPosition(position.coords.latitude, position.coords.longitude);
        
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
	
	
	setTimeout(function(){
  			
            map.animateCamera({
                'zoom': 14,
                'bearing': 0,
                'duration': 4000 // 10 seconds
            }, function() {

  		setCenter(location);
  		
	    }); 
            
            ONSTOP();
          
              map.addMarker({
       			'position': new plugin.google.maps.LatLng(33.8730011,35.5179532),
       			 'icon': "data:image/png;base64,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",
       			 'rotation': 40,
    	      });
  			
  			
	},2000);




  
  //END CAMERA READY 


	setInterval(function(){ 
		
		map.getCameraPosition(function(camera) {
  			
  			var CURRENT = localStorage.getItem('CURRENTlocation');
  			
  			if (CURRENT != camera.target.lat+camera.target.lng ){
  			
  				localStorage.setItem('FETCHlocation','NO');
  				
  				$( '.ROUND' ).removeClass( "animation-target1" ); 
  				$( '.ROUND' ).addClass( "animation-target" );
                
  				$( '.SEARCH' ).addClass( "animation-search" );
  				$( '.SEARCH1' ).addClass( "animation-search-icon" );
  				
  				
  			}else{
  				
  				
  				$( '.ROUND' ).removeClass( "animation-target" ); 
  				$( '.ROUND' ).addClass( "animation-target1" );
                
  				$( '.SEARCH' ).removeClass( "animation-search" ); 
  				$( '.SEARCH1' ).removeClass( "animation-search-icon" ); 
  				
  				if (localStorage.getItem('FETCHlocation') == 'NO'){
  				  
                    				SENDget(
  					                 'get-geoaddress',
  					                 'geocode='+camera.target.lat+','+camera.target.lng,
  					                 'NO'
                                    ); 
                  
  				}
  				

	
  			}
  			
  			var VALUE = camera.target.lat+camera.target.lng;
  		
  			localStorage.setItem('CURRENTlocation', VALUE);
  			
  			
		});
 
 				
 
	}, 2000);       
       
       

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







function ONSTOP(){
	
  $( ".PIN" ).animate({
    opacity: 1
  }, 500, function() {
    // Animation complete.
  });
  
}
