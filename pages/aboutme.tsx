import React, { useContext } from 'react';
import Header from '../components/Header'
import styles from '../styles/Aboutme.module.css'
import Footer from '../components/Footer'
import Title from '../components/Title'
import ThemeProvider from '../components/Theme';
import Unfinish from '../components/Unfinish';

function Aboutme({}) {
    return (
        <ThemeProvider>
        <div className={styles.container}>
            <Title />
            <Header />
            {/* <main className={styles.main}>
                <h1>This Site is Under Development</h1>
            </main> */}
            <Unfinish />
            <Footer />
        </div>
        </ThemeProvider>
    );
}
  
export default Aboutme;