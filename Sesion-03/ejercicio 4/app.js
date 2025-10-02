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
ctx.closePath(); //cierra camino

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
    ctx.closePath(); //cierra camino
}

dibujarCirculo(100, 200);
dibujarCirculo(200, 300);   
dibujarCirculo(300, 400);
//escuchar el evento en la posicion del mouse
window.addEventListener("mousemove", function (event)  {

    //dibujar circulo en la posicion del mouse
    dibujarCirculo(event.clientX, event.clientY);
});