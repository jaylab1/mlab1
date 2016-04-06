
function PREFIX(token){
    
    
    return 'http://www.taxasi.com/api/user_secured_apis.php?token='+token;
    
}


function ERROR(jqXHR, textStatus, errorThrown){
    
    
    alert(jqXHR, textStatus, errorThrown);    
}

function LOADER(animate,status){
    
    
    if (animate == 'YES'){
        
       if (status == 'IN') $(".LOADER1").fadeIn();
       else $(".LOADER1").fadeOut();
        
    }
    
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
                    alert(DATA.status)
                    
                    return DATA;
                
                                },
            error       :       function(jqXHR, textStatus, errorThrown) {
                
                    LOADER(animate,'OUT'); 
                    ERROR(jqXHR, textStatus, errorThrown)

            }                     
                             

       });  
       
   
}


//

function GETgeoaddress(geocode){
    
    alert('start');
    
    var DATA = SENDget(
    
            'get-geoaddress',
            'geocode='+geocode,
            'NO'
            
    );
    
    alert(DATA.result);
    
    $("#INaddress").html(DATA.result);
    
}
