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
              {item.isInternal ? (
                <ActiveLink
                  activeClassName={`${styles.active}`}
                  href={item.path}
                >
                  <a className={`${styles.inActive}`} title={item.altTitle}>
                    {item.label}
                  </a>
                </ActiveLink>
              ) : (
                <a
                  className={`${styles.inActive}`}
                  href={item.path}
                  title={item.altTitle}
                >
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainNav
