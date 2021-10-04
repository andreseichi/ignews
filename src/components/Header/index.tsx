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
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
