import Footer from '../footer/footer'
import Header from '../header/header'
import { containerWrap, main, section, wrapper } from './blogLayout.module.scss'

const BlogLayout = ({ children }) => {
  return (
    <div className={wrapper}>
      <Header dark />
      <main className={main}>
        <section className={section}>
          <div className={containerWrap}>{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default BlogLayout
