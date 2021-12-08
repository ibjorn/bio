import Footer from '../footer/footer'
import Header from '../header/header'
import { containerWrap, main, section, wrapper } from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={wrapper}>
      <Header />
      <main className={main}>
        <section className={section}>
          <div className={containerWrap}>{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
