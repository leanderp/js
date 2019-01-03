'use strict'

//DOM - Document Object Model

function cambiarColor(color, color2){
    caja.style.background = color;
    caja.style.color = color2;
}

var caja = document.getElementById("micaja");
//var caja = document.querySelector("#micaja"); 
// "micaja" = nombre de etiqueta; "#micaja" = elementos con id;".micaja" = para seleccionar una clase.

caja.innerHTML = "TEXTO CAJA DESDE JS!";
caja.style.background = "blue";
caja.style.padding = "20px";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.getElementById("miseccion");
var hr = document.createElement('hr');
seccion.append(hr);


var valor;
for (valor in todosLosDivs) {
    var parrafo = document.createElement("h5");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    document.querySelector('#miseccion').appendChild(parrafo);
}
seccion.append(hr);
/*
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
contenidoEnTexto.style.background = "green";
*/
    
// Conseguir elementos pos su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";
var div;
for(div in divsRojos){
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";  
    }  
}

//divsRojos[0].style.background = "red";
console.log(divsRojos);

// Query Sellector (Selecciona un elemeto en una clase)
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);