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
    
    for (var i = 0; i < data.length; i++) {
        //creating headings with the items, and classes so it can be captured on css
        let h1 = document.createElement('h4');
        h1.classList.add('name');
        //getting the name given on json
        
       // var test = data[i].name;
        h1.innerHTML = data[i].name;
        
        
        //'<button id="btn" onclick="myFunction()" name="btn">-   Delete</button>';
        
        muffinElement.appendChild(h1);

        let h2 = document.createElement('H2');
        h2.classList.add('flavour');
        //getting the flavour on json
        h2.innerHTML = data[i].flavour;

        muffinElement.appendChild(h2);

        let h3 = document.createElement('H3');
        h3.classList.add('price');
        //getting price on json
        h3.innerHTML = data[i].price;

        muffinElement.appendChild(h3);


        //document.getElementById("myBtn").addEventListener("click", displayDate);



    }

}

function displayDate() {
  var test =  document.getElementById('dunderm').innerHTML;
  console.log(test);
}
//function that will get values from the sign up form
function checkregister() { 
        var name = document.forms["RegForm"]["name"]; 
        var flavour = document.forms["RegForm"]["flavour"]; 
        var price = document.forms["RegForm"]["price"]; 
 
        
       // var formData = JSON.stringify($("RegForm").serializeArray());
       // console.log(name);


    //in case any of the items is empty prompt a message to the user before it sends data
        if (name.value == "") { 
            window.alert("Please enter the name of the new muffin."); 
            name.focus(); 
            return false; 
        } 
  
        if (flavour.value == "") { 
            window.alert("Please enter the flavour."); 
            flavour.focus(); 
            return false; 
        } 
  
        if (price.value == "") { 
            window.alert( 
              "Please enter a valid price."); 
            price.focus(); 
            return false; 
        } 
  
                return true; 
    } 

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