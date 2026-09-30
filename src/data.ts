export type LearningArea = {
  title: string
  description: string
}

type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  type: string
  title: string
  status: string
  description: string
  tools: string[]
  links: ProjectLink[]
}

export type ContactLink = {
  label: string
  url: string
  isExternal: boolean
}

export const learningAreas: LearningArea[] = [
  {
    title: 'Frontend Foundations',
    description:
      'HTML, CSS, JavaScript, responsive layouts, and accessible interface structure.',
  },
  {
    title: 'React Development',
    description:
      'Components, props, state, TypeScript, and building maintainable single-page applications.',
  },
  {
    title: 'Developer Workflow',
    description:
      'Git, GitHub, project organization, deployment, and writing clearer documentation.',
  },
]

export const projects: Project[] = [
  {
    type: 'Portfolio Website',
    title: 'Jynx',
    status: 'In Progress',
    description:
      'A personal developer portfolio built to practice frontend structure, responsive design, version control, and GitHub Pages deployment.',
    tools: ['React', 'TypeScript', 'Vite', 'CSS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/zjiexu/jynx',
      },
      {
        label: 'Live Site',
        url: 'https://zjiexu.github.io/jynx/',
      },
    ],
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/zjiexu',
    isExternal: true,
  },
  {
    label: 'Email',
    url: 'mailto:zjiexuo@gmail.com',
    isExternal: false,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zjiexu/',
    isExternal: true,
  },
]
