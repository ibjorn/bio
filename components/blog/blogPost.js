import Date from '../date'
import { article } from './blogPost.module.scss'

const BlogPost = ({ title, date, content }) => {
  return (
    <article className={article}>
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
