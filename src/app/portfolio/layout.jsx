import React from 'react'
import styles from './page.module.css'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ weight: '700', subsets: ['latin'] })

const layout = ({ children }) => {
  return (
    <div>
      <div className={styles.mainTitle}>
        <h1 className={comfortaa.className}>My Works</h1>
      </div>
      {children}
    </div>
  )
}

export default layout
