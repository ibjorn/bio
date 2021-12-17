import Document, { Head, Html, Main, NextScript } from 'next/document'
import { GTM_ID } from '../lib/gtm'
import { dev } from '../utils/helpers'

class AppDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preconnect'
            href='https://www.googletagmanager.com'
            crossOrigin='true'
          />
          <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            rel='preload'
            as='style'
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Oswald:wght@200;400;600&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Oswald:wght@200;400;600&display=swap'
            media='print'
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Oswald:wght@200;400;600&display=swap'
            />
          </noscript>
        </Head>
        <body>
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
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
