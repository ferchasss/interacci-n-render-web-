console.log("Sesion 05. Ejercicio 02:Materiales");   
console.log(THREE);

//configurar <canvas>
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//creamos nuestros elementos basicos
//escena, camara, mesh, renderer
//escena
const scene = new THREE.Scene();
//camara
//const camera = new THREE.Camera(fov, aspectRadio, near, far);
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);

//mesh
//geometria//radius, radialSegments, heightSegments
const geometry = new THREE.TorusKnotGeometry();
(1, 36, 36);
//material
const material = new THREE.MeshToonMaterial({
    flatShading: true,
    specular: "#ff1865",
    shininess: 100,

});
const mesh= new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = -8;
//mesh.rotation.x = 60;
//renderer
const renderer = new THREE.WebGLRenderer ({canvas:canvas});
renderer.setSize(canvas.width, canvas.height);
//dar instruccion de renderizar o imprimir nuestro primer frame
renderer.render(scene, camera);

function animate() {
   requestAnimationFrame(animate);

   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}
animate();
// Tip para agregar luces a nuestra escena:
const topLight = new THREE.PointLight("#c81b1bff", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#ffea00", 10, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);