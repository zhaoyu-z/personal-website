import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

export const ThemeContext = React.createContext({
  mode: 'light',
  toggleMode: () => {}
})

function Header() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const theme = mode === "light" ? "" : styles.dark;

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <header className={`${styles.header} ${theme}`}>
          <div className={styles.section_one}>
            <div className={`${styles.logoContainer} ${theme}`}>
              <Link href="/" >
                <a title="Back to Home">
                  Zhaoyu Zhang
                </a>
               </Link>
            </div>
          </div>

          <div className={styles.section_two}>
              <div className={`${styles.linkContainer} ${theme}`}>
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
              <button className={styles.modeToggler} title="Darkmode Toggler" onClick={toggleMode}>
                <div className={mode == "light" ? styles.modeTogglerIcon : `${styles.modeTogglerIcon} ${styles.move}`}/>
              </button>
          </div>
      </header>
    </ThemeContext.Provider>
  )
}

export default Header