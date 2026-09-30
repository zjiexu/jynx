import './App.css'

const learningAreas = [
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

const projects = [
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

const contactLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/zjiexu',
    isExternal: true,
  },
  {
    label: 'Email',
    url: 'mailto:zjiexu@gmail.com',
    isExternal: false,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zjiexu/',
    isExternal: true,
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="site-name" href="/">
          Jynx
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          <p className="section-label">Software Developer</p>

          <h1>Hi, I am Zhijie.</h1>

          <p className="intro-text">
            I'm building my foundation in software development through practical projects, clean code, and continuous learning.
          </p>

          <div className="intro-actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="summary-panel" aria-label="Portfolio summary">
          <p className="panel-label">Current Direction</p>

          <h2>Software Engineering</h2>

          <p>
            Learning core development skills while building projects that focus on usability, structure, and maintainable code.
          </p>
        </aside>
      </section>

      <section className="content-section" id="projects">
        <div className="section-heading">
          <p className="section-label">Projects</p>
          <h2>Selected Work</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-header">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                </div>

                <span className="project-status">{project.status}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <ul className="project-tools" aria-label={`${project.title} technologies`}>
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.links.map((link) => (
                  <a href={link.url} key={link.label} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="skills">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2>Currently Learning</h2>
        </div>

        <div className="learning-grid">
          {learningAreas.map((area) => (
            <article className="learning-card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="contact">
        <div className="section-heading">
          <p className="section-label">Contact</p>
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-content">
          <p className="contact-text">
            I am currently building my software engineering portfolio and open to learning opportunities, collaboration, and feedback.
          </p>

          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                href={link.url}
                key={link.label}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>Built by Zhijie.</p>
        <p>Deployed with GitHub Pages.</p>
      </footer>
    </main>
  )
}

export default App
