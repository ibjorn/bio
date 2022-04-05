import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import styles from './layout.module.scss'

const OffCanvasMenu = dynamic(() => import('../offCanvas/offCanvasMenu'))

export default function Layout({ children, isBlogPage }) {
  const { isOpen } = useContext(OffCanvasContext)

  const animVariants = {
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1,
      transition: {
        duration: 0.7,
        type: 'spring',
        stiffness: 10
      }
    },
    pageExit: {
      opacity: 0,
      transition: {
        duration: 0.7,
        // delay: 0.1,
        type: 'spring',
        stiffness: 100
      }
    }
  }
  return (
    <motion.main
      initial='pageInitial'
      animate='pageAnimate'
      exit='pageExit'
      variants={animVariants}
      className={`${styles.wrapper} ${
        isBlogPage ? styles.blog : styles.regularBg
      }`}
    >
      <OffCanvasMenu />
      <div className={`${styles.container} ${isOpen === styles.isOpen}`}>
        {children}
      </div>
    </motion.main>
  )
}
