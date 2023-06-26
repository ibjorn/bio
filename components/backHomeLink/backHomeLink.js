import Link from 'next/link'
import HomeIcon from '../icons/homeIcon'
import { backToHome, darkColors, lightColors } from './backHomeLink.module.scss'

const BackHome = ({ dark }) => {
  return (
    <div className={backToHome}>
      <Link href='/' className={dark ? darkColors : lightColors}>

        <span>←</span> <HomeIcon width='32' height='32' stroke='1' />

      </Link>
    </div>
  );
}

export default BackHome
