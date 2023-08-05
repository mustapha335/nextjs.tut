'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import { Comfortaa } from 'next/font/google'
import DarkMode from '../DarkMode/darkMode'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
const Comfort = Comfortaa({ subsets: ['latin'], weight: '300' })

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  // {
  //   id: 3,
  //   title: 'Blog',
  //   url: '/blog',
  // },
  {
    id: 3,
    title: 'About',
    url: '/about',
  },
  {
    id: 4,
    title: 'Contact',
    url: '/contact',
  },
  // {
  //   id: 5,
  //   title: 'Dashboard',
  //   url: '/dashboard',
  // },
]

const Navbar = () => {
  const session = useSession()
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="webpagelogo.svg"
          width={250}
          height={250}
          className={styles.icon}
          alt="abdulmuiz-logo"
        />
      </Link>
      <div className={styles.links}>
        {/* <DarkMode /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {/* {session.status === 'authenticated' && (
          <button onClick={signOut} className={styles.logout}>
            <h3 className={styles.text}>logout</h3>
          </button>
        )} */}
      </div>
    </div>
  )
}

export default Navbar
