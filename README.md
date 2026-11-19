# John Yacuta's Personal Website

A personal website built with React, Vite, React Bootstrap, and MDX. Vite handles local development and production builds, while MDX lets page content be written in Markdown and rendered as React components.

## Requirements

- Node.js compatible with the Vite version in `package.json`, and npm.

## Getting Started

Install dependencies:

```sh
npm install
```

Start the Vite development server:

```sh
npm run start
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173). The page updates as you edit files.

## Project Structure

- `src/App.jsx` defines the application layout and routes.
- `src/pages/` contains each page. The `.jsx` files define layout; accompanying `.mdx` files hold Markdown content.
- `src/tests/` contains page-level tests written with Vitest and React Testing Library.
- `src/components/` contains shared components such as the navbar and footer.
- `public/` contains static assets.
- `vite.config.mjs` configures Vite, React, MDX, and the Vitest test environment.

### Writing page content

Write page copy and headings in the page's `.mdx` file using Markdown. MDX also supports JavaScript exports, which pages can use for content such as a title:

```mdx
export const title = 'About Me';

This content is written in Markdown.
```

Import the MDX file from the page's `.jsx` file to render it as a React component.

## Tests

Run the page tests once:

```sh
npm test
```

The tests use Vitest, jsdom, and React Testing Library to check that each page renders its basic content and navigation.

## Build and Preview

Create a production build in `build/`:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run serve
```

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` runs tests, builds, and deploys the site when changes reach `main`, including merged pull requests. Pushes that change only `README.md` or files under `.github/` are ignored. The workflow can also be started manually from the repository's **Actions** tab.

For the first deployment, open the repository's **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
