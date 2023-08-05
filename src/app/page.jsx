import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/web hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          I am passionate about bringing your ideas to life through stunning
          designs.
        </p>
        <Button url="/portfolio" text="See our work" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  )
}
