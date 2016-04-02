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
    navigator.geolocation.getCurrentPosition(function(position) {
        var location = setPosition(position.coords.latitude, position.coords.longitude);
        // Invoking Map using Google Map SDK v2 by dubcanada
        /*map.setOptions({
            'camera': {
                'latLng': location,
                'zoom': 14,
                'bearing': 50
            },
            'center': location
        });
        map.setPadding(0, 0, 0);

        var marker = {
            'position': setPosition(position.coords.latitude, position.coords.longitude),
            'title': "3:00min",
            'icon': 'www/img/icon.png'
        };*/

        // Capturing event when Map load are ready.
        /*map.addEventListener(plugin.google.maps.event.MAP_READY, function(position) {
            // Defining markers for demo
            map.animateCamera({
                'target': setPosition(position.coords.latitude, position.coords.longitude),
                'zoom': 14,
                'bearing': 140
             });

            /* map.addMarker({
                'marker': marker,
                'position': marker.position,
                'animation': plugin.google.maps.Animation.DROP,
                'rotate': 45,
                'draggable': true,
                'title': marker.title,
                'icon': {
                    url: marker.icon
                },
                'styles' : {
    			'position': 'fixed'
  		}
            }, function(marker) {
                marker.showInfoWindow();
            }); */
            //map.setCenter(location);
            //marker.setMap(map);
            //map.refreshLayout();
        //})
    }, onLocationError, option);

    /*map.on(plugin.google.maps.event.CAMERA_CHANGE, function(position) {
    	
		 map.animateCamera({
                'zoom': 17,
                'bearing': 140
            });


    })*/
    
    map.on(plugin.google.maps.event.MAP_READY, function(position) {
            // Defining markers for demo
            map.animateCamera({
                'target': setPosition(position.coords.latitude, position.coords.longitude),
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
