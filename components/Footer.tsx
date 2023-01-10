import styles from '../styles/Footer.module.css'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
        <div className={styles.copyRight}>
          All Rights Reserved © Zhaoyu Zhang 2023
        </div>

        <div className={styles.contact}>
          Contacts:&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/zhaoyuzhang/" target="_blank" rel="noreferrer">
            <img className={styles.icon} src={'/icons/linkedin-circled.svg'} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/zhayu517/" target="_blank" rel="noreferrer">
            <img className={styles.icon} src={'/icons/instagram.svg'} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/zhaoyu.zhang.771" target="_blank" rel="noreferrer">
            <img className={styles.icon} src={'/icons/facebook.svg'} alt="Facebook" />
          </a>
          <a href="https://raw.githubusercontent.com/Zhayu517/Zhayu517/main/images/wechat-account.png" target="_blank" rel="noreferrer">
            <img className={styles.icon} src={'/icons/wechat.svg'} alt="Wechat" />
          </a>
          <a href="https://raw.githubusercontent.com/Zhayu517/Zhayu517/main/images/whatsapp-account.png" target="_blank" rel="noreferrer">
            <img className={styles.icon} src={'/icons/whatsapp.svg'} alt="Whatsapp" />
          </a>
          <a href="mailto:zhangzy517@gmail.com" target="_blank" rel="noreferrer">
            <img className={styles.icon} src={'/icons/gmail-logo.svg'} alt="Gmail" />
          </a>
        </div>
    </footer>
  )
}

export default Footer