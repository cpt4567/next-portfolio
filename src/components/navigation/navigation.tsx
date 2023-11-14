import Link from 'next/link';
import { HomeIcon } from '../@icon';
import styles from './styles.module.css';

export default function NavigationComponent() {
  return (
    <div className={styles['nav-container']}>
      <div id="dock">
        <ul>
          <li>
            <span>Address Book</span>
            <Link href={'/'}>
              <HomeIcon />
            </Link>
          </li>
          <li>
            <span>App Store</span>
            <Link href={'/info'}>
              <HomeIcon />
            </Link>
          </li>
          <li>
            <span>Chrome</span>
            <Link href={'/'}>
              <HomeIcon />
            </Link>
          </li>
          <li>
            <span>Firefox</span>
            <Link href={'/'}>
              <HomeIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
