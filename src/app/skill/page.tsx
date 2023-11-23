import { skills } from '@/util/skill';
import ContextCard, { Paginaiton } from './components/context-slider';
import { IndexProvider } from './provider/index-provider';

export default function Page() {
  return (
    <div className=" w-full h-full">
      <IndexProvider>
        {Object.entries(skills).map(([key, value], index) => (
          <ContextCard key={key} {...{ ...value, index }} />
        ))}
        <Paginaiton />
      </IndexProvider>
    </div>
  );
}
