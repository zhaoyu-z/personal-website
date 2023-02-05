import React, { useContext } from 'react'
import styles from '../styles/Projects.module.css'
import { ThemeContext } from './Header'

function Projects() {
  const { mode } = useContext(ThemeContext)
  const theme = mode ? styles.dark : "";
  return (
    <main className={`${styles.main} ${theme}`}>
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