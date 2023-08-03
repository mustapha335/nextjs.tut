'use client'

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useState } from 'react'
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contct.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form
          action="https://formspree.io/f/xaygqanw"
          method="POST"
          className={styles.form}
        >
          <input
            type="text"
            placeholder="name"
            name="name"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            className={styles.input}
            required
          />
          <textarea
            className={styles.textArea}
            placeholder="Your Message"
            cols="30"
            rows="10"
            name="message"
            required
          ></textarea>
          <input className={styles.button} type="submit" value="send" />
          {/* <Button
            onclick="location.href='mailto:reezy77jay@gmail.com';"
            text="send"
          /> */}
        </form>
      </div>
    </div>
  )
}

export default Contact
