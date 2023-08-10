import Analytics from '../components/analytics/analytics'
import MainLayoutWrap from '../components/layouts/mainLayoutWrap'
import { GTM_ID } from '../lib/gtm'
import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'
import { dev } from '../utils/helpers'
import { lato, oswald } from './fonts'
// import { headers } from 'next/headers'

export default function RootLayout({ children }) {
  // const headersList = headers()
  // const domain = headersList.get('host')
  // const data = await getSiteData(domain)
  return (
    <html lang='en' className={`${lato.variable} ${oswald.variable}`}>
      <head>
        <link
          rel='preconnect'
          href='https://www.googletagmanager.com'
          crossOrigin='true'
        />
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
        <Analytics />
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
        <OffCanvasProvider>
          <MainLayoutWrap>{children}</MainLayoutWrap>
        </OffCanvasProvider>
      </body>
    </html>
  )
}
