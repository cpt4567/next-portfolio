'use client';

import Loading from '@/components/loading/loading';
import ThreeJS from '@/components/three';
import Overlay from '@/components/three/hrText';
import { Suspense } from 'react';

export default function MainComponent() {
  return (
    <Suspense fallback={<Loading />}>
      <div style={{ height: '100vh' }}>
        <Overlay />
        <ThreeJS />
      </div>
    </Suspense>
  );
}
