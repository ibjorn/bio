import { AnimatePresence, motion } from 'framer-motion'
import MainLayout from '../components/layouts/mainLayout'
import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'

export default function App({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || (page => page)
  const useLayout = getLayout(<Component {...pageProps} />)

  return (
    <OffCanvasProvider>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          exit='pageExit'
          variants={{
            pageInitial: {
              x: '100%',
              opacity: 0
            },
            pageAnimate: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.1
              }
            },
            pageExit: {
              x: 0,
              opacity: 0,
              transition: {
                duration: 0.4,
                delay: 0.1
              }
            }
          }}
        >
          <MainLayout>{useLayout}</MainLayout>
        </motion.div>
      </AnimatePresence>
    </OffCanvasProvider>
  )
}
