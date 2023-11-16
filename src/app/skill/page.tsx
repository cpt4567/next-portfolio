export default function Page() {
  return (
    <div className="flex flex-row justify-between h-full" style={{ background: '#1E1E1E' }}>
      <div className="flex flex-col h-full" style={{ background: '#333333', width: '5%' }}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>

      <div className="flex flex-col h-full" style={{ background: '#fffff', width: '5%' }}>
        nextjs
      </div>
    </div>
  );
}
