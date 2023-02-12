import React, { useContext, useState, useEffect } from 'react'
import styles from '../styles/Projects.module.css'
import { ThemeContext } from '../components/Theme';

function Projects() {
  const { mode } = useContext(ThemeContext)

  const theme = mode === "dark" ? styles.dark : "";
  return (
    <main className={`${styles.main} ${theme}`}>
        <div className={styles.contentContainer}>
            <p className={`${styles.description} ${theme}`}>
              What Obsessed Me <br/>
              Shapes My Future.
            </p>
        </div>
    </main>
  )
}

export default Projects