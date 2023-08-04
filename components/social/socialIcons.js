'use client'
import { motion } from 'framer-motion'
import React, { useCallback } from 'react'
import { socialLinks } from './../../data/socialLinks'
import iconMap from './iconsMap'
import styles from './socialIcons.module.scss'

function SocialIcons({ desktopOnly = false, dark }) {
  const SocialIconComponent = useCallback(() => {
    return socialLinks.map(item => {
      const Icon = iconMap[item.label]

      if (!Icon) {
        return null
      }

      return (
        <motion.li
          key={item.id}
          whileHover={{
            position: 'relative',
            zIndex: 1,
            // background: '#0891B2',
            scale: [1, 1.4, 1.2],
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 0.3
            }
          }}
        >
          <a
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            title={item.label}
          >
            <Icon width='24' height='24' color={dark ? '#1E293B' : '#ffffff'} />
          </a>
        </motion.li>
      )
    })
  }, [dark])

  return (
    <div
      className={`${styles.socialIcons} ${desktopOnly && styles.desktopOnly} ${
        dark ? styles.darkColors : styles.lightColors
      }`}
    >
      <ul className={styles.horizontal}>
        <SocialIconComponent />
      </ul>
    </div>
  )
}
export default React.memo(SocialIcons)
