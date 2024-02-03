import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0,0,300);
const loader = new GLTFLoader();

loader.load( 'space/scene.gltf', (gltf) => {
        const model = gltf.scene;
        model.position.set(-100, -100, 100);
        scene.add(model);
        let caca = 0;
        const animate = function () {
            console.log(camera.rotation.x)
            requestAnimationFrame(animate);
            if (caca == 0) {
                camera.position.z -= 0.5;
                camera.rotation.x -= 0.01;
            }
            if (caca == 1) {
                camera.position.z += 0.1;
                // camera.rotation.y += 0.01;
                // camera.rotation.x -= 0.01;
            }
            if (camera.position.z <= -190)
                caca = 1;
            if (caca ==  1 && camera.position.z >= 200) {
                camera.rotation.x = -2
                caca = 0;
            }
            renderer.render(scene, camera);
        };
        animate();
    },
);


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

// camera.position.z = 100;

// let render = new THREE.WebGLRenderer()

// render.setClearColor(0x000000)
// render.setSize(window.innerWidth, window.innerHeight)

// document.body.appendChild(render.domElement)


// let forme = new THREE.Group()
// let geometri = new THREE.TorusKnotGeometry(10, 3, 100, 16)

// let materiel = new THREE.MeshNormalMaterial({
//     color: 0xff0000,
//     opacity: 1,
//     wireframe: true,
//     wireframeLinewidth: 5,
//     wireframeLinejoin: 'round',
//     wireframeLinecap: 'round',
// });

// forme.add(new THREE.Mesh(geometri, materiel))

// scene.add(forme)



// let animer = function() {
//     requestAnimationFrame(animer)

//     forme.rotation.x += 0.005
//     forme.rotation.y += 0.005
//     render.render(scene, camera)
// }
// animer()

// render.render(scene, camera)