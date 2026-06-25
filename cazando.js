
let canvas = document.getElementById("areaJuego");
let ctx = canvas .getContext("2d");

//constantes 
const ALTO_GATO = 200;
const ANCHO_GATO = 100;
const ALTO_COMIDA = 80;
const ANCHO_COMIDA = 80;


//variables
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;



function iniciarJuego(){
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;
    comidaX = 0;
    comidaY = canvas.height-80;
    graficarGato();
    graficarComida();
}

function graficarGato() {
    ctx.fillStyle = "orange";
    ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

function graficarComida() {
    ctx.fillStyle = "green";
    ctx.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}
