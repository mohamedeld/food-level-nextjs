
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/images/logo.png';
import styles from "./main-header.module.css";
import { usePathname } from 'next/navigation';
import NavLink from '../nav-link/nav-link';
function MainHeader() {

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="food logo image" width={80} height={80} />
          Next level food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>

            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader