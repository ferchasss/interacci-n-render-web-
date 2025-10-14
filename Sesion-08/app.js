import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; 

// 1. Importar librerías.
console.log(THREE);

// --- VARIABLES GLOBALES ---
const planets = []; // Array para guardar las referencias de los objetos

// 2. Configurar canvas.
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 3. Configurar escena 3D.
const scene = new THREE.Scene();

// 💡 SOLUCIÓN PIXELADO: antialias: true suaviza los bordes.
const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas,
    antialias: true 
});
renderer.setSize(canvas.width, canvas.height);
renderer.setClearColor("#110e46ff"); // Fondo negro

// --- CÁMARA y CONTROLES ---
const camera = new THREE.PerspectiveCamera(45, canvas.width / window.innerHeight, 0.1, 1000);
camera.position.z = 40; // Coloca la cámara más lejos para ver todo el sistema

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0); // La cámara orbita alrededor del centro
controls.update();


// =======================================================
// 🎯 OBJETO CENTRAL (EL SOL)
// =======================================================

// El Sol usa MeshBasicMaterial para brillar por sí mismo.
const sunGeo = new THREE.SphereGeometry(2.5, 128, 128); 
const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xffa500, // Color naranja brillante
});
const sunMesh = new THREE.Mesh(sunGeo, sunMaterial); 
scene.add(sunMesh);
sunMesh.position.set(0, 0, 0); 


// =======================================================
// 🎯 ILUMINACIÓN ÚNICA (Emite luz desde el centro)
// =======================================================

// LUZ PRINCIPAL: Irradia desde el centro e ilumina a los planetas
const sunLight = new THREE.PointLight(0xffffff, 800, 200); 
sunLight.position.set(0, 0, 0); 
scene.add(sunLight);

// Luz Ambiental: Ayuda a que los lados oscuros de los planetas no sean totalmente negros.
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1); 
scene.add(ambientLight);


// =======================================================
// 🎯 FUNCIÓN PARA CREAR PLANETAS (Modular)
// =======================================================

// Ahora acepta el color para control individual
function createOrbitingCube(orbitalRadius, speed, size, planetColor) {
    // 1. Crear el GRUPO (El pivote invisible de la órbita)
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup); 

    // 2. Crear la Esfera-Planeta
    const geometry = new THREE.SphereGeometry(size, 64, 64); 
    // Usa MeshStandardMaterial para que la luz del sol lo afecte
    const material = new THREE.MeshStandardMaterial({ color: planetColor });
    const planetMesh = new THREE.Mesh(geometry, material);

    // 3. POSICIONAR: Define el radio de la órbita.
    planetMesh.position.x = orbitalRadius; 
    
    // 4. Añadir el planeta al GRUPO
    orbitGroup.add(planetMesh);

    // 5. Guardar la velocidad
    planets.push({ 
        group: orbitGroup, 
        planetMesh: planetMesh,
        speed: speed 
    });
}

// =======================================================
// 🎯 GENERACIÓN INDIVIDUAL DE LOS 8 PLANETAS
// Formato: createOrbitingCube(radio_orbita, velocidad_orbita, tamaño, color)
// =======================================================

// 1. Mercurio (Cercano, Rápido, Pequeño)
createOrbitingCube(5.0, 0.001, 0.4, 0x8b8070); 

// 2. Venus (Medio, Mediano)
createOrbitingCube(8.0, 0.002, 0.7, 0xfce883); 

// 3. Tierra (Medio, Lento, Azul/Verde)
createOrbitingCube(11.0, 0.005, 0.8, 0x0080ff); 

// 4. Marte (Medio-Lejano, Más Lento, Rojo)
createOrbitingCube(14.0, 0.002, 0.5, 0xff4500); 

// 5. Júpiter (Lejano, Muy Lento, Gigante)
createOrbitingCube(20.0, 0.007, 1.5, 0xcd853f); 

// 6. Saturno (Muy Lejano, Súper Lento, Grande)
createOrbitingCube(27.0, 0.005, 1.3, 0xf0e68c); 

// 7. Urano (Ultra Lejano, Lentísimo)
createOrbitingCube(35.0, 0.003, 1.0, 0xafeeee); 

// 8. Neptuno (El más Lejano, El más Lento)
createOrbitingCube(42.0, 0.002, 1.0, 0x4169e1); 


// ----------------------------------------------------
// 4. BUCLE DE ANIMACIÓN (Render Loop)
// ----------------------------------------------------
function animate() {
 // 1. requestAnimationFrame() para crear el bucle
 requestAnimationFrame(animate); 

 // 2. Actualizar los controles de cámara (Crucial para el movimiento del usuario)
controls.update();

 // 3. Animación del objeto central (El Sol gira lentamente)
 sunMesh.rotation.x += 0.001;
sunMesh.rotation.y += 0.001;

// 4. MOVIMIENTO DE LAS ÓRBITAS (Cada uno usa su velocidad única)
 planets.forEach(p => {
// Rotar el GRUPO: Esto mueve el planeta en órbita
 p.group.rotation.y += p.speed; 

 // Rotar el PLANETA: Esto hace que el planeta gire sobre su propio eje
 p.planetMesh.rotation.y += 0.02; // Rotación propia
 });

// 5. Renderizar la escena
 renderer.render(scene, camera);
}

// 5. Adaptar a la ventana (Responsividad)
window.addEventListener('resize', () => {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

camera.aspect = canvas.width / canvas.height;
 camera.updateProjectionMatrix();

 renderer.setSize(canvas.width, canvas.height);
});


// 6. Iniciar
animate();