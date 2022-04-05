import BackHome from '../backHomeLink/backHomeLink'
import { darkFooter, footer, sticky } from './footer.module.scss'

const Footer = ({ home, dark }) => {
  return (
    <footer className={`${footer} ${dark && darkFooter} ${home && sticky}`}>
      {!home && <BackHome dark={dark} />}
    </footer>
  )
}

export default Footer
