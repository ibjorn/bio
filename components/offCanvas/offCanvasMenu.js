import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import SocialIcons from '../social/socialIcons'
import HamburgerMenuButton from './hamburgerMenuButton'
import styles from './offCanvasMenu.module.scss'
import OffCanvasNav from './offCanvasNav'

const OffCanvasMenu = ({ nav }) => {
  const { handleBurgerMenuClick } = useContext(OffCanvasContext)

  return (
    <>
      <div className={styles.wrapper}>
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
    </>
  )
}

export default OffCanvasMenu
