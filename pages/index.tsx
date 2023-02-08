import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Title from '../components/Title'
import ThemeProvider from '../components/Theme';
import {PageProvider} from "../components/Page";
import React from 'react'

const Home: NextPage = () => {
  return (
    <ThemeProvider>
    <div className={styles.container}>
        <Title />
        {/* <Header /> */}
        <PageProvider>
          <Header />
        </PageProvider>
        <Projects />
        <Footer />
    </div>
    </ThemeProvider>
  )
}

export default Home
