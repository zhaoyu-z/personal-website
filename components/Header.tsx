import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {

  const iconRef = useRef<HTMLDivElement>(null);
  const [move, setMove] = useState(false);

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
      setMode(mode === "light" ? "dark" : "light");
      setMove(!move);
  };

  return (
      <header style={{ backgroundColor: mode === "light" ? "white" : "black" }} className={styles.header}>
          <div className={styles.section_one}>
            <div className={styles.logoContainer}>
              <Link href="/" >
                <a style={{ color: mode === "light" ? "black" : "white" }} >
                  Zhaoyu Zhang
                </a>
               </Link>
            </div>
          </div>

          <div className={styles.section_two}>
              <div className={styles.linkContainer}>
                <Link href="/" >
                  <a style={{ color: mode === "light" ? "black" : "white"}}>
                    Projects
                  </a>
                </Link>
                <Link href="/cooking/" >
                  <a style={{ color: mode === "light" ? "black" : "white" }}>
                    Cooking
                  </a>
                </Link>
                <Link href="/life/" >
                  <a style={{ color: mode === "light" ? "black" : "white" }}>
                    Life
                  </a>
                </Link> 
                <Link href="/aboutme/" >
                  <a style={{ color: mode === "light" ? "black" : "white" }}>
                    About Me
                  </a>
                </Link>
              </div>
              <button className={styles.modeToggler} onClick={toggleMode}>
                {/* <div ref={iconRef} className={`${styles.modeTogglerIcon} ${move ? "move" : ""}`} /> */}
                <div ref={iconRef} className={`${styles.modeTogglerIcon} `} />
              </button>
          </div>
      </header>
  )
}

export default Header