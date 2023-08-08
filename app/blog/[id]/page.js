import BlogPost from '../../../components/blog/blogPost'
import { openGraphImage } from '../../../config'
import { getAllPostIds, getPostData } from '../../../lib/posts'

export async function generateStaticParams() {
  return getAllPostIds()
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id)

  return {
    title: postData?.title,
    description: postData?.description,
    keywords: postData?.keywords,
    openGraph: {
      ...openGraphImage,
      title: postData?.title,
      description: postData?.description
    }
  }
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id)
  return (
    <BlogPost
      title={postData?.title}
      date={postData?.date}
      content={postData?.contentHtml}
    />
  )
}
