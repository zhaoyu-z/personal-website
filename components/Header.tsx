import React, { useState, useContext, useEffect } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../components/Theme';
import { usePage } from "./Page";

function Header() {

  const { mode, toggleMode } = useContext(ThemeContext);

  const theme = !mode ? "" : styles.dark;

  // const {currentPage, setCurrentPage} = usePage();

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
              <div className={`${styles.linkContainer} ${theme}`}>
                <Link href="/">  
                  <a>
                    Projects
                  </a>
                </Link>
                <Link href="/cooking/">
                  <a>
                    Cooking
                  </a>
                </Link>
                <Link href="/life/">
                  <a>
                    Life
                  </a>
                </Link> 
                <Link href="/aboutme/">
                  <a>
                    About Me
                  </a>
                </Link>
              </div>

              {/* <div className={`${styles.linkContainer} ${theme}`}>
                <Link href="/" onClick={() => setCurrentPage("projects")}>  
                  <a className={currentPage === "projects" ? styles.active : ""}>
                    Projects
                  </a>
                </Link>
                <Link href="/cooking/" onClick={() => setCurrentPage("cooking")}>
                  <a className={currentPage === "cooking" ? styles.active : ""}>
                    Cooking
                  </a>
                </Link>
                <Link href="/life/" onClick={() => setCurrentPage("life")}>
                  <a className={currentPage === "life" ? styles.active : ""}>
                    Life
                  </a>
                </Link> 
                <Link href="/aboutme/" onClick={() => setCurrentPage("aboutme")}>
                  <a className={currentPage === "aboutme" ? styles.active : ""}>
                    About Me
                  </a>
                </Link>
              </div> */}

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
  )
}

export default Header