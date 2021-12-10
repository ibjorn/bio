import Link from 'next/link'
import utilStyles from '../../styles/utils.module.scss'
import Date from '../date'
import styles from './blogIndex.module.scss'

export default function BlogIndex({ posts }) {
  return (
    <>
      <section className={`${styles.wrapper}`}>
        <h1 className={styles.mainHeading}>Blog</h1>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <h2>
                <Link href={`/blog/${id}/`}>
                  <a>{title}</a>
                </Link>
              </h2>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
