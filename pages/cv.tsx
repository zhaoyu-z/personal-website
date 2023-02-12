import Header from '../components/Header'
import styles from '../styles/CV.module.css'
import Footer from '../components/Footer'
import Title from '../components/Title'
import ThemeProvider from '../components/Theme'
import Unfinish from '../components/Unfinish'

import React, { useContext } from 'react';
import { ThemeContext } from '../components/Theme';

function CV({}) {
    const { mode } = useContext(ThemeContext)

    const theme = mode === "dark" ? styles.dark : "";
    return (
        <ThemeProvider>
        <div className={styles.container}>
            <Title />
            <Header />
            <Unfinish />
            <Footer />
        </div>
        </ ThemeProvider>
    );
}

export default CV;