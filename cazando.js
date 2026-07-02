// ============================================
// JUEGO CAZANDO - CORREGIDO
// ============================================

let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// Constantes
const ANCHO_GATO = 50;
const ALTO_GATO = 50;
const ANCHO_COMIDA = 30;
const ALTO_COMIDA = 30;

// Variables
let gatoX = 225;
let gatoY = 225;
let comidaX = 0;
let comidaY = 0;
let puntaje = 0;
let tiempo = 10;
let intervalo;
let juegoActivo = true;

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

function iniciarJuego() {
    // Detener intervalo anterior si existe
    if (intervalo) clearInterval(intervalo);

    // Reiniciar variables
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;
    puntaje = 0;
    tiempo = 10;
    juegoActivo = true;

    // Actualizar UI
    mostrarEnSpan("txtPuntaje", puntaje);
    mostrarEnSpan("txtTiempo", tiempo);
    document.getElementById("mensaje").textContent = "";

    // Iniciar temporizador
    intervalo = setInterval(restarTiempo, 1000);

    // Mostrar comida y actualizar
    aparecerComida();
    actualizarPantalla();
}

function reiniciarJuego() {
    iniciarJuego();
}

// ============================================
// DIBUJO
// ============================================

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
    // Cuerpo del gato
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#FF9800");
    // Borde
    ctx.strokeStyle = "#E65100";
    ctx.lineWidth = 2;
    ctx.strokeRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#4CAF50");
    ctx.strokeStyle = "#1B5E20";
    ctx.lineWidth = 2;
    ctx.strokeRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function actualizarPantalla() {
    if (!juegoActivo) return;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

// ============================================
// MOVIMIENTO DEL GATO
// ============================================

function moverIzquierda() {
    if (gatoX > 0 && juegoActivo) {
        gatoX -= 20;
        actualizarPantalla();
    }
}

function moverDerecha() {
    if (gatoX + ANCHO_GATO < canvas.width && juegoActivo) {
        gatoX += 20;
        actualizarPantalla();
    }
}

function moverArriba() {
    if (gatoY > 0 && juegoActivo) {
        gatoY -= 20;
        actualizarPantalla();
    }
}

function moverAbajo() {
    if (gatoY + ALTO_GATO < canvas.height && juegoActivo) {
        gatoY += 20;
        actualizarPantalla();
    }
}

// ============================================
// COMIDA
// ============================================

function aparecerComida() {
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
    actualizarPantalla();
}

// ============================================
// COLISIÓN Y PUNTAJE
// ============================================

function detectarColision() {
    if (!juegoActivo) return;

    if (
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ) {
        puntaje++;
        mostrarEnSpan("txtPuntaje", puntaje);

        // Efecto visual: mostrar +1 en pantalla
        mostrarMensaje("+1 🎯", "#FFD700");

        if (puntaje >= 6) {
            juegoActivo = false;
            clearInterval(intervalo);
            mostrarMensaje("🎉 ¡GANASTE!", "#FFD700");
            alert("🎉 ¡FELICITACIONES! Has ganado el juego con " + puntaje + " puntos!");
            return;
        }
        aparecerComida();
    }
}

// ============================================
// TIEMPO
// ============================================

function restarTiempo() {
    tiempo--;
    mostrarEnSpan("txtTiempo", tiempo);

    if (tiempo <= 0) {
        clearInterval(intervalo);
        juegoActivo = false;
        mostrarMensaje("💀 GAME OVER", "#FF4444");
        alert("⏰ Tiempo agotado!\nPuntaje final: " + puntaje);
    }
}

// ============================================
// MENSAJE EN PANTALLA
// ============================================

function mostrarMensaje(texto, color = "#FFD700") {
    let mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.textContent = texto;
        mensaje.style.color = color;
        mensaje.style.textShadow = `0 0 20px ${color}40`;
    }
}