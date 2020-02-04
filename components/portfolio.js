import { useQuery } from 'urql'

import { ProjectsContainer, ProjectPlaceholder, Project } from '../styles/components/projects'
export default () => {
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

  const [ result ] = useQuery({ query })
  console.log(result)

  if (result.fetching) {
    return <div>Loading...</div>
  } else if (result.error) {
    return <div>OH NO! ERROR</div>
  }

  return (
    <ProjectsContainer>
      <h1 className='header'>Projects</h1>
      {result.data.portfolios.map((project, i) => {
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
