export const tabList = [
  { title: '비즈위즈 시스템', indexSlug: 'bs', day: '2021.01.18~2022.12.31' },
  { title: '케이 바이러스', indexSlug: 'kv', day: '2023.4.18~2023.7.31' },
];

export const workList: {
  [key in string]: { title: string; day: string; technology: string; work: string[] }[];
} = {
  bs: [
    {
      title: '유니온 종합건설 오피스텔 홍보 사이트 ',
      day: '2021.01 ~ 2021.02',
      technology: 'react , jquery , soket io',
      work: [
        'soket io를 이용한 실시간 오픈 채팅 구현',
        'UI / UX  작업 및 데이터 시각화 및 유저 페이지',
        '관리자 페이지 게시판 구현',
        'EC2 AWS 서버 배포',
      ],
    },
    {
      title: '삼성엔지니어링 1,2 차 IAP 개발',
      day: '2021.02 ~ 2021.10',
      technology: 'React , redux , ApexCharts , ag grid , sheet js , java , spring boot ',
      work: [
        'UI / UX  작업 및 데이터 시각화 작업',
        '고객 요구사항에 맞춰 기능 추가 구현 및 유지보수, 수정',
        'sheet js을 활용 Excel 업로드 통한 데이터 자동연산 처리후 ag grid 출력',
        '데이터 마이닝 및 시각화',
      ],
    },
    {
      title: '삼성엔지니어링 1차 EAP 개발',
      day: '2021.10 ~ 2022.05',
      technology:
        'React , ApexCharts , spread js , Active Report js, ag grid , sheet js ,recoil , java ,spring boot ,spring jpa ',
      work: [
        'UI / UX  작업 및 데이터 시각화 작업',
        '고객 요구사항에 맞춰 기능 추가 구현 및 유지보수, 수정',
        'sheet js을 활용 Excel 업로드 통한 데이터 자동연산 처리후 ag grid 출력',
        '데이터 마이닝 및 시각화',
        'spread js , Active Report js를 이용한 excel 파일 생성 및 데이터 자동기입 출력',
      ],
    },
    {
      title: '삼성엔지니어링 PIAP 개발',
      day: '2021.10 ~ 2022.05',
      technology:
        'React , soket , ApexCharts , ag grid , sheet js ,recoil , java ,spring boot ,spring jpa ',
      work: [
        'UI / UX  작업 및 데이터 시각화 작업',
        '고객 요구사항에 맞춰 기능 추가 구현 및 유지보수, 수정',
        'sheet js을 활용 Excel 업로드 통한 데이터 자동연산 처리후 ag grid 출력',
        '데이터 마이닝 및 시각화',
        '삼성 인트라넷 접속후 해당 IP 접속시 각 직원들 정보에 따른 자동 로그인 처리',
      ],
    },
  ],
  kv: [
    {
      title: '견적주세요 (관리자 , 사용자 ,앱 , 유지보수 )',
      day: '2023.04 ~ 2023.07',
      technology: ' next js (13 ver) , react , react native , nest js ,recoil, react query',
      work: [
        '사용자 앱 , 웹 및 관리자 웹사이트 인수 인계 이후 추가 요구사항 수정 반영 (UI 개선 및 api 작업)',
        '이슈 사항 개선(데이터 안나오는 현상 및 시점 문제)',
      ],
    },
    {
      title: '바이블 25',
      day: '2023.05 ~ 2023.07',
      technology: 'next js (13 ver), react native , nest js ,redux toolkit, swr ',
      work: [
        '기존 스토어에 배포된 어플리케이션 react native로 리뉴얼 100%',
        'Code push 반영으로 코드 실시간 반영 가능',
        'firebase 반영(애널리틱스와 클라우드 메세징 반영)',
        '앱 ui 작업 (피그마 기준 작업 )',
        '스토어 테스트 배포',
      ],
    },
  ],
};
