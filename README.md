# Jynx

Personal developer portfolio website.

## Overview

Jynx is a personal portfolio website built to present my software development projects, current learning progress, and contact information. The project is also used to practice React components, typed data, responsive layout, and GitHub Pages deployment.

## Live Site

https://zjiexu.github.io/jynx/

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- GitHub Pages

## Features

- Responsive portfolio homepage with desktop and mobile layouts
- Component-based React structure
- Typed portfolio data with TypeScript
- Project, learning, and contact sections
- Project cards with tools, links, and key learning notes
- Dark minimalist visual design with subtle interaction states
- GitHub Pages deployment

## Project Structure

```text
src/
  components/
    ContactSection.tsx
    Footer.tsx
    Header.tsx
    IntroSection.tsx
    LearningSection.tsx
    ProjectsSection.tsx
  App.tsx
  App.css
  data.ts
  index.css
  main.tsx
```

- `src/App.tsx` composes the main page sections.
- `src/components/` contains reusable UI sections.
- `src/data.ts` stores typed portfolio content used by the page.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```
