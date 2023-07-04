'use client'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import { GTM_ID, pageview } from '../lib/gtm'
import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'
import { dev } from '../utils/helpers'
import { lato, oswald } from './fonts'

export default function RootLayout({ children, href, params }) {
  const { aspath } = useRouter()
  const pathname = usePathname()
  console.log('aspath: ', aspath)
  console.log('pathname: ', pathname)
  console.log('href: ', href)
  console.log('params: ', params)
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  const isHomePage = pathname === '/'
  const isBlogPage = pathname.includes('/blog')
  const isNotFoundPage = pathname.includes('/404')
  return (
    <OffCanvasProvider>
      <html lang='en' className={lato.className}>
        <head>
          <link
            rel='preconnect'
            href='https://www.googletagmanager.com'
            crossOrigin='true'
          />
          <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
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
        </head>
        <body className={oswald.className}>
          {!dev && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>
          )}
          <main>
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
          </main>
        </body>
      </html>
    </OffCanvasProvider>
  )
}
