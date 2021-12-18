import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import styles from './mainLayout.module.scss'

const OffCanvasMenu = dynamic(() => import('./../offCanvas/offCanvasMenu'))

export default function MainLayout({ children }) {
  const { isOpen } = useContext(OffCanvasContext)

  const animVariants = {
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    pageExit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }
  return (
    <motion.div
      initial='pageInitial'
      animate='pageAnimate'
      exit='pageExit'
      variants={animVariants}
      className={`${styles.wrapper}`}
    >
      <OffCanvasMenu />
      <div className={`${styles.container} ${isOpen === styles.isOpen}`}>
        {children}
      </div>
    </motion.div>
  )
}
