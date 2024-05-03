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


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

loader.load( './space/scene.gltf', (gltf) => {
        const model = gltf.scene;
        model.position.set(-100, -100, 100);
        scene.add(model);
        let change = 0;
        const animate = function () {
            requestAnimationFrame(animate);
            if (change == 0) {
                camera.position.z -= 0.5;
                camera.rotation.x -= 0.01;
            }
            if (change == 1) {
                camera.position.z += 10;
            }
            if (camera.position.z <= -190)
                change = 1;
            if (change ==  1 && camera.position.z >= 200) {
                camera.rotation.x = -2
                change = 4; //Stop, anim loop change = 0
                setTimeout(() => { // Ajoute une pause de 2 secondes
                    change = 4; // Réinitialise le changement après la pause
                }, 2000);
            }
            renderer.render(scene, camera);
        };
        animate();

        setTimeout(() => {
            scene.remove(model);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
            directionalLight.position.set(0, 0, 1);
            scene.add(directionalLight);
            loader.load('./vaisseau/scene.gltf', (newGltf) => {
                const newModel = newGltf.scene;
                newModel.position.set(0, 0, 0);
                scene.add(newModel);
            });
            const animate = function () {
                requestAnimationFrame(animate);
                if (camera.position.z <= 900)
                    camera.position.z += 5;
                renderer.render(scene, camera);
            };
            animate();
            camera.position.set(0, 25, 0);
            camera.rotation.set(0, 0, 0);
        }, 18000);
    },
);
// resize anim bar at the begining
function resizebars() {
    var bars = document.querySelectorAll('.bar');
    var viewportWidth = window.innerWidth;
    var barWidths = [0.2, 0.23, 0.2]; // Largeur initiale des barres (en pourcentage de la largeur de la fenêtre)
    var newWidths = barWidths.map(function(width) {
        return width * viewportWidth;
    });
    bars.forEach(function(bar, index) {
        bar.style.width = newWidths[index] + 'px';
    });
}
window.onload = function() {
    resizebars();
}
window.addEventListener('resize', function() {
    resizebars();
});
document.addEventListener('fullscreenchange', function() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
        console.log("Mode plein écran activé.");
    } else {
        console.log("Mode plein écran désactivé.");
    }
    resizeBars();
});

const titre = document.querySelector("h1.title-anim");
var typewriter = new Typewriter(titre, {})
typewriter.pauseFor(6000)
    .typeString("Hello,")
    .pauseFor(700)
    .typeString(" I'm")
    .pauseFor(900)
    .typeString(" Nicolas Dumetz.")
    .pauseFor(600)
    .start();

// const navette = document.getElementById("navette");
// let posX = 0;
// let posY = 0;
// const step = 10;
// const rotationStep = 5;
// function moveNavette(x, y) {
//     navette.style.left = x + "px";
//     navette.style.top = y + "px";
// }
// document.addEventListener("keydown", function(event) {
//     switch(event.key) {
//         case "ArrowUp":
//             console.log("coucou");
//             posY -= step;
//             moveNavette(posX, posY);
//             break;
//         case "ArrowDown":
//             posY += step;
//             moveNavette(posX, posY);
//             break;
//         case "ArrowLeft":
//             posX -= step;
//             moveNavette(posX, posY);
//             break;
//         case "ArrowRight":
//             posX += step;
//             moveNavette(posX, posY);
//             break;
//     }
// });



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