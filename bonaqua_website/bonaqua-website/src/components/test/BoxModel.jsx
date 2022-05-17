import React from "react";
import bona from "../images/bona0.5.png";
import * as THREE from 'three';
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import "../css/style.css";

function BoxModel() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    const canvas =  document.getElementById('myCanvas');
    const renderer = new THREE.WebGL1Renderer({
      canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // const ambientLight = new THREE.AmbientLight(0xff0000, 0.7);

    // ambientLight.castShadow = true;
    // scene.add(ambientLight);

    // const spotLight = new THREE.SpotLight(0xff0000, 0.3);
    // spotLight.castShadow = true;
    // spotLight.position.set(0, 64, 32);
    // scene.add(spotLight);

    const boxGeometry = new THREE.BoxGeometry(16,16,16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    //Add orbit controls.
    const controls = new OrbitControls(camera, renderer.domElement);
    //Add FPS stats
    // const stats = Stats();
    // document.body.appendChild(stats.dom);

    const animate = () => {
      // boxMesh.rotation.x += 0.01;
      // boxMesh.rotation.y += 0.01;
      // stats.update();
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="flex justify-center">
      <canvas id="myCanvas"></canvas>
    </div>
  );
}

export default BoxModel