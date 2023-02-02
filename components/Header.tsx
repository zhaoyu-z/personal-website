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

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <header className={styles.header}>
          <div className={styles.section_one}>
            <div className={styles.logoContainer}>
              <Link href="/" >
                <a title="Back to Home">
                  Zhaoyu Zhang
                </a>
               </Link>
            </div>
          </div>

          <div className={styles.section_two}>
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
              <button className={styles.modeToggler} title="Darkmode Toggler" onClick={toggleMode}>
                <div className={styles.modeTogglerIcon}/>
              </button>
          </div>
      </header>
    </ThemeContext.Provider>
  )
}

export default Header