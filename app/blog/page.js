import BlogIndex from '../../components/blog/blogIndex'
import { openGraphImage } from '../../config'
import { getSortedPostsData } from '../../lib/posts'

export const metadata = {
  title: 'A personal web development diary',
  description:
    'Some notes, articles and thoughts on web development, the internet and web programming.',
  keywords:
    'web development, web programming, javascript frameworks, backend development, frontend development, php, laravel, reactjs, next.js, gatsbyjs',
  openGraph: {
    ...openGraphImage,
    title: 'A personal web development diary',
    description:
      'Some notes, articles and thoughts on web development, the internet and web programming.'
  }
}

export default async function Blog() {
  const allPostsData = await getSortedPostsData()
  return <BlogIndex posts={allPostsData} />
}
