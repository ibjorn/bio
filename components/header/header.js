import { motion } from 'framer-motion'
import MainNav from '../nav/mainNav'
import HamburgerMenuButton from '../offCanvas/hamburgerMenuButton'
import Title from '../pagetitle/title'
import SocialIcons from '../social/socialIcons'
import { header, left, right } from './header.module.scss'

const Header = ({ home }) => {
  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    }
  }
  return (
    <header className={header}>
      <motion.div
        className={left}
        initial='hidden'
        animate='visible'
        variants={variants}
      >
        <Title isHome={home} />
      </motion.div>
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
