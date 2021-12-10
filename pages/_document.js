import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
          <Script
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `
            }}
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;400&family=Raleway:wght@400;800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
