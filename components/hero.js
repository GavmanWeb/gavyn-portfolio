import { withUrqlClient, initUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import { Section, ImageContainer } from '../styles/base'

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

const url = 'https://api-us-west-2.graphcms.com/v2/cjnmw0gb23diu01fusk0vgtpt/master'

const Hero = () => {
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
            href='https://github.com/gavyncaldwell'
            target='_blank'
            rel='noopener noreferrer'>
            <span className='fab fa-github-square' />
          </a>
          <a
            href='https://www.linkedin.com/in/gavyncaldwell/'
            target='_blank'
            rel='noopener noreferrer'>
            <span className='fab fa-linkedin' />
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

export async function getStaticProps(ctx) {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    {
      url,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false
  );

  // This query is used to populate the cache for the query
  // used on this page.
  await client.query(query).toPromise();

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
    },
    revalidate: 600,
  };
}

export default withUrqlClient(
  ssr => ({
    url,
  })
)(Hero);