import { skills } from '@/util/skill';
import Card from './_component/card';

export default function Page() {
  return (
    <div className=" w-full h-full overflow-auto">
      {Object.entries(skills).map(([key, value], index) => (
        <Card key={key} {...{ ...value, index }} />
      ))}
    </div>
  );
}
