import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  const [darkMode, setDarkMode] = useState(true);
  const backGroundwhiteBlack = {backgroundColor: darkMode ? "white" : "black"};
  const colorblackWhite = {
    color: darkMode ? "black" : "white",
    backgroundColor: darkMode ? "white" : "black",
  };
  const linkContainer = darkMode ? styles.linkContainer : styles.linkContainerDark;
  const toggleMode = () => {
      setDarkMode(!darkMode);
      // var element = document.body;
      // element.classList.toggle("dark-mode");
  };

  return (
    /* <body> */
      <header style={backGroundwhiteBlack} className={styles.header}>
      {/* <header className={styles.header}> */}
          <div className={styles.section_one}>
            <div className={styles.logoContainer}>
              <Link href="/" >
                <a style={colorblackWhite} >
                {/* <a> */}
                  Zhaoyu Zhang
                </a>
               </Link>
            </div>
          </div>

          <div className={styles.section_two}>
              <div className={linkContainer}>
                <Link href="/" >
                  <a style={colorblackWhite}>
                  {/* <a> */}
                    Projects
                  </a>
                </Link>
                <Link href="/cooking/" >
                  <a style={colorblackWhite}>
                  {/* <a> */}
                    Cooking
                  </a>
                </Link>
                <Link href="/life/" >
                  <a style={colorblackWhite}>
                  {/* <a> */}
                    Life
                  </a>
                </Link> 
                <Link href="/aboutme/" >
                  <a style={colorblackWhite}>
                  {/* <a> */}
                    About Me
                  </a>
                </Link>
              </div>
              <button className={styles.modeToggler} onClick={toggleMode}>
                <div className={`${styles.modeTogglerIcon} ${darkMode ? "" : "move"}`} />
                {/* <div className={`${styles.modeTogglerIcon}`} /> */}
              </button>
          </div>
      </header>
      // {/* </body> */}
  )
}

export default Header