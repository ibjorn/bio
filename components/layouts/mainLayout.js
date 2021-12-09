import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import styles from './mainLayout.module.scss'

const OffCanvasMenu = dynamic(() => import('./../offCanvas/offCanvasMenu'))

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
