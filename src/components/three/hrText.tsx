import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@/app/hook/useStore';
import { Lato, Anton } from 'next/font/google';

const lato = Lato({ weight: '900', subsets: ['latin'] });
const anton = Anton({ weight: '400', subsets: ['latin-ext'] });

const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.08 } },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { when: 'beforeChildren', staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0 },
};

interface Props {
  children: React.ReactNode;
  open: boolean;
}

function HrText({ children, open }: Props) {
  return (
    <motion.ul variants={container} initial="hidden" animate={open ? 'show' : 'hidden'}>
      {Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.ul>
  );
}

export default function Overlay() {
  const state = useStore();

  return (
    <>
      <div style={{ position: 'absolute', left: '20vw' }} className={'hightText'}>
        <HrText open={state.open}>
          <h1 className={lato.className}>{`I'm`}</h1>

          <h2 className={lato.className}>
            {`FontEnd`}
            <span className="accent">{'Developer'}</span>
          </h2>

          <h2 className={lato.className}>MinSub Kim</h2>
        </HrText>
      </div>

      <div
        style={{
          display: !state.open ? 'block' : 'none',
          position: 'absolute',
          left: '40vw',
          top: 10,
        }}
        className={'hightText'}
      >
        <HrText open={!state.open}>
          <h2 className={anton.className}>Please hover over the character</h2>
        </HrText>
      </div>
    </>
  );
}
