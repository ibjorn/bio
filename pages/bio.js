import BioLayout from '../components/layouts/bioLayout'
import Layout from '../components/layouts/layout'
import Meta from '../components/meta'

export default function Bio() {
  return (
    <>
      <h1>So I&apos;m A Web Developer..</h1>
      <h1>Professional Summary</h1>
      <p>
        I am a self-taught web developer. In 2003 I startedmy own company Black
        Alsatian (
        <a
          href='http://www.blackalsatian.co.za'
          target='_blank'
          rel='noopener noreferrer'
          title='A Web Development &amp; Digital Marketing Consultancy'
        >
          www.blackalsatian.co.za
        </a>
        ) as a freelance graphicand web designer.
      </p>
      <p>
        At this present day Black Alsatian now consists of asmall team of 3
        people. Together we specialise inboth web development and online
        marketing.
      </p>
      <p>
        In 2004, after realising my HTML and CSS skillswould not be enough to
        develop large scaleapplications, I started studying PHP and MySQLand
        also learnt about the hosting environments torun these applications. My
        skills in Linux, runningan Apache, PHP and MySQL environment could
        beconsidered at an intermediate level. Over the years my main focus has
        been on workingwith open source PHP frameworks like, primarilyWordPress
        and Joomla CMSs.
      </p>
      <p>
        In trying to keep up with the fast pace at which theweb environment
        keeps evolving, I have in recentyears shifted focus to building custom
        full stackapplications. My speciality right now is building
        ProgressiveWeb Apps in JavaScript, custom onlineadministration systems
        (mostly PHP and MySQLmixed with JavaScript) and APIs (PHP and I’ve
        hadsome experience with NodeJS).
      </p>
      <p>
        Most recently I have developed a few “headless WordPress” sites
        formanaging content with decoupled Progressive Web Apps for
        frontendresponsibilities and custom administration systems for managing
        andprocessing user data input.
      </p>
      <h3>Business Skills</h3>
      <p>
        I am a problem solver. Most of my career I have had to learn new
        skillson the fly, as the job requires. I see learning as a part of my
        job.
      </p>
      <p>
        In the years prior to me starting my own business, I worked as a
        projectmanager and graphic designer at a very busy sign writing
        company(Brightsparx Sign Co.). The skills and experience I picked up
        enabled meto be able to run my own business and manage a team of
        freelancers, asmany projects often required me to outsource various
        parts of aproject.
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
        <li>I have tinkered with NodeJS, but are not yet fluent</li>
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
      <h4>General</h4>
      <p>
        I have a solid understanding with nearly two decades of experience
        inSearch Engine Optimisation, PPC advertising (Google Ads andFacebook
        Ads).
      </p>
    </>
  )
}

Bio.getLayout = function getLayout(page) {
  return (
    <>
      <Meta url='/' />
      <Layout>
        <BioLayout>{page}</BioLayout>
      </Layout>
    </>
  )
}
