export default function Button({ children }: layoutType) {
  return (
    <button className="bg-blue-500 h-11 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
}
