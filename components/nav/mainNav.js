import ActiveLink from '../../utils/activeLink'
import ExternalIcon from '../icons/externalIcon'
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
                <>
                  <a
                    className={`${styles.inActive} ${
                      dark ? styles.darkColors : styles.lightColors
                    } ${styles.externalLink}`}
                    href={item.path}
                    title={item.altTitle}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.label}
                  </a>
                  <ExternalIcon
                    width={14}
                    height={14}
                    color={dark ? '#000000' : '#ffffff'}
                  />
                </>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainNav
