console.log("Ejercicio 02");
// Configurar canvas
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Coordenadas del centro y tamaños
const cx = canvas.width / 2;
const cy = canvas.height / 2;
const radio = 50;
const rayLength = 100;
const rayWidth = 6;

// Dibujar círculo central
ctx.lineWidth = 6;
ctx.beginPath();
ctx.arc(cx, cy, radio, 0, 2 * Math.PI);
ctx.stroke();

// Dibujar rayos
for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4; // 0, 45, 90, ..., 315 grados
    const x1 = cx + Math.cos(angle) * (radio + 10);
    const y1 = cy + Math.sin(angle) * (radio + 10);
    const x2 = cx + Math.cos(angle) * (radio + rayLength);
    const y2 = cy + Math.sin(angle) * (radio + rayLength);

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = rayWidth;
    ctx.stroke();
}

//cargar imagen
var img = new Image();
//2.1 especificar cual es la imagen 

// encontrar el evento de carga "load"
img.onload = function() {
    console.log("Imagen cargada correctamente");
    

    //renderizar imagen 
   // ctx.drawFocusIfNeeded(this.x, this.y, this.width, height);  Image
   ctx.drawImage(img, 50, 30, 1000, 100, )
    };