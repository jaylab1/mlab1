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
        enableHighAccuracy: true,      // Force GPS
        timeout: 5000,
        maximumAge: 3000
    };
    navigator.geolocation.getCurrentPosition(function (position) {
        var location = setPosition(position.coords.latitude, position.coords.longitude);
        // Invoking Map using Google Map SDK v2 by dubcanada
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
            },
            'camera': {
                'latLng': setPosition(position.coords.latitude, position.coords.longitude),
                'zoom': 14,
                'bearing': 50
            },
            'center': setPosition(position.coords.latitude, position.coords.longitude)
        });
        map.setPadding(0, 0, 0);

        
    }, onLocationError, option);
    
    map.on(plugin.google.maps.event.MY_LOCATION_BUTTON_CLICK, 
    
        map.animateCamera({
            'tilt': 60,
            'zoom': 18,
            'bearing': 140
        });
    
    );

    // Function that return a LatLng Object to Map
    function setPosition(lat, lng) {
        return new plugin.google.maps.LatLng(lat, lng);
    }
});

function onLocationError( error_msg ) {
    alert("Plase enable GPS location service.\n" + JSON.stringify(error_msg, null, 4));
}
