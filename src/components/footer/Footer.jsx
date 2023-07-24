import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className= {styles.container}>
      <div >@mustybabs 2023. All rights reserved</div>
      <div className={styles.socials}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt='musty babs' />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt='musty babs' />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt='musty babs' />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt='musty babs' />
      </div>
    </div>
  )
}

export default Footer