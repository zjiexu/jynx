import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import LearningSection from './components/LearningSection'
import ProjectsSection from './components/ProjectsSection'
import { contactLinks, learningAreas, projects } from './data'
import './App.css'

function App() {
  return (
    <main className="site-shell" id="top">
      <Header />
      <IntroSection />
      <ProjectsSection projects={projects} />
      <LearningSection areas={learningAreas} />
      <ContactSection links={contactLinks} />
      <Footer />
    </main>
  )
}

export default App
