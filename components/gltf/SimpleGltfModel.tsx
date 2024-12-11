'use client'
// components/SimpleGltfModel.tsx
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Model: React.FC = () => {
  const { scene } = useGLTF(
    // '/gltf/maison-quentin.gltf'
    '/gltf/new/couvertine-a-coller-test25112-v5.gltf'
  ) as any
  scene.position.set(0, 0, 0) // Center the model in the scene
  scene.rotation.set(6, 0, 20) // You can adjust rotation as needed
  scene.scale.set(10, 20, 10) // This scales the model by a factor of 5 on all axes

  // camera.position.set(0, 0, 5)
  return <primitive object={scene} />
}

const SimpleGltfModel: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[30, 30, 30]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default SimpleGltfModel
