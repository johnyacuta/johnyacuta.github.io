import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import HomeContent, { title } from './index.mdx';
import './home.css';

function Home() {
  return (
    <Container className="home-container">
      <Row className="home-hero align-items-center">
        <Col lg={7} className="home-copy-column">
          <p className="home-eyebrow">Software Engineer · Platform Engineer</p>
          <h1 className="home-title">{title}</h1>
          <div className="home-intro text-left">
            <HomeContent />
          </div>
          <div className="home-focus-areas" aria-label="Areas of focus">
            <span>Cloud infrastructure</span>
            <span>Platform engineering</span>
            <span>Software engineering</span>
            <span>Automation</span>
          </div>
          <div className="home-actions">
            <Link className="home-action home-action-primary" to="/projects">
              View projects
            </Link>
            <Link className="home-action home-action-secondary" to="/about-me">
              About me
            </Link>
          </div>
        </Col>
        <Col lg={5} className="home-image-column">
          <Image
            src="/pages/home/john-profile.jpg"
            rounded
            fluid
            className="home-profile-image"
            alt="John Yacuta"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
