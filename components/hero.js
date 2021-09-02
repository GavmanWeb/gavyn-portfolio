import { useQuery } from 'urql'
import Link from 'next/link'

import { Section, ImageContainer } from '../styles/base'

export default () => {
  const query = `query landing {
    landing(where: {id: "ckt24dyps7emn0a68n7akkl2x"}) {
      aboutMe {
        html
      }
      profileImage {
        url
      }
      shortAbout
    }
  }`

  const [ result ] = useQuery({ query })


  if (result.fetching) {
    return <div>Loading...</div>
  } else if (result.error) {
    return <div>OH NO! ERROR</div>
  }

  return (
    <>
      <Section gradient center>
        <ImageContainer heroImage>
          <img alt='Responsive Web Developer in Utah' src={result.data.landing.profileImage.url} />
        </ImageContainer>

        <p className='hero-title'>
          {result.data.landing.shortAbout}
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

        {/* <Link href='/hire-me'><a style={{textAlign: 'center', width: '100%'}}>Hire Me</a></Link> */}
      </Section>

      <Section white>
        <main className='section__main-content'>
          <h1 className='section__header'>About Me</h1>
          <div dangerouslySetInnerHTML={{__html: result.data.landing.aboutMe.html}}></div>
        </main>
      </Section>
    </>
  )
}