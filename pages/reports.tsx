import Header from '../components/Header'
import styles from '../styles/Papers.module.css'
import Footer from '../components/Footer'
import Title from '../components/Title'
import ThemeProvider from '../components/Theme'
import Unfinish from '../components/Unfinish'
import Papers from '../components/Papers'

function Reports({}) {
    return (
        <ThemeProvider>
        <div className={styles.container}>
            <Title />
            <Header isActive='reports'/>
            {/* <Unfinish /> */}
            <Papers />
            <Footer />
        </div>
        </ThemeProvider>
    );
}
  
export default Reports;