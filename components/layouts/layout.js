import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import Footer from '../footer/footer'
import Header from '../header/header'
import Meta from '../meta'
import OffCanvasMenu from './../offCanvas/offCanvasMenu'
import styles from './layout.module.scss'
export default function Layout({ children, home }) {
  const { isOpen } = useContext(OffCanvasContext)
  return (
    <div className={`${styles.wrapper} ${isOpen && styles.showNav}`}>
      <Meta />
      <OffCanvasMenu />
      <Header home={home} />
      <main className={styles.main}>{children}</main>
      <Footer home={home} />
    </div>
  )
}
