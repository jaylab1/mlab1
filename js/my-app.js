// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Add Google Native Map
document.addEventListener("deviceready", function() {
    // Getting the map selector in DOM
    var div = document.getElementById("map_canvas");
    var option = {
        enableHighAccuracy: true, // Force GPS
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

    
    map.on(plugin.google.maps.event.MAP_READY, function(location) {
            
            alert(location.latLng.lat, location.latLng.lng);
            
            map.animateCamera({
                'target': setPosition(location.latLng.lat, location.latLng.lng),
                'zoom': 14,
                'bearing': 140
   	    });
    });

     map.on(plugin.google.maps.event.MY_LOCATION_BUTTON_CLICK, function() {
    
       //$(".PIN").animate({opacity:"0.1"});
    });

    // Function that return a LatLng Object to Map
    function setPosition(lat, lng) {
        return new plugin.google.maps.LatLng(lat, lng);
    }
	
	
});

function onLocationError(error_msg) {
    alert("Plase enable GPS location service.\n" + JSON.stringify(error_msg, null, 4));
}


$("#map_canvas").on('touchstart click', function(e){
  e.preventDefault();
  alert("test");
});
