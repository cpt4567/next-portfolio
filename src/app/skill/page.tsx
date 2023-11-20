import Button from '@/components/button/button';

export default function Page() {
  let index = 0;
  return (
    <div className="flex flex-col justify-around h-full">
      <div className=" section" style={{ height: '80%' }}>
        {/*       <img
          className="w-full"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        /> */}

        <div className="font-bold text-xl mb-2">React</div>
        <p className="text-gray-700 text-base">내용</p>
      </div>

      <div className="flex flex-row justify-around ">
        <Button># java script</Button>
        <Button># type script</Button>
        <Button># React</Button>
        <Button># React Naitve</Button>
        <Button># Next js</Button>
      </div>
    </div>
  );
}
