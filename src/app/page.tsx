import dynamic from 'next/dynamic';
import MainComponent from './main/main';
const DynamicHeader = dynamic(() => import('./main/main'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return <MainComponent />;
}
