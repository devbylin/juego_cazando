
function generarAleatorio(min, max) {
    let random = Math.random();
    let numero = random * (max - min + 1);  
    let numeroEntero = Math.floor(numero);   
    numeroEntero = numeroEntero + min;
    return numeroEntero;
}


function mostrarEnSpan(idSpan, valor) {
    let componente = document.getElementById(idSpan);
    if (componente) {
        componente.textContent = valor;
    } else {
        console.warn("Elemento con ID '" + idSpan + "' no encontrado");
    }
}