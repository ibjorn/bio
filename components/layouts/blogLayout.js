import { containerWrap, section } from './blogLayout.module.scss'

const BlogLayout = ({ children }) => {
  return (
    // <div className={wrapper}>
    //   <Header dark />
    //   <main className={main}>
    <section className={section}>
      <div className={containerWrap}>{children}</div>
    </section>
    //   </main>
    //   <Footer dark />
    // </div>
  )
}

export default BlogLayout
