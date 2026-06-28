let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// Constantes
const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 30;
const ANCHO_COMIDA = 30;

// Variables
let gatoX = 100;
let gatoY = 100;
let comidaX = 300;
let comidaY = 200;
let puntos = 0;
let tiempo = 10;

function iniciarJuego() {
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;
    comidaX = 0;
    comidaY = canvas.height - 30;
    graficarGato();
    graficarComida();
    aparecerComida();
    moverComidaAleatoria();
    actualizarPantalla();
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
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function moverIzquierda() {
    if (gatoX > 0) {
        gatoX = gatoX - 10;
        actualizarPantalla();
    }
}
function moverDerecha() {
    if (gatoX + ANCHO_GATO < canvas.width) {
        gatoX = gatoX + 10;
        actualizarPantalla();
    }
}
function moverArriba() {
    if (gatoY > 0) {
        gatoY = gatoY - 10;
        actualizarPantalla();
    }
}
function moverAbajo() {
    if (gatoY + ALTO_GATO < canvas.height) {
        gatoY = gatoY + 10;
        actualizarPantalla();
    }
}
function actualizarPantalla() {
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}
function moverComidaAleatoria(){
    aparecerComida();
}
function detectarColision() {
    let colision = (
        gatoX + ANCHO_GATO > comidaX &&
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoY + ALTO_GATO > comidaY &&
        gatoY < comidaY + ALTO_COMIDA
    );
    if (colision){
        puntos = puntos + 1;
        mostrarEnSpan("txtPuntos", puntos);
      aparecerComida();
    }
    
}
function aparecerComida(){
    comidaX = generarAleatorio(0,canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0,canvas.height - ALTO_COMIDA);
    actualizarPantalla();
    
}