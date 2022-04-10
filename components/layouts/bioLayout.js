import Layout from './layout'
import { containerWrap, sectionWrap } from './layout.module.scss'

const BioLayout = ({ children }) => {
  return (
    <Layout>
      <section className={sectionWrap}>
        <div className={containerWrap}>{children}</div>
      </section>
    </Layout>
  )
}

export default BioLayout
