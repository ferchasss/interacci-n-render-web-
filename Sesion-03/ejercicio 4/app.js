//referencia a <canvas>

const canvas = document.getElementById("lienzo");
console.log(canvas); 
// definimos contexto
const ctx = canvas.getContext("2d");
console.log(ctx);
//definimos resolucion con metodos
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//instrucciones para dibujar un circulo
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 15;
//ctx.ellipse (x,y, radiusx, radiusy, rotation, startAngle, endAngle);
ctx.ellipse(100, 100, 60, 60, 0, 0, Math.PI * 2);
ctx.stroke();

//agrupar en una funcion
//con parametros para dibujar circulos en diferentes posiciones
//sin repetir todo el codigo
function dibujarCirculo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 15;
    //ctx.ellipse (x,y, radiusx, radiusy, rotation, startAngle, endAngle);
    ctx.ellipse(x, y, 60, 60, 0, 0, Math.PI * 2);
    ctx.stroke();
}

dibujarCirculo(100, 200);
dibujarCirculo(200, 300);   
dibujarCirculo(300, 400);