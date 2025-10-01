console.log("Ejercicio 03");
console.log(gsap);

const canvas = document.getElementById("lienzo");
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

window.addEventListener("mousedown", function() {
    gsap.to(".circulo", {
        x:0,
        y: canvas.height/2,
        duration: 4,
        ease: "power2.out",
        onComplete: function() {
            gsap.to(
                ".circulo", {
                    x: canvas.width/2,
                    y: 100,
                    duration: 4,
                    ease: "power2.in",
                    onComplete: function() {
                        gsap.to(
                        ".circulo", {
                        y: 0,
                        duration: 1,
                        ease: "power1.inOut"
                        }
                    );
                }
            });
        }
    });
});