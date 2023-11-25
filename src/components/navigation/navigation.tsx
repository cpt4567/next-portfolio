'use client';
import Link from 'next/link';
import styles from './styles.module.css';
/* import { HomeIcon } from '../@icon/homeIcon';
import { InfoIcon } from '../@icon/InfoIcon';
import { WorkIcon } from '../@icon/workIcon';
import { SkillIcon } from '../@icon/skillIcon'; */

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
              home
              {/*   <HomeIcon /> */}
            </Link>
          </li>
          <li>
            <span>info</span>
            <Link href={'/info'}>
              info
              {/*  <InfoIcon /> */}
            </Link>
          </li>
          <li>
            <span>skill</span>
            <Link href={'/skill'}>
              skill
              {/*               <SkillIcon /> */}
            </Link>
          </li>
          <li>
            <span>work</span>
            <Link href={'/work/bs'}>
              work
              {/*      <WorkIcon /> */}
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
