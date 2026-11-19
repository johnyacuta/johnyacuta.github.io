import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import AboutMe, {
  AboutContent,
  AboutSection,
  HomebrewingPage,
  TechnologyPage,
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
          <Route path="travel" element={<AboutSection title="Travel" />} />
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
  });

  it('renders the About page and its section navigation', () => {
    renderAboutRoute('/about-me');

    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'About Me sections' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Technology' })).toBeInTheDocument();
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
      '/pages/about-me/the-innkeeper-ale.webp'
    );
    expect(screen.getAllByText('ABV:')).toHaveLength(4);
    expect(screen.getByText(/banana and clove aromas/i)).toBeInTheDocument();
  });

  it('renders the Travel page', () => {
    renderAboutRoute('/about-me/travel');

    expect(screen.getByRole('heading', { name: 'Travel' })).toBeInTheDocument();
  });
});
