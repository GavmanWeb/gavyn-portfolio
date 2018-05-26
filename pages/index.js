import Portfolio from '../components/portfolio'
import withData from '../lib/withData'
import { Section, Page, ImageContainer } from '../styles/base'

export default withData((props) => {
  return (
    <Page>
      <Section gradient center>
        <ImageContainer heroImage>
          <img alt='Responsive Web Developer in Utah' src='https://res.cloudinary.com/gavmanweb/image/upload/v1491349329/portfolio/gavyn_caldwell_alt_riqaio.jpg' />
        </ImageContainer>

        <p className='hero-title'>
          Husband, Siberian Husky and German Shepherd Dad, Yo-Yoer and Front End Web Developer
        </p>

        <div className='hero-links'>
          <a
            href='https://github.com/GavMan1995'
            target='_blank'
            rel='noopener noreferrer'>
            <span className='fab fa-github-square' />
          </a>
          <a
            href='https://www.linkedin.com/in/gavman1995/'
            target='_blank'
            rel='noopener noreferrer'>
            <span className='fab fa-linkedin' />
          </a>
          <a
            href='https://codepen.io/gavman1995/'
            target='_blank'
            rel='noopener noreferrer'>
            <span className='fab fa-codepen' />
          </a>
        </div>
      </Section>

      <Section white>
        <main className='section__main-content'>
          <h1 className='section__header'>About Me</h1>
          <p className='section__copy'>
            I am a Front End Web Developer based in Salt Lake City, Utah.
            I have a passion for building excellent,
            beautiful, and responsive websites. I code amazing websites using ReactJS,
            HTML, CSS and I am currently growing my NodeJS skills.
            I love learning and am constantly taking new online courses with an emphasis
            on learning JavaScript. I love learning to code, writing code and being able
            to use my creativity while making amazing websites.
            My professional experience includes working closely with Designers and Back End
            developers, creating enterprise and financial tech apps, leading a front end team.
            Outside of coding, I love to go on adventures with my wife and siberian husky!
          </p>
        </main>

        {/* <aside className='section__aside-content'>
          <Carousel
            autoPlay
            dynamicHeight
            infiniteLoop
            interval={5000}
            transitionTime={800}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            stopOnHover={false}>
            {images.map((image, i) => <div key={i}><img src={image} alt='' /></div>)}
          </Carousel>
        </aside> */}
      </Section>

      <Section>
        <aside className='section__aside-content section__aside-content--center section__aside-content--last-on-mobile'>
          <ImageContainer react>
            <img src='https://res.cloudinary.com/gavmanweb/image/upload/v1512019872/portfolio/react_qcumv6.svg' alt='Responsive Web Developer in Utah' />
          </ImageContainer>
        </aside>

        <main className='section__main-content'>
          <h1 className='section__header'>Why React?</h1>
          <p className='section__copy'>
            React is a JavaScript library made by Facebook, reactjs.org specifies react as
            "A declarative, efficient, and flexible JavaScript library for building user
            interfaces." In my words, React is THE BEST JavaScript framework/library to build the
            front end of a website or static websites in general. React makes it very easy to make
            user interfaces that are interactive, flexible, and user friendly. React makes it easy
            to hook up API's, CMS's, Backends etc, and display the data on your website. React
            allows single page apps, which means routing is insanely fast. In general React makes
            writing JavaScript a breeze.
          </p>
        </main>
      </Section>

      <Section white>
        <main className='section__main-content'>
          <h1 className='section__header'>No HTML/CSS frameworks</h1>
          <p className='section__copy'>
            I write my own HTML and CSS (SCSS). I do this because it allows for better customization
            over using a framework like bootstrap. Not only that, front end frameworks like
            bootstrap are HUGE, which causes the load time of your website to go up drastically,
            and make it harder for your mobile users to enjoy your website.
            Using custom CSS for each website means that your website will be unique, it will
            load faster than any other website out their using a front end framework, and it means
            that I can go beyond the limits of those frameworks and do anything.
          </p>
        </main>

        <aside className='section__aside-content section__aside-content--center'>
          <ImageContainer htmlCSS>
            <img src='https://res.cloudinary.com/gavmanweb/image/upload/v1512020333/portfolio/html_leenj1.png' alt='Responsive Web Developer in Utah' />
          </ImageContainer>

          <ImageContainer htmlCSS>
            <img src='https://res.cloudinary.com/gavmanweb/image/upload/v1512020337/portfolio/css_hydemc.png' alt='Responsive Web Developer in Utah' />
          </ImageContainer>
        </aside>
      </Section>

      <Portfolio />
    </Page>
  )
})
