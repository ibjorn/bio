import { AnimatePresence, motion } from 'framer-motion'
import Script from 'next/script'
import { useEffect } from 'react'
import MainLayout from '../components/layouts/mainLayout'
import { GTM_ID, pageview } from '../lib/gtm'
import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])
  // old code for UA
  // useEffect(() => {
  //   const handleRouteChange = url => {
  //     window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
  //       page_path: url
  //     })
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  const getLayout = Component.getLayout || (page => page)
  const useLayout = getLayout(<Component {...pageProps} />)

  return (
    <OffCanvasProvider>
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `
        }}
      />
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          exit='pageExit'
          variants={{
            pageInitial: {
              x: '100%',
              opacity: 0.3
            },
            pageAnimate: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.1
              }
            },
            pageExit: {
              x: 0,
              opacity: 0,
              transition: {
                duration: 0.2
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
