import Link from 'next/link'
import HomeIcon from '../icons/homeIcon'
import { backToHome } from './backHomeLink.module.scss'

const BackHome = () => {
  return (
    <div className={backToHome}>
      <Link href='/'>
        <a>
          <span>←</span> <HomeIcon width='32' height='32' stroke='1' />
        </a>
      </Link>
    </div>
  )
}

export default BackHome
