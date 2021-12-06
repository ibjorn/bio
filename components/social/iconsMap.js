import dynamic from 'next/dynamic'

const TwitterIcon = dynamic(() => import('../icons/twitterIcon'))
const InstagramIcon = dynamic(() => import('../icons/instagramIcon'))
const GitHubIcon = dynamic(() => import('../icons/githubIcon'))
const LinkedInIcon = dynamic(() => import('../icons/linkedinIcon'))
const FacebookIcon = dynamic(() => import('../icons/facebookIcon'))
const SpotifyIcon = dynamic(() => import('../icons/spotifyIcon'))

const iconMap = {
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  Spotify: SpotifyIcon
}

export default iconMap
