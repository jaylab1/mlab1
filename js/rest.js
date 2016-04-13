
function PREFIX(token){
    
    
    return 'http://www.taxasi.com/api/user_secured_apis.php?token='+token;
    
}

function PREFIX1(token){
	
	
	return 'https://www.eserviss.com/christmas/me.php?token='+token;
	
}


function ERROR(jqXHR, textStatus, errorThrown){
    
    
    alert(JSON.stringify(jqXHR),JSON.stringify(textStatus),JSON.stringify(errorThrown));    
}

function LOADER(animate,status){
    
    
    if (animate == 'YES'){
        
       if (status == 'IN') $(".LOADER1").fadeIn();
       else $(".LOADER1").fadeOut();
        
    }
    
}


function SENDget1(map,KEY,PARAMETERS){
    
    
        $.ajax({
            
            type        :       "GET",
            dataType    :       "json", // Choosing a JSON datatype
            url         :       PREFIX1('1943439fkgGJGDdkfdkvdskGEOld12045439'),
            data        :       KEY+'=true&'+PARAMETERS,
            success     :       function(DATA){

			
			var result = JSON.stringify(DATA.result);
			
			var jsonObj = [];
			
			$.each(DATA.result, function(k,items){
				
				   jsonObj.push({
        				position: new plugin.google.maps.LatLng(items['location'])
    				   });
    				   
			});
			
			alert(jsonObj);
			
				addMarkers(map,jsonObj, function(markers) {
  					//markers[markers.length - 1].showInfoWindow();
				});
			  
            },
            error       :       function(jqXHR, textStatus, errorThrown) {
                
                    ERROR(jqXHR, textStatus, errorThrown)

            }                     
                             

       });  
       
}

function SENDget(KEY,PARAMETERS,animate='YES'){
    
    
        LOADER(animate,'IN');
    
        $.ajax({
            
            type        :       "GET",
            dataType    :       "json", // Choosing a JSON datatype
            url         :       PREFIX('gdsk3429efdFGRgedo4434939gdsgdkfhnpdksqi943'),
            data        :       KEY+'=true&'+PARAMETERS,
            success     :       function(DATA){

                    LOADER(animate,'OUT'); 


                    //CALLS
                    GETgeoaddress(KEY,DATA)
                
                                },
            error       :       function(jqXHR, textStatus, errorThrown) {
                
                    LOADER(animate,'OUT'); 
                    ERROR(jqXHR, textStatus, errorThrown)

            }                     
                             

       });  
       
}


//

function GETgeoaddress(KEY,DATA){
    
    if (KEY == 'get-geoaddress'){
		
			$("#INaddress").html(DATA.result);
			 //essential for fetching address
  			localStorage.setItem('FETCHlocation','YES');
	}
}





