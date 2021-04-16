
function deleting(){
const xhttp2 = new XMLHttpRequest();
let data = null;

//executing the function requestmuffin where it will be parsed the data from json
(function(){
    requestMuffin2();
}());

function requestMuffin2(){
    
    xhttp2.onreadystatechange = function() {
        //checking if everything is good, and there are no mistakes
        if (this.readyState == 4 && this.status == 200) {
            //after json is parsed storing on data and send to function shipsrender
            let data = JSON.parse(this.responseText);
            myFunction(data);
            
        }
    };
    //re-initialize the request
    
    xhttp2.open("GET", "/admin-list", true);
    xhttp2.send();
}


function myFunction(data){
       
       var list = document.getElementById("muffin").value;
        
         for (var i = 0; i < data.length; i++) {

            if(data[i].name === list){
               var MuffinName = data[i].name;
            }
            

            }

           if(MuffinName != list){
            window.alert("This name is not registered"); 
            return false;
           }
           return true;
           
    }
}
