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
ctx.strokeStyle = "green";
ctx.lineWidth = 15;
//ctx.ellipse (x,y, radiusx, radiusy, rotation, startAngle, endAngle);
ctx.ellipse(100, 100, 60, 60, 0, 0, Math.PI * 2);
ctx.stroke();

//agrupar en una funcion
//con parametros para dibujar circulos en diferentes posiciones
//sin repetir todo el codigo
function dibujarCirculo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 15;
    //ctx.ellipse (x,y, radiusx, radiusy, rotation, startAngle, endAngle);
    ctx.ellipse(x, y, 60, 60, 0, 0, Math.PI * 2);
    ctx.stroke();
}

dibujarCirculo(200, 100);
dibujarCirculo(300, 100);   
dibujarCirculo(400, 100);

const circulo = {
    colorLinea: "red",
    grosorLinea: 20,
    radio: 100,
    rotacion: 0,
    anguloInicial: 0,
    anguloFinal: Math.PI * 2,
    x: 50,
    y: 400,
    dibujar: function(x, y) {
                ctx.beginPath();
                ctx.strokeStyle = circulo.colorLinea;
                ctx.lineWidth = circulo.grosorLinea;
                //ctx.ellipse (x,y desvincularlo para que sea cambiante, radiusx, radiusy, rotation, startAngle, endAngle);
                ctx.ellipse(x, y, circulo.radio, circulo.radio, circulo.rotacion, circulo.anguloInicial, circulo.anguloFinal);
                ctx.stroke();
    }
}

circulo.dibujar();

//crear evento listener
window.addEventListener("mousedown", function(event) {
    circulo.dibujar(event.clientX, event.clientY);
});