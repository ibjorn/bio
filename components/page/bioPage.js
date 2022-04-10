import { bio } from '../layouts/layout.module.scss'

const BioPage = ({ title, body }) => {
  return (
    <article className={bio}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  )
}

export default BioPage
