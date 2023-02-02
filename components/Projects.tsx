import React, { useContext } from 'react'
import styles from '../styles/Projects.module.css'
import { ThemeContext } from './Header'

function Projects() {
  const { mode } = useContext(ThemeContext)
  return (
    // <main className={styles.main}>
    <main className={`${styles.main} ${mode === 'dark' ? styles.dark : styles.light}`}>
        <div className={styles.contentContainer}>
            <p className={styles.description}>
              What Obsessed Me <br/>
              Shapes My Future.
            </p>
        </div>
    </main>
  )
}

export default Projects