import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Layout from '../layout/Layout';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const { route } = useRouter();

  return (
    <Layout as="header" className={styles.globalHeader}>
      <div className={styles.headerContainer}>
        <span className={styles.headerTitle}>Sunny Digital Agency</span>
        <nav className={styles.headerNavigation}>
          <ul>
            <li
              className={clsx(styles.navOption, {
                [styles.navOptionSel]: route === '/',
              })}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={clsx(styles.navOption, {
                [styles.navOptionSel]: route === '/about-us',
              })}
            >
              <Link href="/about-us">About Us</Link>
            </li>
            <li
              className={clsx(styles.navOption, {
                [styles.navOptionSel]: route === '/blog',
              })}
            >
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Image
        src="/images/logo.png"
        alt="Sunny Digital Agency Icon"
        width={90}
        height={90}
      />
    </Layout>
  );
};

export default NavBar;
