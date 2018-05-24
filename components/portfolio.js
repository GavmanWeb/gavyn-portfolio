import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

function Portfolio ({ data: { loading, allPortfolios }, loadMorePosts }) {
  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <section className='c-projects'>
        {allPortfolios.map((project, i) => {
          return (
                <a
                  key={i}
                  href={project.link}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='c-projects__project'>
                  <img
                    alt='Responsive Web Developer in Utah'
                    src={project.image.url} />
                  <div className='c-project__about'>
                    <h1>{project.name}</h1>
                    <h3>{project.description}</h3>
                  </div>
                </a>
              )
        })}

        <div className='c-projects__project-placeholder' />
        <div className='c-projects__project-placeholder' />
        <div className='c-projects__project-placeholder' />
      </section >
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
