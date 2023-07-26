import React, { Suspense,useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,Html
} from "@react-three/drei";

import CanvasLoader from "../Loader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={10.75} rotationIntensity={0.3} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.1}
          map={decal}
          flatShading
          
        />
      </mesh>
      </Float>
    
  );
};

const BallCanvas = ({ icon }) => {

  const [autoRotateSpeed, setAutoRotateSpeed] = useState(5); // Initial positive speed

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle the sign of autoRotateSpeed every 5 seconds
      setAutoRotateSpeed((prevSpeed) => -prevSpeed);
    }, 1000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

 
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate autoRotateSpeed={autoRotateSpeed} enableZoom={false} />
        
        <Ball imgUrl={icon} />
        
        
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;