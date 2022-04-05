import { containerWrap, section } from './bioLayout.module.scss'

const BioLayout = ({ children }) => {
  return (
    // <div className={wrapper}>
    //   <main className={main}>
    <section className={section}>
      <div className={containerWrap}>{children}</div>
    </section>
    //   </main>
    // </div>
  )
}

export default BioLayout
