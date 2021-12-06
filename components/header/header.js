import { useRouter } from 'next/router'
import MainNav from '../nav/mainNav'
import HamburgerMenuButton from '../offCanvas/hamburgerMenuButton'
import SocialIcons from '../social/socialIcons'
import { header, left, lowercase, right } from './header.module.scss'

const Header = () => {
  const router = useRouter()
  const title =
    router.pathname === '/' ? (
      <h1>
        Bj<span className={lowercase}>ö</span>rn Potgieter
      </h1>
    ) : (
      <h2 as='h1'>
        Bj<span className={lowercase}>ö</span>rn Potgieter
      </h2>
    )
  return (
    <header className={header}>
      <div className={left}>
        {title}
        <p>Web Developer | Code Tinkerer | Bonsai Master</p>
      </div>
      <div className={right}>
        <MainNav />
        <SocialIcons desktopOnly />
        <HamburgerMenuButton />
        <span>Open main menu</span>
      </div>
    </header>
  )
}

export default Header
