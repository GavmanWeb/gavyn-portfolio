import { Section, ImageContainer } from '../styles/base';

function Hero({ result }) {
  return (
    <>
      <Section gradient center>
        <ImageContainer heroImage>
          <img alt="Responsive Web Developer in Utah" src={result.data.landing.profileImage.url} />
        </ImageContainer>

        <p className="hero-title">{result.data.landing.shortAbout}</p>

        <div className="hero-links">
          <a href="https://github.com/gavyncaldwell" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-github-square" />
            <p>GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/gavyncaldwell/" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-linkedin" />
            <p>LinkedIn</p>
          </a>
          <a href="assets/gavyn-caldwell-resume.pdf" download>
            <span className="fas fa-file-pdf" />
            <p>Resume</p>
          </a>
        </div>

        {/* <Link href='/hire-me'><a style={{textAlign: 'center', width: '100%'}}>Hire Me</a></Link> */}
      </Section>

      <Section white>
        <main className="section__main-content">
          <h1 className="section__header">About Me</h1>
          <div dangerouslySetInnerHTML={{ __html: result.data.landing.aboutMe.html }}></div>
        </main>
      </Section>
    </>
  );
}

export default Hero;
