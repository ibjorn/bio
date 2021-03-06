import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import Script from 'next/script'
import { useEffect } from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import { GTM_ID, pageview } from '../lib/gtm'
import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'
import { dev } from '../utils/helpers'

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  const isHomePage = router.route === '/'
  const isBlogPage = router.route.includes('/blog')
  const isNotFoundPage = router.route.includes('/404')

  return (
    <OffCanvasProvider>
      {!dev && (
        <Script
          id={router.route}
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
          `
          }}
        />
      )}
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
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </LazyMotion>
        <Footer home={isHomePage} dark={isBlogPage || isNotFoundPage} />
      </div>
    </OffCanvasProvider>
  )
}
