const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.style.overflowX = 'hidden';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const cols = 1;
const rows = 11;

// Make circles bigger
const radius = Math.min(canvas.width, canvas.height) / 6;

const gap = radius * 0.2;

const centerX = canvas.width / 2;

const startY = (canvas.height - (rows * radius *0.2 + (rows - 1) * gap)) / 2 + radius;

ctx.strokeStyle = 'red';
ctx.lineWidth = 3;

for (let row = 0; row < rows; row++) {
    const y = startY + row * (gap);
    ctx.beginPath();
    ctx.arc(centerX, y, radius, 0, Math.PI * 2);
    ctx.stroke();
}


//1. Escuchar que el mouse se mueva
window.addEventListener("mousemove", function (eventData) {
    console.log("Hola X:", eventData.x);
    console.log("Hola Y:", eventData.y);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.ellipse(x,y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.strokeStyle = 'darkorange';
ctx.ellipse(eventData.x, eventData.y, radius, radius, 0, 0, Math.PI * 2);
ctx.stroke();

for (let row = 0; row < rows; row++) {
    const y = startY + row * (gap);
    ctx.beginPath();
    ctx.strokeStyle = 'seagreen';
    ctx.arc(centerX, y, radius, 0, Math.PI * 2);
    ctx.stroke();
}
});


window.addEventListener("mousedown", function (eventData) {
    console.log("mouse down");

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'blue';
        
    for (let row = 0; row < rows; row++) {
        const y = startY + row * (gap);
        ctx.beginPath();
         ctx.strokeStyle = 'pink';
        ctx.arc(centerX, y, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
    ctx.beginPath();
   
    ctx.ellipse(eventData.x, eventData.y, radius, radius, 0, 0, Math.PI * 2);
    ctx.stroke();
        
});


    window.addEventListener("mouseup", function (eventData) {
        console.log("mouse up");
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'purple';
        
        for (let row = 0; row < rows; row++) {
            const y = startY + row * (gap);
            ctx.beginPath();
            ctx.arc(centerX, y, radius, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        ctx.beginPath();
        ctx.ellipse(eventData.x, eventData.y, radius, radius, 0, 0, Math.PI * 2);
        ctx.stroke();
    });

    //1. crear referencia a nuestro boton de html.
    const boton = document.getElementById("boton");
    console.log(boton);
    // 2. agregar un "event listener" a ese boton
    boton.addEventListener(mousedown, function () {
//definimos estilos 
ctx.fillStyle = 'yellow';
//iniciamos trazo
ctx.rect(50, 100, 300, 50);

//renderizamos
ctx.fill();
    });

        // 2.1 