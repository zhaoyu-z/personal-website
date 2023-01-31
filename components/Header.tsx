import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

// interface IProps {
//   darkMode: boolean,
//   setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
// }

// function Header({darkMode, setDarkMode}: IProps) {
function Header() {
  // const header = darkMode ? styles.header : styles.headerDark;
  // const logoContainer = darkMode ? styles.logoContainer : styles.logoContainerDark;
  // const linkContainer = darkMode ? styles.linkContainer : styles.linkContainerDark;
  // const toggleMode = () => {
  //     setDarkMode(!darkMode);
  //     return;
  // };

  return (
      // <header className={header}>
      <header className={styles.header}>
          <div className={styles.section_one}>
            {/* <div className={logoContainer}> */}
            <div className={styles.logoContainer}>
              <Link href="/" >
                <a>
                  Zhaoyu Zhang
                </a>
               </Link>
            </div>
          </div>

          <div className={styles.section_two}>
              {/* <div className={linkContainer}> */}
              <div className={styles.linkContainer}>
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
              {/* <button className={styles.modeToggler} onClick={toggleMode}> */}
              <button className={styles.modeToggler}>
                {/* <div className={`${styles.modeTogglerIcon} ${darkMode ? "" : styles.move}`}/> */}
                <div className={styles.modeTogglerIcon}/>
              </button>
          </div>
      </header>
  )
}

export default Header