import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMeContent, { title } from './index.mdx';

function AboutMe() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1 style={{ marginTop: 50, marginBottom: 50, width: '25rem' }}>{title}</h1>
      </Row>
      <Row>
        <Col>
          <Image
            src="/john-about-me.JPG"
            rounded
            style={{ marginTop: 50, marginBottom: 50, width: '25rem' }}
          />
        </Col>
        <Col style={{ marginTop: 50, marginBottom: 50, width: '25rem' }}>
          <div className="text-left">
            <AboutMeContent />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
