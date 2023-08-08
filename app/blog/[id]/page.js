import BlogPost from '../../../components/blog/blogPost'
import Meta from '../../../components/meta'
import { getAllPostIds, getPostData } from '../../../lib/posts'

export async function generateStaticParams() {
  return getAllPostIds()
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id)
  return (
    <>
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
    </>
  )
}
