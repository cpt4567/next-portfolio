import Button from '@/components/button/button';
import { skills } from '@/util/skill';
import Link from 'next/link';

interface Props {
  params: { slug: string };
  searchParams: {};
}
export default function Page({ params }: Props) {
  const { slug } = params;

  return (
    <div className="flex flex-col justify-around h-full">
      <div className=" section" style={{ height: '80%' }}>
        {/*       <img
        className="w-full"
        src="https://v1.tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      /> */}

        <div className="font-bold text-xl mb-2">{skills[slug].title}</div>
        <p className="text-gray-700 text-base">{skills[slug].content}</p>
      </div>

      <div className="flex flex-row justify-around ">
        <Link href={'/skill/js'}>
          <Button># java script</Button>
        </Link>
        <Link href={'/skill/ts'}>
          <Button># type script</Button>
        </Link>
        <Link href={'/skill/react'}>
          <Button># React</Button>
        </Link>
        <Link href={'/skill/rn'}>
          <Button># React Naitve</Button>
        </Link>
        <Link href={'/skill/next'}>
          <Button># Next js</Button>
        </Link>
      </div>
    </div>
  );
}
