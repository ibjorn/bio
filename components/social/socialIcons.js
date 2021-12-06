import React, { useCallback } from 'react'
import { socialLinks } from './../../data/socialLinks'
import iconMap from './iconsMap'
import styles from './socialIcons.module.scss'

function SocialIcons({ desktopOnly }) {
  const SocialIconComponent = useCallback(() => {
    return socialLinks.map(item => {
      const Icon = iconMap[item.label]

      if (!Icon) {
        return null
      }

      return (
        <li key={item.id}>
          <a
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            title={item.label}
          >
            <Icon width='20' height='20' />
          </a>
        </li>
      )
    })
  }, [])

  return (
    <div
      className={`${styles.socialIcons} ${desktopOnly && styles.desktopOnly}`}
    >
      <ul className={styles.horizontal}>
        <SocialIconComponent />
      </ul>
    </div>
  )
}

SocialIcons.defaultProps = {
  desktopOnly: false
}
export default React.memo(SocialIcons)
