import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectsContent, { title } from './index.mdx';
import '../page.css';
import './projects.css';

function Projects() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1 className="page-heading">{title}</h1>
      </Row>
      <div className="projects-content text-left">
        <ProjectsContent />
      </div>
    </Container>
  );
}

export default Projects;
