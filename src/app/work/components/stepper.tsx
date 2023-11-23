export default function Stepper() {
  return (
    <div
      style={{ background: 'rgba(31, 31, 31, 0.7)' }}
      className="px-10 py-10 rounded h-full max-h-[57vh] overflow-y-scroll"
    >
      <ol className="relative text-gray-500 border-s  dark:border-gray-700 dark:text-gray-400">
        {Array.from({ length: 30 }).map((_, index) => (
          <li className="mb-10 ms-6" key={index}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              1
            </span>
            <h3 className="font-medium leading-tight">유니온 종합건설 </h3>
            <span className="text-sm">내용</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
