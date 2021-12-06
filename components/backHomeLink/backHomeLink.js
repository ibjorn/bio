import Link from 'next/link'
import HomeIcon from '../icons/homeIcon'
import { backToHome } from './backHomeLink.module.scss'

const BackHome = () => {
  return (
    <div className={backToHome}>
      <Link href='/'>
        <a>
          ← Back <HomeIcon width='20' height='20' stroke='1' />
        </a>
      </Link>
    </div>
  )
}

export default BackHome
