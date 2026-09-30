import type { LearningArea } from '../data'

type LearningSectionProps = {
  areas: LearningArea[]
}

function LearningSection({ areas }: LearningSectionProps) {
  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <p className="section-label">Skills</p>
        <h2>Currently Learning</h2>
      </div>

      <div className="learning-grid">
        {areas.map((area) => (
          <article className="learning-card" key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LearningSection
