console.log('main.js');
/*
Definir en una constante el espacio mínimo que deseamos entre cada imagen.
Crear una variable tipo objeto para guardar la posición de la última imagen creada y poder medir la distancia al mouse.
En el evento “mousemove” donde estamos invocando la función para crear imágenes, vamos a definir la condición para crear la imagen:
Primero calculamos la distancia en X y Y entre la posición de la última imagen y el mouse actualmente.
Si la distancia calculada es mayor a nuestro espacio mínimo, solo entonces creamos la imagen.
Finalmente, actualizamos el registro de la posición de la última imagen ya que creamos una nueva.
const minDistance = 
*/
const minDistance = 50;
var lastPos = {
    x: 0,
    y: 0,
}


/*
Crear una lista con la ubicación de las imágenes a renderizar.
Actualizar nuestra función para que lea un valor de esta lista para renderizar nuestra imagen.
Definir una variable “índice” que nos indique qué imagen debe renderizar nuestra función.
Avanzar 1 posición el valor del índice cada vez que creamos una imagen.
Usar este índice para definir qué valor en la lista queremos leer.
Reiniciar el índice al alcanzar el máximo.
*/
var imagesList = [
"./assets/p1.jpg",
"./assets/p2.jpg",
"./assets/p3.jpg",
"./assets/p4.jpg",
"./assets/p5.jpg",
"./assets/p6.jpg" 

];

var index= 0;

// 01. Renderizar 1 imagen.
/*
1.Crear etiqueta <img> virtual.
2.Cargar imagen desde una fuente (src).
3.Definir su estilo / apariencia (CSS).
ancho / alto.
posición (x / y).
otros: esquinas redondeadas, bordes, sombra proyectada, etc.



4.Agregarla al <Documento>.
5.Agrupar estas instrucciones en una función.
*/
function createFloatingImage(posX, posY) {
console.log(posX, posY);
const img = document.createElement("img")
img.src = imagesList [index];
img.style.width = "227px";
img.style.height = "150px";
img.style.top = `${posY - 75}px`;//cadena de caracteres pero con una variable
img.style.left = posX - (113.5) + "px";
img.style.position = "absolute";
img.style.opacity = 0;
document.body.appendChild(img);

 gsap.to(img, {
    y: "-20px", 
        duration: 1, 
        opacity: 1, 
        ease: 'power3.out',
 });

index = index + 1;
if (index >= imagesList.length){
    index = 0;              
}
setTimeout (function() {
    gsap.to(img, {
        duration: 1, 
        opacity: 0, 
        ease: 'power3.out',
        onComplete: function() {
         img.remove(); 
        }
    });
  
}, 1000);
}


// 02. Renderizar “n” imágenes.
window.addEventListener("mousemove", function (evenData) {
    console.log(evenData);
    //calcular la distancia entre el mouse y la ultima imagen dibuada paraa evualar uestra condicion para renderizar o no 
    
    
    //1. Calcular la distancia
    var dx = evenData.clientX - lastPos.x;
    dx = Math.abs (dx); //valor absoluto
    var dy = evenData.clientY - lastPos.y;

    if (dx >= minDistance || dy >= minDistance){
        createFloatingImage(evenData.clientX, evenData.clientY);
        lastPos.x = evenData.clientX;
        lastPos.y = evenData.clientY;
    }
});



// 03. Posicionarlas según el mouse.

// 04. Mostrarlas en ciclo.
// 05. Desaparecerlas después de “x” tiempo.
// 06. Hacer su animación de salida.


// 07. Hacer su animación de entrada.
// 08. Renderizarlas cada “x” distancia.
// 09. Renderizarlas adelante y atrás de cada letra.
