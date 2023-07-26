import BlogIndex from '../../components/blog/blogIndex'
import BlogLayout from '../../components/layouts/blogLayout'
import Meta from '../../components/meta'
import { getSortedPostsData } from '../../lib/posts'

export default async function Blog() {
  // const { allPostsData } = props
  const allPostsData = await getSortedPostsData()
  return (
    <BlogLayout>
      <Meta
        title='A personal web development diary'
        description='Some notes, articles and thoughts on web development, the internet and web programming.'
        keywords='web development, web programming, javascript frameworks, backend development, frontend development, php, laravel, reactjs, next.js, gatsbyjs'
        slug='blog'
        indexPage
      />
      <BlogIndex posts={allPostsData} />
    </BlogLayout>
  )
}

// export async function getStaticProps() {
//   const allPostsData = await getSortedPostsData()

//   return {
//     props: {
//       allPostsData
//     },
//     revalidate: 30
//   }
// }
