
export default function Page() {
  return (
    <div className="h-full flex flex-row justify-center items-center">
      <div className="w-1/2 flex flex-col items-center justify-between">
        <ul className={`section text-slate-300`}>
          <li>생년월일</li>
          <li>1996.04.04</li>
          <li>전화</li>
          <li>010-4920-4645</li>
          <li>학력사항</li>
          <li>강동대학교 컴퓨터 정보과 (졸업)</li>
          <li>교육이수</li>
          <li>sl 아카데미 정보처리 산업기사(과정평가형) java 웹개발 교육 과정 이수</li>
          <li>sl 아카데미 빅데이터 분석 양성 과정 이수</li>
        </ul>
      </div>
      <div className="w-1/2">
        <img className="rounded-lg mx-auto" width={400} src="/img/info.jpeg" alt="" />
      </div>
    </div>
  );
}
