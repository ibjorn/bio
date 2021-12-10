import Document, { Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='dns-prefetch' href='https://www.google-analytics.com' />
          <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
          <link
            rel='preconnect'
            href='https://www.googletagmanager.com'
            crossOrigin='true'
          />
          <link
            rel='preconnect'
            href='https://www.google-analytics.com'
            crossOrigin='true'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });`
            }}
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&family=Raleway:wght@400;800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
