import { withUrqlClient, initUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';
import { ProjectsContainer, ProjectPlaceholder, Project } from '../styles/components/projects'

const url = 'https://api-us-west-2.graphcms.com/v2/cjnmw0gb23diu01fusk0vgtpt/master'

const query = `query portfolios{
  portfolios(orderBy: sort_ASC) {
    image {
      url
      handle
    }
    description
    name
    link
    sort
  }
}`

const Portfolio = () => {
  const [ result ] = useQuery({ query })

  if (result.fetching) {
    return <div>Loading...</div>
  } else if (result.error) {
    return <div>OH NO! ERROR</div>
  }

  return (
    <ProjectsContainer>
      <h1 className='header'>Projects</h1>
      {result?.data.portfolios.map((project, i) => {
        return (
          <Project key={i} href={project.link} rel='noopener noreferrer' target='_blank' image={project.image.url}>
            <div className='img-container' />
            <div className='project-about'>
              <h1>{project.name}</h1>
              <h3>{project.description}</h3>
            </div>
          </Project>
        )
      })}

      <ProjectPlaceholder />
      <ProjectPlaceholder />
      <ProjectPlaceholder />
    </ProjectsContainer>
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
)(Portfolio);