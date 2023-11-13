'uselient';
import {
  HouseIcon,
  FaceIcon,
  CoPresentIcon,
  DescriptionIcon,
} from '@/components/navigation/@icon/index';
import { NavigationLayout } from '@/components/navigation/@layout/index';

import React from 'react';

export default function NavigationComponent() {
  /**
  @comment
     드래그 드롭 시점을 맞춰야함(잡은 시점시 해당요소의 위치를 조정하고)
     내려놓았을때 최종적으로 fransform 으로 위치반영 
  */

  const handleItemDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const id = target.id;
    event.dataTransfer.setData('text/plain', id);
  };

  return (
    <>
      <NavigationLayout id="draggable-item" draggable={true} onDragStart={handleItemDragStart}>
        <HouseIcon />
        <FaceIcon />
        <CoPresentIcon />
        <DescriptionIcon />
      </NavigationLayout>
    </>
  );
}
