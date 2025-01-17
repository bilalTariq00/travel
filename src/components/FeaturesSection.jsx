import React, { useEffect } from "react";
import * as THREE from "three";

const FeaturesSection = () => {
  useEffect(() => {
    const canvas = document.getElementById("uhf-3d-model");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xff5733 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <section id="features" className="py-8">
         <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Features</h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-x-8">
       
        {/* 3D Model */}
        <div className="w-full md:w-1/3 h-64 md:h-72 bg-gray-300 rounded-lg shadow-lg">
          <canvas id="uhf-3d-model" className="w-full h-full"></canvas>
        </div>

        {/* Right Content */}
        <div className="max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">UHF Identification</h2>
          <p className="text-gray-600">
            RFID is a rapidly developing technology that uses radio waves to collect and transmit data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
