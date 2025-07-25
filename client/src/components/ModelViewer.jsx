import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const PerfumeModel = () => {
  const glb = useGLTF('/models/product2.glb');
  return <primitive object={glb.scene} scale={1.2} position={[0, -1.5, 0]} />;
};

const ModelViewer = () => {
  return (
    <div className="model-canvas">
      <Canvas camera={{ position: [0, 1, 4] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <PerfumeModel />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default ModelViewer;