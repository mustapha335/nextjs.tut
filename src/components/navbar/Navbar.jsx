import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import { Comfortaa } from 'next/font/google'
import DarkMode from '../DarkMode/darkMode'
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
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <h1 className={Comfort.className}>Mustybabs</h1>
      </Link>
      <div className={styles.links}>
        <DarkMode />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>
          <h3 className={styles.text}>logout</h3>
        </button>
      </div>
    </div>
  )
}

export default Navbar
