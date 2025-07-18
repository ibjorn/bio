import { format, parseISO } from 'date-fns'
import { enZA } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy', { locale: enZA })}</time>
}
