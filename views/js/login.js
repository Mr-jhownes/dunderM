var attempt = 3; //these are the attempts that the user can input their info

//this function is to verify if the user has an valid account
//the idea was to use data from json file, but couldnt managed 
//gave a static username and password to test it
//after got the value from login.html passed the values to this function
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "cct" && password == "123"){
alert ("Login successfully");
window.location = "admin-list.html"; // Redirecting to other page.
return false;
}
else{
    //as per attempt the is decreasing
attempt --;
//message to show how many attempts have left
alert("You have left "+attempt+" attempt;");
// disabling the attemps
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}