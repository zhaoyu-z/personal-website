import React, { useContext } from 'react'
import styles from '../styles/Unfinish.module.css'
import { ThemeContext } from '../components/Theme';

function Unfinish() {
  const { mode } = useContext(ThemeContext)

  const theme = mode === "dark" ? styles.dark : "";
  return (
    <main className={`${styles.main} ${theme}`}>
        <p className={`${styles.description} ${theme}`}>
            This Page is Under Development
        </p>
    </main>
  )
}

export default Unfinish