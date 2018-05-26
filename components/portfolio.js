import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import { ProjectsContainer, ProjectPlaceholder } from '../styles/components/projects'

function Portfolio ({ data: { loading, allPortfolios }, loadMorePosts }) {
  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <ProjectsContainer>
        {allPortfolios.map((project, i) => {
          return (
            <a
              key={i}
              href={project.link}
              rel='noopener noreferrer'
              target='_blank'
              className='project'>
              <img
                alt='Responsive Web Developer in Utah'
                src={project.image.url} />
              <div className='project-about'>
                <h1>{project.name}</h1>
                <h3>{project.description}</h3>
              </div>
            </a>
          )
        })}

        <ProjectPlaceholder />
        <ProjectPlaceholder />
        <ProjectPlaceholder />
      </ProjectsContainer>
    )
  }
}

export default graphql(gql`
  query allPortfolios {
    allPortfolios {
      image {
        url
        handle
      }
      description
      name
      link
    }
  }
`)(Portfolio)
