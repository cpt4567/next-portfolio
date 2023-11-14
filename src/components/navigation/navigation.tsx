import Link from 'next/link';
import { GitIcon, HomeIcon, InfoIcon, NotionIcon, SkillIcon, WorkIcon } from '../@icon';
import styles from './styles.module.css';

export default function NavigationComponent() {
  return (
    <div className={styles['nav-container']}>
      <div>
        <ul>
          <li>
            <span>home</span>
            <Link href={'/'}>
              <HomeIcon />
            </Link>
          </li>
          <li>
            <span>info</span>
            <Link href={'/info'}>
              <InfoIcon />
            </Link>
          </li>
          <li>
            <span>skill</span>
            <Link href={'/'}>
              <SkillIcon />
            </Link>
          </li>
          <li>
            <span>work</span>
            <Link href={'/'}>
              <WorkIcon />
            </Link>
          </li>
          <li>
            <span>gitHub</span>
            <Link href={'/'}>
              <GitIcon />
            </Link>
          </li>

          <li>
            <span>notion</span>
            <Link href={'/'}>
              <NotionIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
