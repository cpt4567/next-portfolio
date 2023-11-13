import React, { useRef } from 'react';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useStore } from '@/app/hook/useStore';
import { easing } from 'maath';
export default function Selector({ children }: any) {
  const ref = useRef<any>();
  const store = useStore();
  useFrame(({ viewport, camera, pointer }, delta) => {
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3]);
    easing.damp3(
      ref.current.position,
      [(pointer.x * width) / 2, (pointer.y * height) / 2, 3],
      store.open ? 0 : 0.1,
      delta
    );
    easing.damp3(ref.current.scale, store.open ? 4 : 0.01, store.open ? 0.5 : 0.2, delta);
    easing.dampC(ref.current.material.color, store.open ? '#f0f0f0' : '#ccc', 0.1, delta);
  });
  return (
    <>
      <mesh ref={ref}>
        <circleGeometry args={[1, 120, 5]} />
        <MeshTransmissionMaterial
          samples={1}
          resolution={2000}
          toneMapped={true}
          distortionScale={0}
          temporalDistortion={0}
        />
      </mesh>
      <group
        onPointerOver={() => (store.open = true)}
        onPointerOut={() => (store.open = false)}
        onPointerDown={() => (store.open = true)}
        onPointerUp={() => (store.open = false)}
      >
        {children}
      </group>
    </>
  );
}
