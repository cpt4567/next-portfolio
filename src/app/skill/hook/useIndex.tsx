'use client';

import { useContext } from 'react';
import { IndexContext } from '../context/index-context';

export default function useIndex() {
  const context = useContext(IndexContext);
  if (context === undefined) {
    throw new Error('useIndex Error');
  }
  return context;
}
