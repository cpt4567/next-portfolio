'use client';

import { LeftIcon, RightIcon, HomeIcon, InfoIcon, SkillIcon, WorkIcon } from '../@icon';
import styles from './styles.module.css';

export default function NavigationComponent() {
  /**
  @comment
     드래그 드롭 시점을 맞춰야함(잡은 시점시 해당요소의 위치를 조정하고)
     내려놓았을때 최종적으로 fransform 으로 위치반영 
  */

  const handleItemDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const className = target.className;
    event.dataTransfer.setData('text/plain', className);
  };
  return (
    <>
      <div className={styles['draggable-container']} draggable={true} onDragStart={handleItemDragStart}>
        <RightIcon />
        <HomeIcon />
        <InfoIcon />
        <SkillIcon />
        <WorkIcon />
        <LeftIcon />
      </div>
    </>
  );
}
