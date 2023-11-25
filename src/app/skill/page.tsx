import { skills } from '@/util/skill';
import ContextCard, { Paginaiton } from './components/context-slider';
import { IndexProvider } from './provider/index-provider';

export default function Page() {
  const skillObject = Object.entries(skills);
  return (
    <div className=" w-full h-full">
      <IndexProvider>
        {skillObject.map(([key, value], index) => (
          <ContextCard key={key} {...{ ...value, index }} />
        ))}
        <Paginaiton count={skillObject.length} />
      </IndexProvider>
    </div>
  );
}
