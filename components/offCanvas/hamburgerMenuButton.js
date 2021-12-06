import { useContext } from 'react'
import { OffCanvasContext } from '../../store/offCanvasProvider'
import {
  hamburgerButton,
  hamburgerLine
} from './hamburgerMenuButton.module.scss'

const HamburgerMenuButton = () => {
  const { handleBurgerMenuClick, isOpen } = useContext(OffCanvasContext)

  return (
    <div
      className={`${hamburgerButton} group`}
      onClick={() => handleBurgerMenuClick(!isOpen)}
    >
      <div
        className={`${hamburgerLine} ${isOpen && 'rotate-45 translate-y-3'}`}
      />
      <div
        className={`${hamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      />
      <div
        className={`${hamburgerLine} ${isOpen && '-rotate-45 -translate-y-3'}`}
      />
    </div>
  )
}

export default HamburgerMenuButton
