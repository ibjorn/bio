import ExternalIcon from '../icons/externalIcon'
import NavLink from '../nav/navLink'
import { menuItems } from './../../data/menuItems'
import styles from './offCanvasNav.module.scss'

const OffCanvasNav = ({ onClick }) => {
  return (
    <nav className={styles.main}>
      <ul>
        {menuItems.map(item => {
          return (
            <li
              key={item.id}
              onClick={onClick}
              className={`${!item.isInternal ? styles.externalLink : ''}`}
            >
              <NavLink link={item} />
              {!item.isInternal && <ExternalIcon width={16} height={16} />}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default OffCanvasNav
