console.log("Sesion 05. Ejercicio 01");   
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
//geometria
const geometry = new THREE.TorusKnotGeometry();

//material
const material = new THREE.MeshBasicMaterial({color:"blue"});
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