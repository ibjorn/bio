'use client'

import { motion } from 'framer-motion'
import MainNav from '../nav/mainNav'
import HamburgerMenuButton from '../offCanvas/hamburgerMenuButton'
import Title from '../pagetitle/title'
import SocialIcons from '../social/socialIcons'
import {
  darkMenu,
  header,
  left,
  overlaySite,
  right,
  transparentMenu
} from './header.module.scss'

const Header = ({ home, overlay = false, dark = false }) => {
  const variants = {
    hidden: {
      // scale: 0.8,
      opacity: 0
    },
    visible: {
      // scale: 1,
      opacity: [0.2, 0.7, 0.9, 1],
      transition: {
        duration: 2
      }
    }
  }

  //   const stickyPosition = useScrollPosition()
  //
  //   const isSticky = () => {
  //     return stickyPosition === 0 ? true : false
  //   }

  return (
    <header
      className={`${header} ${home && transparentMenu} ${dark && darkMenu} ${
        overlay && overlaySite
      }`}
    >
      <motion.div
        className={left}
        initial='hidden'
        animate='visible'
        variants={variants}
      >
        <Title isHome={home} dark={dark} />
      </motion.div>
      <div className={right}>
        <MainNav dark={dark} />
        <SocialIcons desktopOnly dark={dark} />
        <HamburgerMenuButton dark={dark} />
        <span>Open main menu</span>
      </div>
    </header>
  )
}
export default Header
