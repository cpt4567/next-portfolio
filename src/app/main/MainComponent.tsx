'use client';
import ThreeJS from '@/components/three';
import Overlay from '@/components/three/hrText';

export default function MainComponent() {
  return (
    <>
      <Overlay />
      <ThreeJS />
      <img src="/img/arrow.png" className="arrow" alt={'arrow'} />
    </>
  );
}
