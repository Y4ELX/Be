import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x151924, 0);
renderer.setPixelRatio(1);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// Configurar la cámara perspectiva
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 6);

// Luces en la escena
const spotLight = new THREE.SpotLight(0xFFFFFF, 10000, 100, 0.5, 1);
spotLight.position.set(10, -30, -20);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.001;
scene.add(spotLight);

const spotLight1 = new THREE.SpotLight(0xffffff, 10000, 100, 0.5, 1);
spotLight1.position.set(-10, 30, 20);
spotLight1.castShadow = true;
spotLight1.shadow.bias = -0.001;
scene.add(spotLight1);

let mesh, pivot; // Variables para almacenar la malla cargada y el grupo

// Cargar el modelo 3D
const loader = new GLTFLoader().setPath('public/logo3d/');
loader.load('BeGLTF.gltf', (gltf) => {
    console.log('loading model');
    mesh = gltf.scene;

    // Calcular el centro del objeto
    const box = new THREE.Box3().setFromObject(mesh);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Crear un grupo para cambiar el punto de pivote
    pivot = new THREE.Group();
    pivot.add(mesh);

    mesh.rotation.y = Math.PI / -2; // Ajustar la rotación en el eje Y (90 grados)
    // Ajustar la posición del mesh dentro del grupo para centrarlo
    mesh.position.set(-center.x, -center.y);
    // Ajustar la rotación del grupo

    scene.add(pivot);

    mesh.traverse((child) => {
        if (child.isMesh) {
            const material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0.8,
                metalness: 0.2
            });
            child.material = material; // Asignar material personalizado
        }
    });

    pivot.scale.set(1.2, 1.2, 1.2);
    pivot.position.set(-0.2, -0.4, 0);

}, (xhr) => {
    console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
    console.error(error);
});

// Ajustar la cámara y el renderizador al redimensionar la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Variables para rastrear el movimiento del mouse
let mouseX = 0, mouseY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

// Evento de movimiento del mouse
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX) / windowHalfX;
    mouseY = (event.clientY - windowHalfY) / windowHalfY;
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
const cursor = document.getElementById('cursor');
var dof = null;

// Detectar cuando el cursor sale del área del iframe
document.addEventListener('mouseleave', function () {
    dof = false;
    cursor.style.display = 'none'; // Ocultar el cursor cuando el cursor sale del área del iframe
});

// Detectar cuando el cursor entra en el área del iframe
document.addEventListener('mouseenter', function () {
    dof = true;
    cursor.style.display = 'block'; // Mostrar el cursor cuando el cursor entra en el área del iframe
});

var yaSalio = true;
let direction = 1; // 1 para subir, -1 para bajar


function animate() {
    requestAnimationFrame(animate);

    if (dof) {

        if (camera.position.y.toFixed(1) != (-mouseY * 1).toFixed(1) || camera.position.x.toFixed(1) != (mouseX * 2).toFixed(1) || pivot.rotation.y.toFixed(2) != -1.57) {
            yaSalio = false;
            pivot.rotation.y += ((pivot.rotation.y < -1.57) ? 0.01 : 0);
            pivot.rotation.y -= ((pivot.rotation.y > -1.57) ? 0.01 : 0);

            camera.position.x += ((camera.position.x < mouseX * 3) ? 0.05 : 0);
            camera.position.x -= ((camera.position.x > mouseX * 3) ? 0.05 : 0);

            camera.position.y += ((camera.position.y < -mouseY * 1) ? 0.05 : 0);
            camera.position.y -= ((camera.position.y > -mouseY * 1) ? 0.05 : 0);

        } else {

            // Calcular la rotación de la cámara basada en la posición del mouse
            camera.position.x = mouseX * 2;
            camera.position.y = -mouseY * 1;
            setTimeout(function () {
                yaSalio = true;
            }, 1000000);
        }

        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    } else {

        // Restablecer la rotación del pivot a la orientación neutra
        camera.position.x += ((camera.position.x < 0) ? 0.01 : 0);
        camera.position.y += ((camera.position.y < 0) ? 0.01 : 0);

        // Restablecer la rotación del pivot a la orientación neutra
        camera.position.x -= ((camera.position.x > 0) ? 0.01 : 0);
        camera.position.y -= ((camera.position.y > 0) ? 0.01 : 0);

        camera.lookAt(scene.position);

        // En tu bucle o donde necesites el movimiento
        if (mesh.position.y < -1 && direction === 1) {
            mesh.position.y += 0.002; // o cualquier velocidad deseada
        } else if (mesh.position.y >= -1 && direction === 1) {
            direction = -1; // Cambiar la dirección una vez que alcanza el límite superior
        } else if (mesh.position.y > -1.7 && direction === -1) {
            mesh.position.y -= 0.002; // o cualquier velocidad deseada
        } else if (mesh.position.y <= -1.3 && direction === -1) {
            direction = 1; // Cambiar la dirección una vez que alcanza el límite inferior
        }

        renderer.render(scene, camera);
    }
    
}

animate();
