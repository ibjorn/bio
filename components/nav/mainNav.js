import ActiveLink from '../../utils/activeLink'
import { menuItems } from './../../data/menuItems'
import styles from './mainNav.module.scss'

const MainNav = ({ dark }) => {
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
                  <a
                    className={`${styles.inActive} ${
                      dark ? styles.darkColors : styles.lightColors
                    }`}
                    title={item.altTitle}
                  >
                    {item.label}
                  </a>
                </ActiveLink>
              ) : (
                <a
                  className={`${styles.inActive} ${
                    dark ? styles.darkColors : styles.lightColors
                  }`}
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
