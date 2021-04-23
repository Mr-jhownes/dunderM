//data js is responsable for retrieving data from the database in the back end and insert in ta table

//requesting data from the server
const muffinElement = document.getElementById('dunderm');
const xhttp = new XMLHttpRequest();
let data = null;

//executing the function requestmuffin where it will be parsed the data from json
(function () {
    requestMuffin();
}());

function requestMuffin() {

    xhttp.onreadystatechange = function () {
        //checking if everything is good, and there are no mistakes
        if (this.readyState == 4 && this.status == 200) {
            //after json is parsed storing on data and send to function  muffinRender
            data = JSON.parse(this.responseText);
            muffinRender(data);


        }
    };
    //re-initialize the request
    xhttp.open("GET", "/admin-list", true);
    xhttp.send();
}
//function that will loop throgh the data array and printing the element to the screen through a table
function muffinRender(data) {


    var col = ["_id", "name", "flavour", "price"];

    var tb = document.createElement("table");
    tb.className = "container table";

    var tr = tb.insertRow(-1);
    //looping through col array and populating the theader for a cell
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);

    }
    //looping through the data from db and populating the table
    for (var i = 0; i < data.length; i++) {

        tr = tb.insertRow(-1);
        //event listener which will allow to select the specific row and delete data
        tr.addEventListener('click', pickData(data[i]));
        tr.id = data[i]._id
        for (var j = 0; j < col.length; j++) {
            var newItem = tr.insertCell(-1);
            newItem.innerHTML = data[i][col[j]];
        }
    }
    //appending the table to present on html
    muffinElement.innerHTML = "";
    muffinElement.appendChild(tb);



}
//this function handles the select row
const pickData = (row) => (event) => {

    muffin = row;
    const selected = document.querySelector('.selected')
    console.log(muffin);
    if (selected) {
        selected.className = ''
    }

    document.getElementById(row._id).className = 'selected'
}

//this function will take the id selected and sending to the back end which will perform the deletion of the item seleted
function deleteMuf() {
    //the deletion  will be done taking the id of the muffin
    var deleteMuffinSelected = muffin._id;

    //xhttp will be use for the interaction between frontend and back end
    //xhr will take method, and the path to be redirecting the item to be deleted
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", `/admin-list/${deleteMuffinSelected}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
        if (xhr.status === 200) {
            location.reload(true);
            console.log(xhr.responseText);
        } else {
            console.log(xhr.status, xhr.responseText);
        }
    }
    xhr.send();
}

