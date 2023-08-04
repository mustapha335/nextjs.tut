import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'
import { Comfortaa } from 'next/font/google'

const getData = (cat) => {
  const data = items[cat]
  if (data) {
    return data
  }

  return notFound()
}
const comfortaa = Comfortaa({ subsets: ['latin'] })
const Category = ({ params }) => {
  const data = getData(params.category)

  return (
    <div className={styles.container}>
      <div className={styles.catTitle}>
        <h1 className={comfortaa.className}>{params.category}</h1>
      </div>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url={item.url} />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category
