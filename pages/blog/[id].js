import Date from '../../components/date'
import BlogLayout from '../../components/layouts/blogLayout'
import Meta from '../../components/meta'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.scss'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <BlogLayout>
      <Meta
        title={postData.title}
        description={postData.description}
        keywords={postData.keywords}
        slug={postData.slug}
        image={postData.image}
      />
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <small>
            <Date dateString={postData.date} />
          </small>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </BlogLayout>
  )
}
