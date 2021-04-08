//this js is responsable for reading the json and passing through the html printing the items on client side

//requesting data from the server
const spacElement = document.getElementById('dunderm');
const xhttp = new XMLHttpRequest();

//executing the function requestmuffin where it will be parsed the data from json
(function(){
    requestMuffin();
}());

function requestMuffin(){
    
    xhttp.onreadystatechange = function() {
        //checking if everything is good, and there are no mistakes
        if (this.readyState == 4 && this.status == 200) {
            //after json is parsed storing on data and send to function shipsrender
            let data = JSON.parse(this.responseText);
            shipsRender(data);
        }
    };
    //re-initialize the request
    xhttp.open("GET", "/get/dunderm", true);
    xhttp.send();
}
//function that will loop throgh the data array and printing the element to the screen
function shipsRender(data){
    console.log(data);
    for (var i = 0; i < data.muffins.length; i++) {
        //creating headings with the items, and classes so it can be captured on css
        let h1 = document.createElement('H1');
        h1.classList.add('name');
        //getting the name given on json
        h1.innerHTML = data.muffins[i].MuffinName;
        
        spacElement.appendChild(h1);

        let h2 = document.createElement('H2');
        h2.classList.add('flavour');
        //getting the flavour on json
        h2.innerHTML = data.muffins[i].flavour;

        spacElement.appendChild(h2);

        let h3 = document.createElement('H3');
        h3.classList.add('price');
        //getting price on json
        h3.innerHTML = data.muffins[i].price;

        spacElement.appendChild(h3);

    }

}
//function that will get values from the sign up form
function checkregister() { 
        var name = document.forms["RegForm"]["Name"]; 
        var email = document.forms["RegForm"]["EMail"]; 
        var phone = document.forms["RegForm"]["Telephone"]; 
        var password = document.forms["RegForm"]["Password"]; 
        var address = document.forms["RegForm"]["Address"]; 
        
        var formData = JSON.stringify($("RegForm").serializeArray());
        console.log(name);


    //in case any of the items is empty prompt a message to the user before it sends data
        if (name.value == "") { 
            window.alert("Please enter your name."); 
            name.focus(); 
            return false; 
        } 
  
        if (address.value == "") { 
            window.alert("Please enter your address."); 
            address.focus(); 
            return false; 
        } 
  
        if (email.value == "") { 
            window.alert( 
              "Please enter a valid e-mail address."); 
            email.focus(); 
            return false; 
        } 
  
        if (phone.value == "") { 
            window.alert( 
              "Please enter your telephone number."); 
            phone.focus(); 
            return false; 
        } 
  
        if (password.value == "") { 
            window.alert("Please enter your password"); 
            password.focus(); 
            return false; 
        } 
  
        if (what.selectedIndex < 1) { 
            alert("Please enter your course."); 
            what.focus(); 
            return false; 
        } 
  
        return true; 
    } 
