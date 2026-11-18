import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMeContent, { title } from './index.mdx';

function AboutMe() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1 style={{ marginTop: 50, marginBottom: 50, width: '25rem' }}>{title}</h1>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8} style={{ marginTop: 50, marginBottom: 50 }}>
          <div className="text-left">
            <AboutMeContent />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
