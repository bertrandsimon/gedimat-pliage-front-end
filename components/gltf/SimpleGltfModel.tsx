'use client'
// components/SimpleGltfModel.tsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model: React.FC = () => {
  const { scene } = useGLTF('/gltf/test.gltf') as any;
  return <primitive object={scene} />;
};

const SimpleGltfModel: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default SimpleGltfModel;
