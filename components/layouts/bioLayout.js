import { containerWrap, section } from './bioLayout.module.scss'
import Layout from './layout'

const BioLayout = ({ children }) => {
  return (
    <Layout>
      <section className={section}>
        <div className={containerWrap}>{children}</div>
      </section>
    </Layout>
  )
}

export default BioLayout
