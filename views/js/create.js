//function that will get values from the sign up form
function checkregister() {



    var name = document.forms["RegForm"]["name"];
    var flavour = document.forms["RegForm"]["flavour"];
    var price = document.forms["RegForm"]["price"];

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

}



