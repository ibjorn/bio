'use client'

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion
} from 'framer-motion'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import '../../styles/global.scss'

const OffCanvasMenu = dynamic(() => import('../offCanvas/offCanvasMenu'))

export default function MainLayoutWrap({ children }) {
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
        stiffness: 60
      }
    },
    pageExit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  }

  const pathname = usePathname()

  const isHomePage = pathname === '/'
  const isBlogPage = pathname.includes('/blog')
  const isNotFoundPage = pathname.includes('/404')

  return (
    <motion.main
      initial='pageInitial'
      animate='pageAnimate'
      exit='pageExit'
      variants={animVariants}
    >
      <div className='wrapper'>
        <OffCanvasMenu />
        <div className={`${isOpen === 'isOpen'}`}>
          <div
            className={`${'mainWrap'} ${
              isBlogPage || isNotFoundPage ? 'whiteBg' : ''
            }`}
          >
            <Header home={isHomePage} dark={isBlogPage || isNotFoundPage} />
            <LazyMotion features={domAnimation}>
              <AnimatePresence
                exitBeforeEnter
                initial={!isHomePage}
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                {children}
              </AnimatePresence>
            </LazyMotion>
            <Footer home={isHomePage} dark={isBlogPage || isNotFoundPage} />
          </div>
        </div>
      </div>
    </motion.main>
  )
}
