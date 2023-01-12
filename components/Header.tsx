import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import '../styles/Header.module.css'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
      setMode(mode === "light" ? "dark" : "light");
  };

  return (
      <header style={{ backgroundColor: mode === "light" ? "white" : "black" }} className={styles.header}>
          <div className={styles.section_one}>
            <div className={styles.logoContainer}>
              <a href="/" style={{ color: mode === "light" ? "black" : "white" }} >
                  Zhaoyu Zhang
                  {/* ##### #   #   #   #    #   ###  
                    #  #   #  # #  # #  #  # 
                    #   ##### ##### #  # # #  ## 
                  #    #   # #   # #   ## #   # 
                  ##### #   # #   # #    #   ### */}
              </a>
            </div>
          </div>

          <div className={styles.section_two}>
              <div className={styles.linkContainer}>
                <a href="/" style={{ color: mode === "light" ? "black" : "white" }}>Projects</a>
                <a href="/cooking/" style={{ color: mode === "light" ? "black" : "white" }}>Cooking</a>
                <a href="/life/" style={{ color: mode === "light" ? "black" : "white" }}>Life</a> 
                <a href="/aboutme/" style={{ color: mode === "light" ? "black" : "white" }}>About Me</a>
              </div>
              <button className={styles.modeToggler} onClick={toggleMode}>
                <div className={styles.modeTogglerIcon}>
                </div>
              </button>
          </div>
      </header>
  )
}

export default Header