'use strict'

// Eventos del raton

var boton = document.getElementById("boton");

function cambiarColor() {
    console.log("Me has dado click");
    
    var bg = boton.style.background;
    
    if (bg == "green") {
        boton.style.background = "red"; 
    }else{
        boton.style.background = "green"; 
    }
    boton.style.padding = "10px";
    boton.style.border = "1px"
    return true;
}

var boton = document.getElementById("boton");
// Click

boton.addEventListener("click", function () {
    cambiarColor();
});

// Mouse over

boton.addEventListener('mouseover', function () {
   boton.style.background = "#ccc";     
})

// Mouseout
boton.addEventListener('mouseout', function () {
    boton.style.background = "#ff52ff";     
 })