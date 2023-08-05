'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import { Comfortaa } from 'next/font/google'

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
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/webpagelogo.png"
          width={260}
          height={340}
          className={styles.icon}
          alt="abdulmuiz-logo"
        />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
