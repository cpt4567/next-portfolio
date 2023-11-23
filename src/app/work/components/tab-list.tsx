import { tabList } from '@/util/tab';
import Link from 'next/link';

interface Props {
  slug: string;
}

export default function TabList({ slug }: Props) {
  return (
    <div className=" bg-white w-full px-2 py-2">
      <ul className="flex">
        {tabList.map(({ title, indexSlug }, index) => (
          <li className={index === 0 ? '-mb-px mr-1' : 'mr-1'} key={indexSlug}>
            <Link
              href={`/work/${indexSlug}`}
              className={`bg-white inline-block py-2 px-4 font-semibold ${
                slug === indexSlug
                  ? 'border-l border-t border-r text-blue-700'
                  : 'text-blue-500 hover:text-blue-800'
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
