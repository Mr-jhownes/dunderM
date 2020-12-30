
const spacElement = document.getElementById('spaceZ');
const xhttp = new XMLHttpRequest();

(function(){
    requestShips();
}());

function requestShips(){
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            shipsRender(data);
        }
    };
    xhttp.open("GET", "/get/spaceZ", true);
    xhttp.send();
}

function shipsRender(data){
    console.log(data);
    for (var i = 0; i < data.muffins.length; i++) {
        let h1 = document.createElement('H1');
        h1.classList.add('light-speed');
        h1.innerHTML = data.muffins[i].MuffinName;
        
        spacElement.appendChild(h1);

        let h2 = document.createElement('H2');
        h2.innerHTML = data.muffins[i].flavour;

        spacElement.appendChild(h2);

        let h3 = document.createElement('H3');
        h3.innerHTML = data.muffins[i].price;

        spacElement.appendChild(h3);

    }

}
