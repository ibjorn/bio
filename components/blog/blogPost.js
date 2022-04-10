import Date from '../date'
import { blogPost } from '../layouts/layout.module.scss'

const BlogPost = ({ title, date, content }) => {
  return (
    <article className={blogPost}>
      <h1>{title}</h1>
      <div>
        <small>
          <Date dateString={date} />
        </small>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default BlogPost
