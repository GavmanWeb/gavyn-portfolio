import 'isomorphic-unfetch'
import { createClient, Provider } from 'urql'

import Portfolio from '../components/portfolio'
import { Section, Page, ImageContainer } from '../styles/base'

const client = createClient({ url: 'https://api-us-west-2.graphcms.com/v2/cjnmw0gb23diu01fusk0vgtpt/master'})

export default (props) => {
  return (
    <Provider value={client}>
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
              beautiful, and responsive websites. I love coding and being able to exercies my creativity while making amazing websites.
              My professional experience, which spans over 4 years, includes working closely with Designers and Back End
              developers, creating enterprise, financial tech, and e-commerce apps, and leading a front end team.
              I love hanging out and doing fun things with my wife, Siberian Husky and German Shepherd. I love being in nature and photographing it.
              I also enjoy, yoyoing, playing guitar, relaxing in hot water, adventuring, drawing, painting, sculpting, leather work among many other things.
            </p>
          </main>
        </Section>

        <Portfolio />
      </Page>
    </Provider>
  )
}
