'use strict'

// BOM - Browser Object Model

function getBom() {
    console.log(window.innerHeight);//De la pagina  (navegador)
    console.log(window.innerWidth);// De la pagina (navegador)
    console.log(screen.width);// Calcula el tama#o de la pantalla
    console.log(screen.height);//Calcula el tama#o de la pantalla
    console.log(window.location);// Se ve la locacion del archivo
    console.log(window.location.href)// Especifica la localizacion del archivo "href"
    console.log()
}

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url, "", "width=400, height=300");
}
getBom();