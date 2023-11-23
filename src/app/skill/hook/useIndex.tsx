'use client';

import { useContext } from 'react';
import { IndexContext } from '../context/index-context';

export default function useIndex() {
  const context = useContext(IndexContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}
