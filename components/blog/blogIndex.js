import Link from 'next/link'
import { oswald } from '../../app/fonts'
import Date from '../date'
import { blogIndexWrapper, blogIntro } from '../layouts/layout.module.scss'

export default function BlogIndex({ posts }) {
  return (
    <div className={`${blogIndexWrapper}`}>
      <h1 className={oswald.className}>Blog</h1>

      {posts.map(({ id, date, title, description }) => (
        <article key={id} className={blogIntro}>
          <h2 className={oswald.className}>
            <Link href={`/blog/${id}/`}>{title}</Link>
          </h2>
          <small>
            <Date dateString={date} />
          </small>
          <p dangerouslySetInnerHTML={{ __html: description + '...' }} />
        </article>
      ))}
    </div>
  )
}
