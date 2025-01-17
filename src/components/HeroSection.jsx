import React, { useEffect } from "react";
import * as THREE from "three";
import DarkModeToggle from "./darkmode/DarkModeToggle";
import { Link, useLocation } from "react-router-dom";

const HeroSection = () => {
  const location = useLocation();

  useEffect(() => {
    const canvas = document.getElementById("hero-3d-model");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x0fbaa3 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <main className="container mx-auto p-8" id="hero">
      <section className="flex flex-col md:flex-row items-center justify-between space-x-8">
        {/* Left Content */}
        <div className="max-w-lg ">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-4">Automated Parking</h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Modern equipment for the automation of parking spaces. Smart parking data collection and analysis.
          </p>
          {/* Conditional Button Rendering */}
          {location.pathname === "/dashboard" ? (
            <Link to="/booknow">
              <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                Book Now
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                Get Started
              </button>
            </Link>
          )}
          
        </div>
       
        {/* 3D Model Canvas */}
        <div className="w-full md:w-1/2 h-64 md:h-96 mt-6 bg-gray-300 rounded-lg shadow-lg">
          <canvas id="hero-3d-model" className="w-full h-full"></canvas>
        </div>
      </section>
      <DarkModeToggle />
    </main>
  );
};

export default HeroSection;
