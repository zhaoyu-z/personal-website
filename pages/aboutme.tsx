import React, { useContext } from 'react';
import Header from '../components/Header'
import styles from '../styles/Aboutme.module.css'
import Footer from '../components/Footer'
import Title from '../components/Title'
// import { ThemeContext } from '../components/Theme';

function Aboutme({}) {
    // const { mode, toggleMode } = useContext(ThemeContext);
    // const theme = !mode ? "" : styles.dark;
    return (
        // <div className={`${styles.container} ${theme}`}>
        <div className={styles.container}>
            <Title />
            <Header />
            <main className={styles.main}>
                <h1>This Site is Under Development</h1>
            </main>
            <Footer />
        </div>
    );
  }
  
  export default Aboutme;