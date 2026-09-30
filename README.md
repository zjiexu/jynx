# Jynx

Personal developer portfolio website.

## Overview

Jynx is a personal portfolio website built to present my software development projects, current learning progress, and contact information.

## Live Site

https://zjiexu.github.io/jynx/

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- GitHub Pages

## Features

- Responsive portfolio homepage
- Project, skills, and contact sections
- Dark minimalist visual design
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
