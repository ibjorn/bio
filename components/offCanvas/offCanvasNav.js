import NavLink from '../nav/navLink'
import { menuItems } from './../../data/menuItems'
import styles from './offCanvasNav.module.scss'

const OffCanvasNav = ({ onClick }) => {
  return (
    <nav className={styles.main}>
      <ul>
        {menuItems.map(item => {
          return (
            <li key={item.id} onClick={onClick}>
              <NavLink link={item} />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default OffCanvasNav
