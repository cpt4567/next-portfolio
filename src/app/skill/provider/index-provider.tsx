'use client';

import { useState } from 'react';
import { IndexContext } from '../context/index-context';

export function IndexProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  return <IndexContext.Provider value={[index, setIndex]}>{children}</IndexContext.Provider>;
}
