import Footer from '../footer/footer'
import Header from '../header/header'
import { containerWrap, main, section, wrapper } from './bioLayout.module.scss'

const BioLayout = ({ children }) => {
  return (
    <div className={wrapper}>
      <Header shade />
      <main className={main}>
        <section className={section}>
          <div className={containerWrap}>{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default BioLayout