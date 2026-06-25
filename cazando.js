let canvas = document.getElementById("areaJuego");
let ctx = canvas .getContext("2d");

function iniciar(){
    graficarGato();
}

function graficarGato(){
    let anchoRect = 100;
    let altoRect = 50;
    
    let x = (canvas.width - anchoRect) / 2;
    let y = (canvas.height - altoRect) / 2;
    
    ctx.fillStyle = "orange";
    ctx.fillRect(x, y, anchoRect, altoRect);
}