import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import styles from './layout.module.scss'

const OffCanvasMenu = dynamic(() => import('../offCanvas/offCanvasMenu'))

export default function Layout({ children }) {
  const { isOpen } = useContext(OffCanvasContext)

  const animVariants = {
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1,
      transition: {
        duration: 0.7
        // type: 'spring',
      }
    },
    pageExit: {
      opacity: 0,
      transition: {
        duration: 0.1
        // delay: 0.1,
        // type: 'spring',
        // stiffness: 10
      }
    }
  }
  return (
    <motion.main
      // key={key}
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
    </motion.main>
  )
}
