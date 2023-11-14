'use client';

import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function MacUi({ title, children }: Props) {
  const tagRef = useRef<any>(null);

  useEffect(() => {
    /**
  @comment
     드래그 드롭 시점을 맞춰야함(잡은 시점시 해당요소의 위치를 조정하고)
     내려놓았을때 최종적으로 fransform 으로 위치반영
  @url 
    mouse event를 사용해야함
     https://ko.javascript.info/mouse-drag-and-drop#ref-1148
  */

    if (tagRef.current) {
      const parent: any = document.getElementById('draggable');

      const handleMouseMove = (event: any) => {
        const { pageX, pageY } = event;

        const rect = tagRef.current.getBoundingClientRect();

        const offsetX = `${pageX - rect.width / 2}px`;
        const offsetY = `${pageY - rect.height / 2}px`;

        parent.style.left = offsetX;
        parent.style.top = offsetY;
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      tagRef.current.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      });
    }
  }, []);

  return (
    <div className={styles['mac-ui-container']} id="draggable">
      <div className={styles['mac-ui-header']} ref={tagRef}>
        <div className={styles['mac-ui-cotrol']}>
          <div className={styles['mac-ui-btn']} style={{ background: '#f7d54a' }} />
          <div className={styles['mac-ui-btn']} style={{ background: '#62c462' }} />
          <div className={styles['mac-ui-btn']} style={{ background: '#ee5f5b' }} />
        </div>
        <span className={styles['mac-ui-title']}>{title}</span>
      </div>
      {children}
    </div>
  );
}
