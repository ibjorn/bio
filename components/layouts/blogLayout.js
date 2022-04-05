import { containerWrap, section } from './blogLayout.module.scss'
import Layout from './layout'

const BlogLayout = ({ children }) => {
  return (
    <Layout>
      <section className={section}>
        <div className={containerWrap}>{children}</div>
      </section>
    </Layout>
  )
}

export default BlogLayout
