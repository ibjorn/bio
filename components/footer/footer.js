import BackHome from '../backHomeLink/backHomeLink'
import { footer } from './footer.module.scss'

const Footer = ({ home, dark }) => {
  return <footer className={footer}>{!home && <BackHome dark={dark} />}</footer>
}

export default Footer
