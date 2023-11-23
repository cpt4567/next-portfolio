'use client';

import React, { createContext } from 'react';

// context 생성
export const IndexContext = createContext<
  [number, React.Dispatch<React.SetStateAction<number>>] | undefined
>(undefined);
