import styles from './bioPage.module.scss'

const BioPage = ({ title, body }) => {
  return (
    <article className={styles.bio}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  )
}

export default BioPage
