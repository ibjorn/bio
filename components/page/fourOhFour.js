import Link from 'next/link'

const FourOhFour = () => {
  return (
    <section className='section'>
      <div className='container'>
        <article className='fourOhwrapper'>
          <h1>404</h1>
          <h2>Hmm.. well this is awkward.</h2>
          <p>
            Let&apos;s <Link href='/'>go home</Link>.
          </p>
        </article>
      </div>
    </section>
  )
}

export default FourOhFour
