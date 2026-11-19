import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Outlet } from 'react-router-dom';
import AboutMeContent, { title } from './index.mdx';

function AboutMe() {
  return (
    <Container>
      <Row className="about-layout">
        <Col xs={12} md={3}>
          <nav className="about-sidebar" aria-label="About Me sections">
            <NavLink end to="/about-me" className={({ isActive }) => `about-sidebar-link${isActive ? ' active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/about-me/technology" className={({ isActive }) => `about-sidebar-link${isActive ? ' active' : ''}`}>
              Technology
            </NavLink>
            <NavLink to="/about-me/homebrewing" className={({ isActive }) => `about-sidebar-link${isActive ? ' active' : ''}`}>
              Homebrewing
            </NavLink>
            <NavLink to="/about-me/travel" className={({ isActive }) => `about-sidebar-link${isActive ? ' active' : ''}`}>
              Travel
            </NavLink>
            <NavLink to="/about-me/blog" className={({ isActive }) => `about-sidebar-link${isActive ? ' active' : ''}`}>
              Blog
            </NavLink>
          </nav>
        </Col>
        <Col xs={12} md={9}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export function AboutContent() {
  return (
    <>
      <h1 className="page-heading">{title}</h1>
      <div className="about-page-content">
        <AboutMeContent />
      </div>
    </>
  );
}

export function AboutSection({ title: sectionTitle }) {
  return <h1 className="page-heading">{sectionTitle}</h1>;
}

export default AboutMe;
