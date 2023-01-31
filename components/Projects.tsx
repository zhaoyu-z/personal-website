import styles from '../styles/Projects.module.css'
// import Link from 'next/link'

// interface IProps {
//   darkMode: boolean
// }

// function Projects({darkMode}: IProps) {
function Projects() {
  return (
    <main className={styles.main}>
        <div className={styles.contentContainer}>
            <p className={styles.description}>
              What Obsessed Me <br/>
              Shapes My Future.
            </p>
        </div>
    </main>
  )
}

export default Projects