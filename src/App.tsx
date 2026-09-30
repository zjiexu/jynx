import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import LearningSection from './components/LearningSection'
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

      <LearningSection areas={learningAreas} />

      <ContactSection links={contactLinks} />

      <Footer />
    </main>
  )
}

export default App
