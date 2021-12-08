import BioLayout from '../components/layouts/bioLayout'
import Meta from '../components/meta'

export default function Bio() {
  return (
    <article>
      <h1>Web Developer Over Here...</h1>
      <h2>Intro &amp; Experience</h2>
      <p>
        Since my introduction to the internet in 1993 by a school friend I was
        hooked.
      </p>
      <p>
        I guess my curiousity since childhood with trying to understand what
        made things work by taking them apart is what lead me on my journey to
        becoming a self-taught web developer.
      </p>
      <p>
        In 2003 the opportunity presented itself for me to start my own company,{' '}
        <a
          href='http://www.blackalsatian.co.za'
          target='_blank'
          rel='noopener noreferrer'
          title='A Web Development &amp; Digital Marketing Consultancy'
        >
          Black Alsatian
        </a>
        , as a freelance graphic and web designer.
      </p>
      <p>
        At this present day Black Alsatian now consists of as mall team of 3
        people. Together we specialise in both web development and online
        marketing.
      </p>
      <p>
        In 2004, after realising my HTML and CSS skills would not be enough to
        develop large scale applications, I started studying PHP and MySQL and
        also learnt about the hosting environments to run these applications. My
        skills in Linux, running an Apache, PHP and MySQL environment could be
        considered at an intermediate level. Over the years my main focus has
        been on working with open source PHP frameworks like, primarily
        WordPress and Joomla CMSs.
      </p>
      <p>
        In trying to keep up with the fast pace at which theweb environment
        keeps evolving, I have in recent years shifted focus to building custom
        full stack applications. My speciality right now is building Progressive
        Web Apps in JavaScript, custom online administration systems (mostly PHP
        and MySQL mixed with JavaScript) and APIs (PHP and I’ve had some
        experience with NodeJS).
      </p>
      <p>
        Most recently I have developed a few “headless WordPress” sites
        formanaging content with decoupled Progressive Web Apps for frontend
        responsibilities and custom administration systems for managing and
        processing user data input.
      </p>

      <h3>Professional Skills</h3>
      <h4>Toolset</h4>

      <ul>
        <li>Visual Studio Code (IDE)</li>
        <li>Node/NPM for frontend development</li>
        <li>Composer, Apache, PHP and MySQL for backend development</li>
        <li>Git for version control</li>
      </ul>
      <h4>Backend Development Skillset</h4>
      <ul>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Laravel (an enterprise PHP framework)</li>
        <li>Livewire for Laravel UI/UX</li>
        <li>I have tinkered with NodeJS, but am not yet fluent</li>
        <li>WordPress as a “headless” CMS solution</li>
        <li>REST API</li>
        <li>GraphQL</li>
        <li>I have some experience with Redis and MongoDB, but not much</li>
        <li>
          I’ve dabbled with Docker and Kubernetes, but still have lots to learn
        </li>
      </ul>

      <h4>Frontend Development Skillset</h4>
      <ul>
        <li>HTML5, CSS3, JavaScript (naturally..)</li>
        <li>
          TailwindCSS, Bootstrap, Bulma are all CSS frameworks I have worked
          with
        </li>
        <li>I know ReactJS quite well</li>
        <li>
          GatsbyJS and NextJS (both ReactJS frameworks I use to build
          Progressive Web Apps)
        </li>
        <li>
          For frontend UI I have worked with SASS, CSS-in-JS, Styled Components,
          Emotion and CSS Modules.
        </li>
      </ul>
      <h3>Business Skills</h3>
      <p>
        I am a problem solver. Most of my career I have had to learn new skills
        on the fly, as the job requires. I see learning as a part of my job.
      </p>
      <p>
        In the years prior to me starting my own business, I worked as a project
        manager and graphic designer at a very busy sign writing company
        (Brightsparx Sign Co.). The skills and experience I picked up enabled
        meto be able to run my own business and manage a team of freelancers, as
        many projects often required me to outsource various parts of a project.
      </p>
      <h4>SEO, SEM &amp; Digital Marketing</h4>
      <p>
        It’s my belief that you cannot call yourself a proper web developer
        without these skills as part of your foundation.
      </p>
      <p>
        You can have the most advanced programming skills and build the most
        beautiful websites, but if your main focus is not on constantly
        optimising for the purpose of being found out there on the vast net,
        you’re just wasting your time.
      </p>
      <p>
        I have a solid understanding with nearly two decades of experience in
        Search Engine Optimisation, PPC advertising (Google Ads and Facebook
        Ads).
      </p>
    </article>
  )
}

Bio.getLayout = function getLayout(page) {
  return (
    <>
      <Meta slug='bio' />
      <BioLayout>{page}</BioLayout>
    </>
  )
}
