# My Portfolio

A modern architectural portfolio built with React, TypeScript, and Vite. The site presents selected work, services, an about section, and a contact area through a refined visual system inspired by editorial architecture portfolios.

## Overview

This project is a responsive single-page portfolio for an architectural designer. It focuses on clean composition, subtle motion, project filtering, custom illustrations, and a calm visual identity.

## Features

- Responsive single-page layout
- Hero section with custom illustration and portfolio stats
- Selected work section with project cards and category filtering
- About, services, contact, and footer sections
- Smooth in-view animations using Intersection Observer
- Custom cursor effect on desktop
- Mobile navigation menu
- TypeScript-first React component structure
- Production build with Vite
- ESLint configured for code quality

## Tech Stack

- React
- TypeScript
- Vite
- ESLint
- CSS-in-JS style objects

## Project Structure

```text
my-portfolio/
|-- public/
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- components/
|   |   |-- Header.tsx
|   |   |-- HeroSection.tsx
|   |   |-- WorkSection.tsx
|   |   |-- ProjectCard.tsx
|   |   |-- AboutSection.tsx
|   |   |-- ServicesSection.tsx
|   |   |-- ContactSection.tsx
|   |   `-- Footer.tsx
|   |-- data/
|   |   `-- index.ts
|   |-- hooks/
|   |   `-- index.ts
|   |-- styles/
|   |   `-- index.ts
|   |-- types/
|   |   `-- index.ts
|   |-- App.tsx
|   `-- main.tsx
|-- index.html
|-- package.json
|-- tsconfig.json
`-- vite.config.ts
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode with Vite.

```bash
npm run build
```

Creates a production build in the `dist` folder.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run preview
```

Serves the production build locally for preview.

## Deployment

The project is ready to deploy on platforms such as Vercel, Netlify, GitHub Pages, or any static hosting service.

Recommended deployment settings:

```text
Build command: npm run build
Output directory: dist
Framework: Vite / React
```

## Production Check

Before deploying, run:

```bash
npm run build
npm run lint
```

Both commands should complete without errors.

## Customization

Main content can be edited from:

- `src/data/index.ts` for navigation, projects, services, and categories
- `src/components/HeroSection.tsx` for hero copy and headline
- `src/styles/index.ts` for colors, spacing, typography, and layout styles
- `index.html` for page title, meta tags, and favicon

## License

This project is private and intended for personal portfolio use.
