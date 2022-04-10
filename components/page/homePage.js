import styles from '../layouts/layout.module.scss'

const HomePage = () => {
  return (
    <article className={styles.home}>
      <h2>Web Developer Playground</h2>
      <p>
        Messing about with JavaScript and PHP frameworks, both frontend and
        backend.
      </p>
      <h3>Current Playing with:</h3>
      <p>Next.js, Laravel &amp; Headless WordPress</p>
    </article>
  )
}

export default HomePage
