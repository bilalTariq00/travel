import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";

const FloatingShape = () => {
  const ref = useRef();

  // Animation for floating motion
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current.position.y = Math.sin(time) * 0.1; // Up-and-down motion
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* Custom 3D Shape */}
      <capsuleGeometry args={[0.6, 1, 16, 12]} /> {/* Capsule-like shape */}
      <meshStandardMaterial color="#bbb" metalness={1} roughness={0.3} />
    </mesh>
  );
};

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 93) clearInterval(interval);
        return Math.min(prev + 1, 93);
      });
    }, 50); // Increase progress every 50ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.2}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <FloatingShape />
        {/* Shadow */}
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.5}
          scale={2}
          blur={1.5}
          far={1}
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      {/* Progress Bar */}
      <div className="absolute flex flex-col items-center justify-center">
        <div className="relative w-24 h-24">
          <svg className="absolute top-0 left-0 w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="40"
              fill="none"
              stroke="#ccc"
              strokeWidth="4"
            />
            <circle
              cx="50%"
              cy="50%"
              r="40"
              fill="none"
              stroke="#000"
              strokeWidth="4"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * progress) / 100}
              style={{
                transition: "stroke-dashoffset 0.2s linear",
              }}
            />
          </svg>
          <div className="flex items-center justify-center text-lg font-bold absolute inset-0 text-white">
            {progress}%
          </div>
        </div>

        {/* Pulsating Dots */}
        <div className="flex space-x-2 mt-4">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
