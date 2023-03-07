import { ProjectsContainer, ProjectPlaceholder, Project } from '../styles/components/projects';

function Portfolio({ result }) {
  return (
    <ProjectsContainer>
      <h1 className="header">Projects</h1>
      {result?.data.portfolios.map((project, i) => {
        return (
          <Project key={i} href={project.link} rel="noopener noreferrer" target="_blank" image={project.image.url}>
            <div className="img-container" />
            <div className="project-about">
              <h1>{project.name}</h1>
              <h3>{project.description}</h3>
            </div>
          </Project>
        );
      })}

      <ProjectPlaceholder />
      <ProjectPlaceholder />
      <ProjectPlaceholder />
    </ProjectsContainer>
  );
}

export default Portfolio;
