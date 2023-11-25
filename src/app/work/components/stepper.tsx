import { workList } from '@/util/work';

interface Props {
  slug: string;
}

export default function Stepper({ slug }: Props) {
  return (
    <div
      style={{ background: 'rgba(31, 31, 31, 0.7)' }}
      className="px-10 py-10 rounded h-full max-h-[57vh] overflow-y-scroll"
    >
      <ol className="relative text-gray-500 border-s  dark:border-gray-700 dark:text-gray-400">
        {workList[slug].map(({ title, work, technology, day }, index) => (
          <li className="mb-10 ms-6" key={index}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              {index + 1}
            </span>
            <h3 className="font-medium leading-tight">{title}</h3>
            <p className="text-sm">{day}</p>
            <p className="text-sm">{technology}</p>
            <div className="px-3 py-3 border">
              {work.map((data, index) => (
                <div key={`key_${index}`}>{data}</div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
