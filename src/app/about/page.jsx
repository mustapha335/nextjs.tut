import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about1.jpg" alt="" fill={true} className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who am I?</h1>
          <p className={styles.desc}>
            Hey! I’m Abdulmuiz Mustapha, a creative. Since a kid I have loved
            art, sketching was my favourite hobby. My family were heavily
            education minded which meant in 2018 I came to the UK to study at
            University; unfortunately it was for a subject I had no passion for.
            I carried on through University but was miserable. I wasn’t doing
            well in my exams and started getting depressed. In 2021, I realised
            my life needed to change, I dropped out of University and I started
            studying Web Development. My life saw a huge turning point. I
            started to feel myself coming back through the creative processes of
            designing digital pieces and constructing websites and applications
            using multiple coding languages. I later studied Adobe Suite and
            took a graphic design course, where my passion for branding and
            digital art was truly unleashed. I pride myself in now letting my
            creative mind and soul free, manifesting and executing ideas in to
            reality.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What I Do?</h1>
          <p className={styles.desc}>
            I am passionate about bringing your ideas to life through stunning
            designs. Whether it's a logo, website, or branding package, I am
            committed to making your vision a reality. With just a brief and my
            trusty pen and sketchbook, I embark on a creative journey to craft
            engaging and beautiful designs that empower and inspire. Let's work
            together to turn your dreams into reality.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Logo and Branding
            <br />
            <br /> - Graphic Ads.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default Page
