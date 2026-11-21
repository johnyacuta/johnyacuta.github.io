import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectsContent, { title } from './index.mdx';
import {
  personalProjectSource,
  personalProjects,
} from './personal-projects.js';
import { workProjects } from './work-projects.js';
import '../page.css';
import './projects.css';

function ProjectDetails({ project }) {
  return (
    <details className="project-details">
      <summary>{project.title}</summary>
      <ul>
        {project.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </details>
  );
}

function WorkProjectCard({ employer, highlights, projects }) {
  return (
    <details className="company-pod">
      <summary>
        <span className="company-pod-name">{employer}</span>
        <span className="company-pod-hint">Highlights & project details</span>
      </summary>
      <div className="company-pod-content">
        <h3>Key highlights</h3>
        <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {projects.map((project) => (
          <ProjectDetails key={project.title} project={project} />
        ))}
      </div>
    </details>
  );
}

function Projects() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1 className="page-heading">{title}</h1>
      </Row>
      <div className="projects-content text-left">
        <ProjectsContent />
        <section aria-labelledby="personal-projects-heading">
          <h2 id="personal-projects-heading">Personal Projects</h2>
          <details className="company-pod">
            <summary>
              <span className="company-pod-name">
                {personalProjectSource.name}
              </span>
              <span className="company-pod-hint">Personal project details</span>
            </summary>
            <div className="company-pod-content">
              <p>
                Explore these personal projects on{' '}
                <a href={personalProjectSource.url}>{personalProjectSource.name}</a>.
              </p>
              <ul>
                {personalProjects.map(({ name, description }) => (
                  <li key={name}>
                    <strong>{name}</strong>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </section>
        <section aria-labelledby="work-projects-heading">
          <h2 id="work-projects-heading">Work Projects</h2>
          <p>
            Below are projects I contributed to or led through production for each
            employer, ordered from most recent to earliest. Feel free to connect if
            you&apos;d like to learn more about my work.
          </p>
          {workProjects.map((company) => (
            <WorkProjectCard key={company.employer} {...company} />
          ))}
        </section>
      </div>
    </Container>
  );
}

export default Projects;
