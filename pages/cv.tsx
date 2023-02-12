import Header from '../components/Header'
import styles from '../styles/CV.module.css'
import Footer from '../components/Footer'
import Title from '../components/Title'
import { useCookies } from 'react-cookie';

function CV({}) {
    const [cookies, setCookie] = useCookies(['darkMode']);
    const initialMode = cookies['darkMode'] !== undefined ? cookies['darkMode'] : false;

    return (
        <div className={styles.container}>
            <Title />
            <Header />
            {/* <Header initialMode={initialMode} setCookie={setCookie}/> */}
            <main className={styles.main}>
                <h1>This Site is Under Development</h1>
            </main>
            <Footer />
        </div>
    );
  }
  
//   function getCookie(name : string) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts && parts.length === 2) return parts.pop().split(';').shift();
//   }

  export default CV;