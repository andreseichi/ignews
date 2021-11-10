import Link from 'next/link';
import Image from 'next/image';

import { SignInButton } from '../SignInButton';

import logoSvg from '../../../public/images/logo.svg';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoSvg} alt="ig.news logo" />
        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts" prefetch>
            <a>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
