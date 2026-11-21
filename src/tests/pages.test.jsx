import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import TravelCard from '../components/cards/travel-card';
import { travelDestinations } from '../pages/about-me/travel.js';
import { personalProjects } from '../pages/projects/personal-projects.js';
import { workProjects } from '../pages/projects/work-projects.js';
import AboutMe, {
  AboutContent,
  HomebrewingPage,
  TechnologyPage,
  TravelPage,
} from '../pages/about-me';

afterEach(cleanup);

function renderAboutRoute(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/about-me" element={<AboutMe />}>
          <Route index element={<AboutContent />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="homebrewing" element={<HomebrewingPage />} />
          <Route path="travel" element={<TravelPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe('site pages', () => {
  it('renders the home introduction, profile image, and project link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: "Hi, I'm John." })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'John Yacuta' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View projects' })).toHaveAttribute('href', '/projects');
  });

  it('renders the personal and work projects sections', () => {
    render(<Projects />);

    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByText('Personal Projects')).toBeInTheDocument();
    expect(screen.getByText('Work Projects')).toBeInTheDocument();
    expect(screen.getByText('Zip Co')).toBeInTheDocument();
    expect(screen.getByText('Base64 Converter')).toBeInTheDocument();
    expect(
      screen.getByText('AI Enablement & Platform Delivery')
    ).toBeInTheDocument();
  });

  it('opens employer and project detail disclosures', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const employerSummary = screen.getByText('Zip Co');
    const employerDetails = employerSummary.closest('details');
    await user.click(employerSummary);
    expect(employerDetails).toHaveAttribute('open');

    const projectSummary = screen.getByText('AI Enablement & Platform Delivery');
    const projectDetails = projectSummary.closest('details');
    await user.click(projectSummary);
    expect(projectDetails).toHaveAttribute('open');
  });

  it('renders the About page and its section navigation', () => {
    renderAboutRoute('/about-me');

    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'About Me sections' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Technology' })).toBeInTheDocument();
  });

  it('navigates to Homebrewing and closes the sidebar', async () => {
    const user = userEvent.setup();
    renderAboutRoute('/about-me');

    const toggle = screen.getByRole('button', { name: 'About Me sections' });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(screen.getByRole('link', { name: 'Homebrewing' }));

    expect(screen.getByRole('heading', { name: 'Homebrewing' })).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders the Technology page content', () => {
    renderAboutRoute('/about-me/technology');

    expect(screen.getByRole('heading', { name: 'Technology' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Technologies I work with most' })
    ).toBeInTheDocument();
    [
      'Azure',
      'AWS',
      'Python',
      'TypeScript',
      'JavaScript',
      'Terraform',
      'Crossplane',
      'GitHub Actions',
      'Argo CD',
      'Kubernetes',
      'Dynatrace',
      'Datadog',
      'Grafana',
      'Kibana',
    ].forEach((technology) => {
      expect(screen.getByText(technology)).toBeInTheDocument();
    });
    expect(screen.getByText(/building and operating Kubernetes platforms/i)).toBeInTheDocument();
  });

  it('renders the Homebrewing page and its beer cards', () => {
    renderAboutRoute('/about-me/homebrewing');

    expect(screen.getByRole('heading', { name: 'Homebrewing' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'The Innkeeper Ale' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Nut Brown Ale' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Bavarian Hefeweizen' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Irish Red Ale' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'The Innkeeper Ale' })).toHaveAttribute(
      'src',
      '/pages/about-me/homebrewing/the-innkeeper-ale.webp'
    );
    expect(screen.getAllByText('ABV:')).toHaveLength(4);
    expect(screen.getByText(/banana and clove aromas/i)).toBeInTheDocument();
  });

  it('renders the Travel page', () => {
    renderAboutRoute('/about-me/travel');

    expect(screen.getByRole('heading', { name: 'Travel' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Prague, Czech Republic' })
    ).toBeInTheDocument();
    expect(screen.getAllByText('August - September 2026')).toHaveLength(3);
    expect(screen.getByRole('img', { name: 'Prague, Czech Republic' })).toHaveAttribute(
      'src',
      '/pages/about-me/travel/prague.jpg'
    );
    expect(screen.getByRole('link', { name: 'Prague Castle' })).toHaveAttribute(
      'href',
      'https://www.hrad.cz/en/prague-castle-for-visitors'
    );
    expect(screen.getByRole('link', { name: 'Caravana cafebar' })).toHaveAttribute(
      'href',
      'https://maps.app.goo.gl/gTLooy8NqC6M3Bg67'
    );
  });

  it('renders multiple places and restaurants in a travel card', () => {
    render(
      <TravelCard
        destination="Sample destination"
        image="/sample.jpg"
        visited="May 2026"
        description="A sample trip."
        recommendations={[
          {
            category: 'Places to visit',
            items: [
              { name: 'Museum', url: '/museum' },
              { name: 'Park', url: '/park' },
            ],
          },
          {
            category: 'Favorite restaurants',
            items: [
              { name: 'Cafe', url: '/cafe' },
              { name: 'Bistro', url: '/bistro' },
            ],
          },
        ]}
      />
    );

    expect(screen.getByRole('link', { name: 'Museum' })).toHaveAttribute('href', '/museum');
    expect(screen.getByRole('link', { name: 'Park' })).toHaveAttribute('href', '/park');
    expect(screen.getByRole('link', { name: 'Cafe' })).toHaveAttribute('href', '/cafe');
    expect(screen.getByRole('link', { name: 'Bistro' })).toHaveAttribute('href', '/bistro');
  });

  it('has complete travel recommendation data', () => {
    expect(travelDestinations.length).toBeGreaterThan(0);

    travelDestinations.forEach((destination) => {
      expect(destination.destination).toBeTruthy();
      expect(destination.image).toBeTruthy();
      expect(destination.visited).toBeTruthy();
      expect(destination.recommendations.length).toBeGreaterThan(0);

      destination.recommendations.forEach(({ category, items }) => {
        expect(category).toBeTruthy();
        expect(Array.isArray(items)).toBe(true);
        expect(items.length).toBeGreaterThan(0);

        items.forEach(({ name, url }) => {
          expect(name).toBeTruthy();
          expect(url).toMatch(/^https?:\/\//);
        });
      });
    });
  });

  it('has complete personal and work project data', () => {
    expect(personalProjects.length).toBeGreaterThan(0);
    personalProjects.forEach(({ name, description }) => {
      expect(name).toBeTruthy();
      expect(description).toBeTruthy();
    });

    expect(workProjects.length).toBeGreaterThan(0);
    workProjects.forEach(({ employer, highlights, projects }) => {
      expect(employer).toBeTruthy();
      expect(highlights.length).toBeGreaterThan(0);
      expect(projects.length).toBeGreaterThan(0);

      projects.forEach(({ title, details }) => {
        expect(title).toBeTruthy();
        expect(details.length).toBeGreaterThan(0);
        details.forEach((detail) => expect(detail).toBeTruthy());
      });
    });
  });
});
