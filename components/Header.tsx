import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

interface IProps {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({darkMode, setDarkMode}: IProps) {
  const header = darkMode ? styles.header : styles.headerDark;
  const logoContainer = darkMode ? styles.logoContainer : styles.logoContainerDark;
  const linkContainer = darkMode ? styles.linkContainer : styles.linkContainerDark;
  const toggleMode = () => {
      setDarkMode(!darkMode);
      return;
  };

  return (
      <header className={header}>
          <div className={styles.section_one}>
            <div className={logoContainer}>
              <Link href="/" >
                <a>
                  Zhaoyu Zhang
                </a>
               </Link>
            </div>
          </div>

          <div className={styles.section_two}>
              <div className={linkContainer}>
                <Link href="/" >
                  <a>
                    Projects
                  </a>
                </Link>
                <Link href="/cooking/" >
                  <a>
                    Cooking
                  </a>
                </Link>
                <Link href="/life/" >
                  <a>
                    Life
                  </a>
                </Link> 
                <Link href="/aboutme/" >
                  <a>
                    About Me
                  </a>
                </Link>
              </div>
              <button className={styles.modeToggler} onClick={toggleMode}>
                <div className={`${styles.modeTogglerIcon} ${darkMode ? "" : styles.move}`}/>
              </button>
          </div>
      </header>
  )
}

export default Header