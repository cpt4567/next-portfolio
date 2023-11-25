export const skills: {
  [key in string]: {
    title: string;
    content: string;
    header: { 'bg-color': string; 'text-color': string; 'header-title': string };
    hash: string[];
  };
} = {
  js: {
    title: 'java script',
    header: { 'bg-color': 'bg-yellow-300', 'text-color': 'text-black', 'header-title': 'JS' },
    content: 'vanilla js 및 es6 + 문법을 숙지하고 typescript기반 프로젝트를 진행 했습니다.',
    hash: ['es5', 'es6', 'typescript'],
  },
  react: {
    title: 'react',
    header: { 'bg-color': 'bg-stone-600', 'text-color': 'text-sky-400', 'header-title': 'React' },
    content:
      'react를 활용한 웹개발 경험이 있으며 redux,recoil등과 같은 전역 상태관리 라이브러리 사용개발 경험이 있습니다. (webpack , vite 번들러) (snowpack 컴파일 개념) 번들링 사용에 관심이 있으며 css framework 사용(Material, tailwind )사용 경험이 있습니다.',
    hash: ['react', 'redux', 'recoil', 'webpack', 'babel', 'csr'],
  },
  rn: {
    title: 'react native',
    header: { 'bg-color': 'bg-stone-600	', 'text-color': 'text-sky-400', 'header-title': 'RN' },
    content:
      'react native을 사용하여 android와 ios 크로스플랫폼을 개발 기존에 스토어에 배포된 앱을 리뉴얼 개발한 경험이 있습니다. ',
    hash: ['android', 'ios', 'flipper', 'metro', 'sqlite', 'code push', 'nkrv'],
  },
  next: {
    title: 'next js',
    header: { 'bg-color': 'bg-black	', 'text-color': 'text-white', 'header-title': 'Next' },
    content:
      'next 13을 활용 웹개발 경험이 있으며 dynamic route(동적라우팅 정적라우팅)을 활용하고 crs과 ssg의 개념을 파악하고 있습니다. ',
    hash: ['dynamic routes', 'tailwind', 'ssr', 'ssg'],
  },
};
