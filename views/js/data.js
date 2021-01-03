
const spacElement = document.getElementById('dunderm');
const xhttp = new XMLHttpRequest();

(function(){
    requestMuffin();
}());

function requestMuffin(){
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            shipsRender(data);
        }
    };
    xhttp.open("GET", "/get/dunderm", true);
    xhttp.send();
}

function shipsRender(data){
    console.log(data);
    for (var i = 0; i < data.muffins.length; i++) {
        let h1 = document.createElement('H1');
        h1.classList.add('name');
        h1.innerHTML = data.muffins[i].MuffinName;
        
        spacElement.appendChild(h1);

        let h2 = document.createElement('H2');
        h2.classList.add('flavour');
        h2.innerHTML = data.muffins[i].flavour;

        spacElement.appendChild(h2);

        let h3 = document.createElement('H3');
        h3.classList.add('price');
        h3.innerHTML = data.muffins[i].price;

        spacElement.appendChild(h3);

    }

}

function checkregister() { 
        var name = document.forms["RegForm"]["Name"]; 
        var email = document.forms["RegForm"]["EMail"]; 
        var phone = document.forms["RegForm"]["Telephone"]; 
        var what = document.forms["RegForm"]["Subject"]; 
        var password = document.forms["RegForm"]["Password"]; 
        var address = document.forms["RegForm"]["Address"]; 
  
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
