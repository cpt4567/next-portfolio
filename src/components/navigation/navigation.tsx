'use client';
import Link from 'next/link';
import styles from './styles.module.css';
/* import { HomeIcon } from '../@icon/homeIcon';
import { InfoIcon } from '../@icon/InfoIcon'; 
import { WorkIcon } from '../@icon/workIcon';
import { SkillIcon } from '../@icon/skillIcon';
*/
import { GitIcon } from '../@icon/gitIcon';
import { NotionIcon } from '../@icon/notionIcon';

export default function NavigationComponent() {
  const haldleWindowOpen = (url: string) => {
    window.open(url);
  };

  return (
    <div className={styles['nav-container']}>
      <div>
        <ul>
          <li>
            <span>home</span>
            <Link href={'/'}>
              <svg
                fill="#ffffff"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${styles.icon} bg-sky-600`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
          </li>
          <li>
            <span>info</span>
            <Link href={'/info'}>
              <svg
                viewBox="0 0 24 24"
                fill="#ffffff"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${styles.icon} bg-red-600	`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <span>skill</span>
            <Link href={'/skill'}>
              <svg
                fill="#ffffff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${styles.icon} bg-amber-300`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <span>work</span>
            <Link href={'/work/bs'}>
              <svg
                fill="#ffffff"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${styles.icon} bg-violet-700`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            </Link>
          </li>
          <li>
            <span>gitHub</span>
            <a onClick={() => haldleWindowOpen('https://github.com/cpt4567')}>
              <GitIcon />
            </a>
          </li>

          <li>
            <span>notion</span>
            <a
              onClick={() =>
                haldleWindowOpen('https://www.notion.so/KMS-Pro-ff56f51a890740a9a80b8f9755293965')
              }
            >
              <NotionIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
