import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import ReactSwitch from 'react-switch'

export const ThemeContext = React.createContext({
  mode: false,
  toggleMode: () => {}
})

function Header() {

  const [mode, setMode] = useState(false)

  const toggleMode = () => {
    setMode(!mode)
  }

  const theme = !mode ? "" : styles.dark;

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
              {/* hex color black: #0a0a0a */}
              {/* hex color white: #f5f5f5 */}
              {/* <button className={styles.modeToggler} title="Darkmode Toggler" onClick={toggleMode}> */}
                {/* <div className={!mode ? styles.modeTogglerIcon : `${styles.modeTogglerIcon} ${styles.move}`}/> */}
              {/* </button> */}
              <ReactSwitch
                checked={mode}
                onChange={toggleMode}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className={styles.switch}
            />
          </div>
      </header>
    </ThemeContext.Provider>
  )
}

export default Header