import React, { useEffect, useRef } from 'react';

import { Canvas } from '@react-three/fiber';
import Model from './model';
import { OrbitControls } from '@react-three/drei';
import { useStore } from '@/app/hook/useStore';

const ThreeJS = () => {
  const control = useRef<any>(null);

  const state = useStore();

  useEffect(() => {
    if (control.current)
      if (state.open) {
        control.current.autoRotate = true;
        control.current.minAzimuthAngle = -Math.PI / 6;
        control.current.maxAzimuthAngle = Math.PI / 6;
      } else {
        control.current.autoRotate = false;
      }
  }, [state]);

  return (
    <>
      <Canvas className="canvas">
        <OrbitControls ref={control} enableZoom={false} />
        <ambientLight intensity={3} />
        <directionalLight intensity={2} />
        <Model />
      </Canvas>
    </>
  );
};

export default ThreeJS;
