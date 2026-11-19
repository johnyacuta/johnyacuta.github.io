import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeContent, { title } from './index.mdx';
import './home.css';

function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1 style={{ marginTop: 50, marginBottom: 50, width: '50rem' }}>{title}</h1>
      </Row>
      <Row className="home-content-row">
        <Col md={6} className="home-image-column">
          <Image
            src="/john-profile.JPG"
            rounded
            fluid
            className="home-profile-image"
          />
        </Col>
        <Col md={6} className="home-copy-column">
          <div className="text-left">
            <HomeContent />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
