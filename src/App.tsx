import './App.css'

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
          <article className="project-card">
            <div className="project-header">
              <div>
                <p className="project-type">Portfolio Website</p>
                <h3>Jynx</h3>
              </div>
              
              <span className="project-status">In Progress</span>
            </div>

            <p className="project-description">
              A personal developer portfolio built to practice frontend structure, responsive design, version control, and GitHub Pages deployment.
            </p>

            <ul className="project-tools" aria-label="Technologies used">
              <li>React</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>CSS</li>
            </ul>

            <div className="project-links">
              <a href="https://github.com/zjiexu/jynx">GitHub</a>
              <a href="https://zjiexu.github.io/jynx/">Live Site</a>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section" id="skills">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2>Currently Learning</h2>
        </div>

        <ul className="skill-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Git and GitHub</li>
        </ul>
      </section>

      <section className="content-section" id="contact">
        <div className="section-heading">
          <p className="section-label">Contact</p>
          <h2>Let's Connect</h2>
        </div>

        <p className="contact-text">
          I am currently building my software engineering portfolio and open to learning opportunities, collaboration, and feedback.
        </p>
      </section>
    </main>
  )
}

export default App
