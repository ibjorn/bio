import utilStyles from '../../styles/utils.module.scss'
import Date from '../date'

const BlogPost = ({ title, date, content }) => {
  return (
    <article>
      <h1>{title}</h1>
      <div>
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default BlogPost
