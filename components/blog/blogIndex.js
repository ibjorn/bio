import Link from 'next/link'
import Date from '../date'
import styles from './blogIndex.module.scss'

export default function BlogIndex({ posts }) {
  return (
    <>
      <section className={`${styles.wrapper}`}>
        <h1>Blog</h1>

        {posts.map(({ id, date, title, description }) => (
          <article key={id} className={styles.article}>
            <h2>
              <Link href={`/blog/${id}/`}>
                <a>{title}</a>
              </Link>
            </h2>
            <small>
              <Date dateString={date} />
            </small>
            <p dangerouslySetInnerHTML={{ __html: description + '...' }} />
          </article>
        ))}
      </section>
    </>
  )
}
