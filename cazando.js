
let canvas = document.getElementById("areaJuego");
let ctx = canvas .getContext("2d");

//constantes 
const ALTO_GATO = 100;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 30;
const ANCHO_COMIDA = 30;



//variables
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;



function iniciarJuego(){
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;
    comidaX = 0;
    comidaY = canvas.height-30;
    graficarGato();
    graficarComida();
}
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
   graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "orange");
}

function graficarComida() {
   graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "green");
}
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function moverIzquierda(){
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();  
}
