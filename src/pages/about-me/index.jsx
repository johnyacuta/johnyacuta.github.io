import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Outlet } from 'react-router-dom';
import BeerCard from '../../components/cards/beer-card';
import AboutMeContent, { title } from './index.mdx';
import HomebrewingContent, { title as homebrewingTitle } from './homebrewing.mdx';
import { beers } from './homebrewing.js';
import TechnologyContent, {
  intro as technologyIntro,
  title as technologyTitle
} from './technology.mdx';
import { technologyGroups } from './technology.js';
import TechnologyHighlightCard from '../../components/cards/technology-highlight-card';
import TravelCard from '../../components/cards/travel-card';
import '../page.css';
import './about-me.css';
import TravelContent, { title as travelTitle } from './travel.mdx';
import { travelDestinations } from './travel.js';

const getSidebarLinkClass = ({ isActive }) =>
  `about-sidebar-link${isActive ? ' active' : ''}`;

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

export function HomebrewingPage() {
  return (
    <>
      <h1 className="page-heading">{homebrewingTitle}</h1>
      <div className="about-page-content">
        <HomebrewingContent />
        <div className="homebrew-beer-grid">
          {beers.map(({ name, image, description, abv }) => (
            <BeerCard
              key={name}
              name={name}
              image={image}
              description={description}
              abv={abv}
            />
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
        <p>{technologyIntro}</p>
        <section
          className="technology-highlights"
          aria-labelledby="technology-highlights-heading"
        >
          <h2 id="technology-highlights-heading">
            Technologies I work with most
          </h2>
          <div className="technology-highlight-grid">
            {technologyGroups.map(({ name, technologies }) => (
              <TechnologyHighlightCard
                key={name}
                name={name}
                technologies={technologies}
              />
            ))}
          </div>
        </section>
        <TechnologyContent />
      </div>
    </>
  );
}

export function TravelPage() {
  return (
    <>
      <h1 className="page-heading">{travelTitle}</h1>
      <div className="about-page-content">
        <TravelContent />
        <div className="travel-card-grid">
          {travelDestinations.map((destination) => (
            <TravelCard key={destination.destination} {...destination} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutMe;
