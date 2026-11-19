import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Outlet } from 'react-router-dom';
import AboutMeContent, { title } from './index.mdx';
import HomebrewingContent, { title as homebrewingTitle } from './homebrewing.mdx';
import TechnologyContent, { title as technologyTitle } from './technology.mdx';
import '../page.css';
import './about-me.css';

const getSidebarLinkClass = ({ isActive }) =>
  `about-sidebar-link${isActive ? ' active' : ''}`;

const homebrewedBeers = [
  'The Innkeeper Ale',
  'Nut Brown Ale',
  'Bavarian Hefeweizen',
  'Irish Red Ale',
];

function AboutMe() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Container>
      <Row className="about-layout">
        <Col xs={12} md={3}>
          <div className="about-sidebar-container">
            <button
              type="button"
              className="about-sidebar-toggle"
              aria-expanded={isSidebarOpen}
              aria-controls="about-me-sidebar"
              onClick={() => setIsSidebarOpen((isOpen) => !isOpen)}
            >
              <span className="about-sidebar-toggle-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>About Me sections</span>
            </button>
            <nav
              id="about-me-sidebar"
              className={`about-sidebar${isSidebarOpen ? ' is-open' : ''}`}
              aria-label="About Me sections"
            >
              <NavLink
                end
                to="/about-me"
                onClick={() => setIsSidebarOpen(false)}
                className={getSidebarLinkClass}
              >
                About
              </NavLink>
              <NavLink
                to="/about-me/technology"
                onClick={() => setIsSidebarOpen(false)}
                className={getSidebarLinkClass}
              >
                Technology
              </NavLink>
              <NavLink
                to="/about-me/homebrewing"
                onClick={() => setIsSidebarOpen(false)}
                className={getSidebarLinkClass}
              >
                Homebrewing
              </NavLink>
              <NavLink
                to="/about-me/travel"
                onClick={() => setIsSidebarOpen(false)}
                className={getSidebarLinkClass}
              >
                Travel
              </NavLink>
            </nav>
          </div>
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

export function HomebrewingPage() {
  return (
    <>
      <h1 className="page-heading">{homebrewingTitle}</h1>
      <div className="about-page-content">
        <HomebrewingContent />
        <div className="homebrew-beer-grid">
          {homebrewedBeers.map((beer) => (
            <article className="homebrew-beer-card" key={beer}>
              <h2>{beer}</h2>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export function TechnologyPage() {
  return (
    <>
      <h1 className="page-heading">{technologyTitle}</h1>
      <div className="about-page-content">
        <TechnologyContent />
      </div>
    </>
  );
}

export default AboutMe;
