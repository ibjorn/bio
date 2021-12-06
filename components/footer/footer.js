import BackHome from '../backHomeLink/backHomeLink'
import { footer } from './footer.module.scss'

const Footer = ({ home }) => {
  return <footer className={footer}>{!home && <BackHome />}</footer>
}

export default Footer
