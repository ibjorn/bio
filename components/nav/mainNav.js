import ActiveLink from '../../utils/activeLink'
import { menuItems } from './../../data/menuItems'
import styles from './mainNav.module.scss'

const MainNav = () => {
  return (
    <nav className={styles.main}>
      <ul>
        {menuItems.map(item => {
          return (
            <li key={item.id}>
              <ActiveLink activeClassName={styles.active} href={item.path}>
                <a className={styles.inActive}>{item.label}</a>
              </ActiveLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainNav
