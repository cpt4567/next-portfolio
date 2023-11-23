'use client';

import React from 'react';
import useIndex from '../hook/useIndex';
import { Press_Start_2P } from 'next/font/google';
export interface Props {
  title: string;
  content: string;
  header: { 'bg-color': string; 'text-color': string; 'header-title': string };
  index: number;
}

const press = Press_Start_2P({ weight: '400', subsets: ['latin'] });

// Consumer ui
const ContextCard = ({ title, content, header, index }: Props) => {
  const [number] = useIndex();

  return (
    <div
      className=" rounded h-96 max-w-screen-md shadow-lg m-auto bg-white"
      style={{
        ...(index === number ? { display: 'block' } : { display: 'none' }),
      }}
    >
      <div
        className={`w-full h-16  text-center ${header['bg-color']} ${header['text-color']} rounded`}
      >
        <span className={`font-bold text-5xl leading-normal ${press.className}`}>
          {header['header-title']}
        </span>
      </div>

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

export const Paginaiton = ({ count }: { count: number }) => {
  const [number, setNumber] = useIndex();

  return (
    <div style={{ textAlign: 'center' }}>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={`key_${index}`}
          className={`dot ${index === number ? 'bg-stone-900' : 'bg-zinc-400'}`}
          onClick={() => setNumber(index)}
        />
      ))}
    </div>
  );
};

export default ContextCard;
