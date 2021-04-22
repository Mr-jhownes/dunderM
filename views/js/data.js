//this js is responsable for reading the json and passing through the html printing the items on client side

//requesting data from the server
const muffinElement = document.getElementById('dunderm');
const xhttp = new XMLHttpRequest();
let data = null;

//executing the function requestmuffin where it will be parsed the data from json
(function(){
    requestMuffin();
}());

function requestMuffin(){
    
    xhttp.onreadystatechange = function() {
        //checking if everything is good, and there are no mistakes
        if (this.readyState == 4 && this.status == 200) {
            //after json is parsed storing on data and send to function shipsrender
            data = JSON.parse(this.responseText);
            muffinRender(data);
            //myFunction(data);
                        
        }
    };
    //re-initialize the request
    console.log(data)
    xhttp.open("GET", "/admin-list", true);
    xhttp.send();
}
//function that will loop throgh the data array and printing the element to the screen
function muffinRender(data){
    
    var muffin2;

    var col= ["_id", "name", "flavour", "price"];

    var tb = document.createElement("table");
    tb.className = "container table";

    var tr = tb.insertRow(-1);

    for(var i = 0; i< col.length; i++){
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
        
    }

    for (var i = 0; i < data.length; i++) {
            
        tr = tb.insertRow(-1);
        tr.addEventListener('click', pickData(data[i]));
        tr.id = data[i]._id
        for(var j = 0; j < col.length; j++){
            var newItem = tr.insertCell(-1);
            newItem.innerHTML = data[i][col[j]];
        }
    }
    muffinElement.innerHTML = "";
    muffinElement.appendChild(tb);
        


    }
     const pickData = (row) => (event) => {

            muffin = row ;
            const selected = document.querySelector('.selected')
        console.log(muffin);
            if(selected){
            selected.className = ''
            }
        
        document.getElementById(row._id).className = 'selected'
        }


function deleteMuf(){

    var deleteMuffinSelected = muffin._id;
   
       var xhr = new XMLHttpRequest();
       xhr.open( "DELETE", `/admin-list/${deleteMuffinSelected}` );
       xhr.setRequestHeader( "Content-Type", "application/json" );
       xhr.onload = () => {
         if ( xhr.status === 200 ) {
           location.reload( true );
           console.log( xhr.responseText );
         } else {
           console.log( xhr.status, xhr.responseText );
         }
       }
       xhr.send();
     }
   



//function that will get values from the sign up form
// function checkregister() { 
//         var name = document.forms["RegForm"]["name"]; 
//         var flavour = document.forms["RegForm"]["flavour"]; 
//         var price = document.forms["RegForm"]["price"]; 
 
        
//        // var formData = JSON.stringify($("RegForm").serializeArray());
//        // console.log(name);


//     //in case any of the items is empty prompt a message to the user before it sends data
//         if (name.value == "") { 
//             window.alert("Please enter the name of the new muffin."); 
//             name.focus(); 
//             return false; 
//         } 
  
//         if (flavour.value == "") { 
//             window.alert("Please enter the flavour."); 
//             flavour.focus(); 
//             return false; 
//         } 
  
//         if (price.value == "") { 
//             window.alert( 
//               "Please enter a valid price."); 
//             price.focus(); 
//             return false; 
//         } 
  
//                 return true; 
//     } 

  function myFunction(){
       

         var list = document.getElementById("muffin").value;
        console.log(list);
         for (var i = 0; i < data.length; i++) {

            if(list === data[i].name){
        

            }

            window.alert( 
              "This name is not registered to delete")
    }
}