'use client';

import React from 'react';
import useIndex from '../hook/useIndex';

interface Props {
  title: string;
  content: string;
  index: number;
}

// Consumer ui

const ContextCard = ({ title, content, index }: Props) => {
  const [number] = useIndex();

  return (
    <div
      className=" rounded shadow-lg"
      style={{
        maxWidth: '1000px',
        margin: 'auto',
        ...(index === number ? { display: 'block' } : { display: 'none' }),
      }}
    >
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
      </div>
    </div>
  );
};

export const Paginaiton = () => {
  const [_, setCount] = useIndex();

  return (
    <div style={{ textAlign: 'center' }}>
      <span className="dot" onClick={() => setCount(0)} />
      <span className="dot" onClick={() => setCount(1)} />
      <span className="dot" onClick={() => setCount(2)} />
      <span className="dot" onClick={() => setCount(3)} />
    </div>
  );
};

export default ContextCard;
