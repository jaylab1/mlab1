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
       			 'icon': "data:image/png;base64,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"
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
