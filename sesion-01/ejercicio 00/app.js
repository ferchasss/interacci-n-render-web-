/* JAVASCRIPT: Lógica de Dibujo de Formas Geométricas */

const canvas = document.getElementById('abstractCanvas');
const ctx = canvas.getContext('2d');

// --- PARÁMETROS DEL DIBUJO ---
const TAMANO = 500;             // 📏 Tamaño del lienzo
canvas.width = TAMANO;
canvas.height = TAMANO;

// --- FUNCIONES DE DIBUJO ---

// Función auxiliar para dibujar un triángulo relleno
function dibujarTriangulo(x1, y1, x2, y2, x3, y3, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}

// Función auxiliar para dibujar una línea
function dibujarLinea(x1, y1, x2, y2, grosor, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Función principal que compone la obra
function dibujarComposicion() {
    // 1. Triángulos de Fondo (Formas grandes y sólidas)
    
    // Triángulo azul grande (relleno)
    dibujarTriangulo(
        0, TAMANO, 
        TAMANO * 0.7, 0, 
        TAMANO * 0.3, TAMANO, 
        'rgba(0, 100, 200, 0.8)' // Azul con opacidad
    );

    // Triángulo amarillo (superpuesto y más pequeño)
    dibujarTriangulo(
        TAMANO * 0.5, 0, 
        TAMANO, TAMANO * 0.5, 
        TAMANO * 0.7, TAMANO * 0.7, 
        'rgba(255, 200, 0, 0.9)' // Amarillo
    );

    // Cuadrado/Rectángulo Rojo (superpuesto)
    ctx.fillStyle = 'rgba(200, 50, 50, 0.9)'; // Rojo
    ctx.fillRect(
        TAMANO * 0.1,         // x
        TAMANO * 0.6,         // y
        TAMANO * 0.35,        // ancho
        TAMANO * 0.2          // alto
    );

    // 2. Líneas de Detalle (Superpuestas, más finas)

    // Línea diagonal roja que cruza el centro
    dibujarLinea(
        TAMANO * 0.05, TAMANO * 0.95, 
        TAMANO * 0.95, TAMANO * 0.05, 
        4, 'red'
    );

    // Línea horizontal gruesa sobre el rectángulo rojo
    dibujarLinea(
        TAMANO * 0, TAMANO * 0.7, 
        TAMANO * 0.6, TAMANO * 0.7, 
        8, 'black'
    );
    
    // Línea vertical que termina en el centro
    dibujarLinea(
        TAMANO * 0.25, 0, 
        TAMANO * 0.25, TAMANO * 0.5, 
        3, 'rgba(0, 0, 0, 0.6)' // Negro semi-transparente
    );
}

// 🚀 Ejecutar el dibujo
dibujarComposicion();