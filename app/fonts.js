import { Lato, Oswald } from 'next/font/google'

export const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato'
})

export const oswald = Oswald({
  weight: ['200', '400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald'
})
