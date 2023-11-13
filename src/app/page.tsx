import NavigationComponent from '@/components/navigation/navigation';
import MainComponent from './main/main';
import { Suspense } from 'react';

export default function Home() {
  /**
  @comment
    1. navigation bar를 이동시키기 위해서는 전체 필드를 정의 해주어야함
    2. dom이 이동시 랜더링(즉 상태값 변화)가 이루어 지지 않아야 하므로 개체 
    자체에 접근
    3. 이동한 요소는 마우스 가운데 기준으로 정렬되어야함 ( / 2 ) 
  @url https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
  **/

  const hadleFiedDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const hadleFiedDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const data = event.dataTransfer.getData('text/plain');

    const draggableItem = document.getElementById(data);

    if (draggableItem) {
      const rect = draggableItem.getBoundingClientRect();
      draggableItem.style.left = `${event.clientX - rect.width / 2}px`;
      draggableItem.style.top = `${event.clientY - rect.height / 2}px`;
    }
  };
  return (
    <Suspense fallback={<div>loading...</div>}>
      <MainComponent />
    </Suspense>
  );
}
