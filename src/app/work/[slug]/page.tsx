import Stepper from '../components/stepper';
import TabList from '../components/tab-list';
interface Props {
  params: { slug: string };
  searchParams: {};
}
export default function Page({ params }: Props) {
  const { slug } = params;

  return (
    <div className="flex flex-col h-full">
      <TabList {...{ slug }} />
      <Stepper />
    </div>
  );
}
