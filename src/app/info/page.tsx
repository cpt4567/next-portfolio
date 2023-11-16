import { infomation } from '@/util/info';
import ExcelUi from './_components/excel-ui';

export default function Page() {
  return (
    <div className="h-full">
      <ExcelUi />
      <div className="flex flex-row justify-center items-center bg-zinc-400 h-full ">
        <div className="flex flex-row w-10/12 bg-white h-full justify-between">
          <div className="border-b	border-r	 border-zinc-700  w-5 h-5 mt-3 ml-3 overflow-auto" />
          <table className={`border-collapse w-10/12 bg-white`}>
            <thead>
              <tr className="border">
                <th colSpan={3}>curriculum vitae(이력서)</th>
              </tr>
            </thead>
            <tbody id="table-body">
              <tr>
                <td rowSpan={3} className="border">
                  <img
                    className="rounded-lg mx-auto"
                    width={200}
                    height={200}
                    src="/img/info.jpeg"
                    alt=""
                  />
                </td>
                <td className="p-2 border info-table transition-all">
                  <span className="-translate-x-1/2">이름</span>
                </td>
                <td className="p-2 border comment-table relative">김민섭</td>
              </tr>
              <tr>
                <td className="p-2 border info-table transition-all">생년월일</td>
                <td className="p-2 border comment-table">1996.04.04</td>
              </tr>
              <tr>
                <td className="p-2 border info-table transition-all">전화</td>
                <td className="p-2 border comment-table">010-4920-4645</td>
              </tr>
              <tr>
                <td colSpan={3} className="p-2 border info-table transition-all">
                  학력사항
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="p-2 border comment-table">
                  강동대학교 컴퓨터 정보과 (졸업)
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="p-2 border info-table transition-all">
                  교육이수
                </td>
              </tr>

              <tr>
                <td colSpan={3} className="p-2 border comment-table">
                  sl 아카데미 정보처리 산업기사(과정평가형) java 웹개발 교육 과정 이수
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="p-2 border comment-table">
                  sl 아카데미 빅데이터 분석 양성 과정 이수
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border-b	border-l	 border-zinc-700  w-5 h-5 mt-3 mr-3" />
        </div>

        {/*   <ul className="m-3 p-3 animated-border">
          {Object.entries(infomation).map(([key, value]) => (
            <>
              <li className="font-bold" key={key}>
                {key.toUpperCase()}
              </li>
              {Array.isArray(value) ? (
                <ol>
                  {value.map((data, index) => (
                    <li key={`key_${index}`}>{data}</li>
                  ))}
                </ol>
              ) : (
                <li key={value}>{value}</li>
              )}
            </>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
