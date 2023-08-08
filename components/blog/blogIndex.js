import Link from 'next/link'
import Date from '../date'

export default function BlogIndex({ posts }) {
  return (
    <div className='blogIndexWrapper'>
      <h1>Blog</h1>

      {posts.map(({ id, date, title, description }) => (
        <article key={id} className='blogIntro'>
          <h2>
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
