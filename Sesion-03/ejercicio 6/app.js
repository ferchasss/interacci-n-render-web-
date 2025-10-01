console.log("Hello, World!");   
console.log(gsap);



window.addEventListener("mousedown", function() {
gsap.to(
        ".rectangulo",
        {x: 500, 
            duration: 5, //segundos
            ease: "bounce.out",
            y: 200,
        }
    );
});