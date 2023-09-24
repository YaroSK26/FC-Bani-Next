import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Ball = () => {
  const ball = useGLTF("./ball/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={ball.scene}
        scale={0.15}
        position={[0, -0.05, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        
      />
    </mesh>
  );
};

const BallCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          target={[0, -0.05, -1.5]}
          enableDamping={true} // Pridanie tlmenia
          dampingFactor={0.015} // Nastavenie faktora tlmenia
        />
        <Ball />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
