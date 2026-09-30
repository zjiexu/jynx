import type { ContactLink } from '../data'

type ContactSectionProps = {
  links: ContactLink[]
}

function ContactSection({ links }: ContactSectionProps) {
  return (
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
          {links.map((link) => (
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
  )
}

export default ContactSection
