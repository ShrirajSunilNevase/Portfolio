'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function DataSphereScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;
  });

  const nodes = Array.from({ length: 12 }, (_, index) => {
    const angle = (index / 12) * Math.PI * 2;
    return {
      x: Math.cos(angle) * 1.35,
      y: Math.sin(angle * 2) * 0.35,
      z: Math.sin(angle) * 1.35,
    };
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.05, 24, 24]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {nodes.map((node, index) => (
        <mesh key={index} position={[node.x, node.y, node.z]}>
          <sphereGeometry args={[0.045, 10, 10]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
      ))}
    </group>
  );
}

export default function DataSphere() {
  return (
    <div
      className="h-[250px] w-full sm:h-[320px]"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <DataSphereScene />
      </Canvas>
    </div>
  );
}
