import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Title from '../components/Title'
import { useState } from 'react'

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <Title />
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Projects darkMode={darkMode} />
      <Footer />
    </div>
  )
}

export default Home
