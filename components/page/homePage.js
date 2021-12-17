import styles from './homePage.module.scss'

const HomePage = ({ children }) => {
  return <article className={styles.home}>{children}</article>
}

export default HomePage
