import { AnimatePresence, motion } from 'framer-motion'
import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'

export default function App({ Component, pageProps, router }) {
  // return <Component {...pageProps} />
  const getLayout = Component.getLayout || (page => page)
  const useLayout = getLayout(<Component {...pageProps} />)

  return (
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
              duration: 1,
              delay: 0.2
            }
          },
          pageExit: {
            x: 0,
            backgroundColor: 'white',
            filter: `invert()`,
            opacity: 0,
            transition: {
              duration: 1,
              delay: 0.2
            }
          }
        }}
      >
        <OffCanvasProvider>{useLayout}</OffCanvasProvider>
      </motion.div>
    </AnimatePresence>
  )
}
