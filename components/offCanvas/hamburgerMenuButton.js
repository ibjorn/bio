import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import {
  darkColors,
  hamburgerButton,
  hamburgerLine,
  lightColors
} from './hamburgerMenuButton.module.scss'

const HamburgerMenuButton = ({ dark }) => {
  const { handleBurgerMenuClick, isOpen } = useContext(OffCanvasContext)

  return (
    <div
      className={`${hamburgerButton} group`}
      onClick={() => handleBurgerMenuClick(!isOpen)}
    >
      <div
        className={`${hamburgerLine} ${dark ? darkColors : lightColors} ${
          isOpen && 'rotate-45 translate-y-3'
        }`}
      />
      <div
        className={`${hamburgerLine} ${dark ? darkColors : lightColors} ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div
        className={`${hamburgerLine} ${dark ? darkColors : lightColors} ${
          isOpen && '-rotate-45 -translate-y-3'
        }`}
      />
    </div>
  )
}

export default HamburgerMenuButton
