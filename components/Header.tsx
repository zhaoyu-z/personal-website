import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  // const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
      // setDarkMode(!darkMode);
      var element = document.body;
      element.classList.toggle("dark-mode");
  };

  return (
      // <header style={{ backgroundColor: darkMode ? "white" : "black" }} className={styles.header}>
      <header className={styles.header}>
          <div className={styles.section_one}>
            <div className={styles.logoContainer}>
              <Link href="/" >
                {/* <a style={{ color: darkMode ? "black" : "white" }} > */}
                <a>
                  Zhaoyu Zhang
                </a>
               </Link>
            </div>
          </div>

          <div className={styles.section_two}>
              <div className={styles.linkContainer}>
                <Link href="/" >
                  {/* <a style={{ color: darkMode ? "black" : "white" }}> */}
                  <a>
                    Projects
                  </a>
                </Link>
                <Link href="/cooking/" >
                  {/* <a style={{ color: darkMode ? "black" : "white" }}> */}
                  <a>
                    Cooking
                  </a>
                </Link>
                <Link href="/life/" >
                  {/* <a style={{ color: darkMode ? "black" : "white" }}> */}
                  <a>
                    Life
                  </a>
                </Link> 
                <Link href="/aboutme/" >
                  {/* <a style={{ color: darkMode ? "black" : "white" }}> */}
                  <a>
                    About Me
                  </a>
                </Link>
              </div>
              <button className={styles.modeToggler} onClick={toggleMode}>
                {/* <div className={`${styles.modeTogglerIcon} ${darkMode ? "" : "move"}`} /> */}
                <div className={`${styles.modeTogglerIcon}`} />
              </button>
          </div>
      </header>
  )
}

export default Header