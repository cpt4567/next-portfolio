import Link from 'next/link';
interface Props {
  params: { slug: string };
  searchParams: {};
}
export default function Page({ params }: Props) {
  const { slug } = params;

  return (
    <div className="flex flex-col h-full">
      <div className=" bg-white w-full px-2 py-2">
        <ul className="flex ">
          <li className="-mb-px mr-1">
            <Link
              href={'/work/bs'}
              className={`bg-white inline-block py-2 px-4 font-semibold ${
                slug === 'bs'
                  ? 'border-l border-t border-r text-blue-700'
                  : 'text-blue-500 hover:text-blue-800'
              }`}
            >
              비즈위즈 시스템
            </Link>
          </li>
          <li className="mr-1">
            <Link
              href={'/work/kv'}
              className={`bg-white inline-block py-2 px-4  font-semibold ${
                slug === 'kv'
                  ? 'border-l border-t border-r text-blue-700'
                  : 'text-blue-500 hover:text-blue-800'
              }`}
            >
              케이바이러스
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
