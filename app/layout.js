'use client'

import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
// import Suspense from 'react'
import Analytics from '../components/analytics/analytics'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import { GTM_ID } from '../lib/gtm'
import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'
import { dev } from '../utils/helpers'
import { lato } from './fonts'

export default function RootLayout({ children }) {
  const pathname = usePathname()

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
          {/* <Suspense> */}
          <Analytics />
          {/* </Suspense> */}
        </head>
        <body suppressHydrationWarning={true}>
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
