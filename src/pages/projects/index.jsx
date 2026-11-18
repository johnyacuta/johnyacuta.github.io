import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectsContent, { title } from './index.mdx';

function Projects() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1 style={{ marginTop: 50, marginBottom: 50, width: '25rem' }}>{title}</h1>
      </Row>
      <div className="text-left">
        <ProjectsContent />
      </div>
    </Container>
  );
}

export default Projects;
