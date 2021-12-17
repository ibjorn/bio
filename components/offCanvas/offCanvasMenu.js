import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import SocialIcons from '../social/socialIcons'
import HamburgerMenuButton from './hamburgerMenuButton'
import styles from './offCanvasMenu.module.scss'
import OffCanvasNav from './offCanvasNav'

const OffCanvasMenu = ({ nav }) => {
  const { isOpen, handleBurgerMenuClick } = useContext(OffCanvasContext)

  return (
    <div
      className={`${isOpen ? styles.open : styles.closed} ${styles.wrapper}`}
    >
      <div className={styles.hamburger}>
        <HamburgerMenuButton />
      </div>
      <OffCanvasNav
        nav={nav}
        onClick={() => {
          handleBurgerMenuClick()
        }}
      />
      <SocialIcons />
    </div>
  )
}

export default OffCanvasMenu
