import OffCanvasProvider from '../store/offCanvasProvider'
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const getLayout = Component.getLayout || (page => page)
  const useLayout = getLayout(<Component {...pageProps} />)

  return <OffCanvasProvider>{useLayout}</OffCanvasProvider>
}
