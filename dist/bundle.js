import*as o from"three";import{GLTFLoader as e}from"three/addons/loaders/GLTFLoader.js";import"three/addons/controls/OrbitControls.js";const n=new o.Scene;n.background=new o.Color(0);const t=new o.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),i=new o.WebGLRenderer;i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement),t.position.set(0,0,300);(new e).load("space/scene.gltf",(o=>{const e=o.scene;e.position.set(-100,-100,100),n.add(e);let r=0;const s=function(){console.log(t.rotation.x),requestAnimationFrame(s),0==r&&(t.position.z-=.5,t.rotation.x-=.01),1==r&&(t.position.z+=.5),t.position.z<=-190&&(r=1),1==r&&t.position.z>=200&&(t.rotation.x=-2,r=0),i.render(n,t)};s()}));
