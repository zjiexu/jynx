import Footer from './components/Footer'
import Header from './components/Header'
import ProjectsSection from './components/ProjectsSection'
import { contactLinks, learningAreas, projects } from './data'
import './App.css'

function App() {
  return (
    <main className="site-shell">
      <Header />

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

      <ProjectsSection projects={projects} />

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

      <Footer />
    </main>
  )
}

export default App
