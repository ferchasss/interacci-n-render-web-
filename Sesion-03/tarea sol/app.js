console.log("Ejercicio 03");

console.log(gsap);

// Asume que tienes un canvas y ctx definidos
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Objeto para animar
var circulo = { x: 0, y: canvas.height };

function dibujarCirculo(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.ellipse(x, y, 70, 70, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}


//movimiento con X
window.addEventListener("mousedown", function() {
    circulo.x = 0;
    dibujarCirculo(circulo.x, circulo.y);
    gsap.to(circulo, {
        x: canvas.width/2,
        duration: 4,
        ease: "power2.inOut",
        onUpdate: function() {
            dibujarCirculo(circulo.x, circulo.y);
        },
        onComplete: function() {
            gsap.to(circulo, {
                x: canvas.width,
                y:100,
                duration: 4,
                ease: "sine.out",
                onUpdate: function() {
                    dibujarCirculo(circulo.x, circulo.y);
                }
            });
        }
    });
});

//mivimiento y
window.addEventListener("mousedown", function() {
    circulo.y = canvas.height/2;
    dibujarCirculo(circulo.x, circulo.y);
    gsap.to(circulo, {
        y: 100,
        duration: 4,
        ease: "power2.out",
        onUpdate: function() {
            dibujarCirculo(circulo.x, circulo.y);
        },
        onComplete: function() {
            gsap.to(circulo, {
                y: canvas.height / 2,
                duration: 4,
                ease: "power2.inOut",
                onUpdate: function() {
                    dibujarCirculo(circulo.x, circulo.y);
                }
            });
        }
    });
});