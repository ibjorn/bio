import { Link } from 'next/link'
import utilStyles from '../styles/utils.module.scss'
import Date from './date'

const Blog = () => {
  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>Hello world.</p>
        <p>Is this thing on?</p>
        <p>A simple NextJS blog with markdown posts.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Blog
