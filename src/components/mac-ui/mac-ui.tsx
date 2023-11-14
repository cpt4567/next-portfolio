'use client';

import styles from './styles.module.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function MacUi({ title, children }: Props) {
  /**
  @comment
     드래그 드롭 시점을 맞춰야함(잡은 시점시 해당요소의 위치를 조정하고)
     내려놓았을때 최종적으로 fransform 으로 위치반영 
  */

  const handleItemDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
    const target = event.target as HTMLDivElement;
    const id = target.id;
    event.dataTransfer.setData('text/plain', id);
  };

  return (
    <div
      className={styles['mac-ui-container']}
      id="draggable"
      draggable={true}
      onDragStart={handleItemDragStart}
    >
      <div className={styles['mac-ui-header']}>
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
