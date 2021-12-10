import BlogPost from '../../components/blog/blogPost'
import BlogLayout from '../../components/layouts/blogLayout'
import Meta from '../../components/meta'
import { getAllPostIds, getPostData } from '../../lib/posts'

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
        title={postData?.title}
        description={postData?.description}
        keywords={postData?.keywords}
        slug={postData?.slug}
        image={postData?.image}
        blogPost
      />
      <BlogPost
        title={postData?.title}
        date={postData?.date}
        content={postData?.contentHtml}
      />
    </BlogLayout>
  )
}
