import React, { useContext } from 'react'
import styles from '../styles/Footer.module.css'
import { ThemeContext } from './Header'

type Props = {}

function Footer({}: Props) {
  const { mode } = useContext(ThemeContext)
  const theme = mode ? styles.dark : "";
  return (
    <footer className={`${styles.footer} ${theme}`}>
      <div className={styles.copyRight}>
        All Rights Reserved © Zhaoyu Zhang 2023
      </div>

      <div className={styles.contactContainer}>
        <p>Connect with Me:</p>
        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <a href="https://www.linkedin.com/in/zhaoyuzhang/" target="_blank" rel="noreferrer" title="LinkedIn">
              <img className={styles.icon} src={'/icons/linkedin-normal.svg'} alt="LinkedIn" id="LinkedIn"/>
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="https://www.instagram.com/zhayu517/" target="_blank" rel="noreferrer" title="Instagram">
              <img className={styles.icon} src={'/icons/instagram-normal.svg'} alt="Instagram" id="Instagram"/>
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="https://www.facebook.com/zhaoyu.zhang.771" target="_blank" rel="noreferrer" title="Facebook">
              <img className={styles.icon} src={'/icons/facebook-normal.svg'} alt="Facebook" id="Facebook"/>
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="https://raw.githubusercontent.com/Zhayu517/Zhayu517/main/images/wechat-account.png" target="_blank" rel="noreferrer" title="Wechat">
              <img className={styles.icon} src={'/icons/wechat-normal.svg'} alt="Wechat" id="Wechat"/>
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="https://raw.githubusercontent.com/Zhayu517/Zhayu517/main/images/whatsapp-account.png" target="_blank" rel="noreferrer" title="Whatsapp">
              <img className={styles.icon} src={'/icons/whatsapp-normal.svg'} alt="Whatsapp" id="Whatsapp"/>
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="mailto:zhangzy517@gmail.com" target="_blank" rel="noreferrer" title="Gmail">
              <img className={styles.icon} src={'/icons/gmail-normal.svg'} alt="Gmail" id="Gmail"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer