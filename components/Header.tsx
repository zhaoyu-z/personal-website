import React, { useState, useContext, useEffect } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../components/Theme';

interface Props {
  isActive: string;
}

function Header({ isActive }: Props) {

  const { mode, toggleMode } = useContext(ThemeContext);

  const theme = mode === "dark" ? styles.dark : "";
  
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = menuOpen ? styles.open : styles.closed;

  return (
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
            
            <div className={styles.buttonWrapper}>
              <Link href="#">
                <a className={styles.buttonContainer}>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </Link>
            </div>
            
            <div className={`${styles.linkContainer} ${theme}`}>
              <Link href="/">
                <a className={isActive === "projects" ? styles.active : ""}>
                  Projects
                </a>
              </Link>
              <Link href="/cv/">
                <a className={isActive === "cv" ? styles.active : ""}>
                  CV
                </a>
              </Link>
              <Link href="/reports/">
                <a className={isActive === "reports" ? styles.active : ""}>
                  Reports
                </a>
              </Link> 
              <Link href="/aboutme/">
                <a className={isActive === "aboutme" ? styles.active : ""}>
                  About
                </a>
              </Link>
            </div>

            {/* <button className={styles.modeToggler} title="Darkmode Toggler" onClick={toggleMode}>
              <div className={mode === "dark" ? styles.modeTogglerIcon : `${styles.modeTogglerIcon} ${styles.move}`}/>
            </button> */}
            <ReactSwitch
              checked={mode === "dark"}
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
              title="Toggle Dark/Light Mode"
            />
          </div>
      </header>
  )
}

export default Header