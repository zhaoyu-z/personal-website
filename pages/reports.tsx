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
        <Title />
        <div className={styles.componentWrapper}>
            <Header isActive='reports'/>
            {/* <Unfinish /> */}
            <Papers />
            <Footer />
        </div>
        </ThemeProvider>
    );
}
  
export default Reports;