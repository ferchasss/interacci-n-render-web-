console.log("Ejercicio 02");
//configurar canva
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

canvas.width =window.innerWidth;
canvas.height =window.innerHeight;

//cargar imagen
var img = new Image();
//2.1 especificar cual es la imagen 
var path = "./imagenes/sesion 1.png";
img.src=path;
// encontrar el evento de carga "load"
img.onload = function() {
    console.log("Imagen cargada correctamente");
    

    //renderizar imagen 
   // ctx.drawFocusIfNeeded(this.x, this.y, this.width, height);  Image
   ctx.drawImage(img, 50, 30, 1000, 100, )
    };