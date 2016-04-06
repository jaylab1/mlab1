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
  				
  				alert(geocode);
  				
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
  			
  			
	},2000);


            
          
	map.on(plugin.google.maps.event.CAMERA_CHANGE, function () {
		
		/*ONMOVE();
		
		setTimeout(function(){
  			ONSTOP();
		},7000);*/
		
    	});
    	

       
       
	setInterval(function(){ 
		
		map.getCameraPosition(function(camera) {
  			
  			var CURRENT = localStorage.getItem('CURRENTlocation');
  			
  			//essential for fetching address
  			var ADDRESSFETCH = 
  			
  			if (CURRENT != camera.target.lat+camera.target.lng ){
  			
  				
  				$( '.ROUND' ).removeClass( "animation-target1" ); 
  				$( '.ROUND' ).addClass( "animation-target" );
                
  				$( '.SEARCH' ).addClass( "animation-search" );
  				$( '.SEARCH1' ).addClass( "animation-search-icon" );
  				
  				
  			}else{
  				
  				
  				$( '.ROUND' ).removeClass( "animation-target" ); 
  				$( '.ROUND' ).addClass( "animation-target1" );
                
  				$( '.SEARCH' ).removeClass( "animation-search" ); 
  				$( '.SEARCH1' ).removeClass( "animation-search-icon" ); 
  				

	
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
