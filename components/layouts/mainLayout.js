import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import OffCanvasMenu from './../offCanvas/offCanvasMenu'
import styles from './mainLayout.module.scss'

export default function MainLayout({ children }) {
  const { isOpen } = useContext(OffCanvasContext)
  return (
    <>
      <div className={`${styles.wrapper} ${isOpen && styles.showNav}`}>
        <OffCanvasMenu />
        {children}
      </div>
    </>
  )
}
