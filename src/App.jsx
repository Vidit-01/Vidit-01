import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  ['01', 'Abstract', 'article', 'abstract'],
  ['02', 'Introduction', 'subject', 'introduction'],
  ['03', 'Education', 'school', 'education'],
  ['04', 'Work Exp', 'psychology', 'work-exp'],
  ['05', 'Projects', 'code_blocks', 'project'],
  ['06', 'Publications', 'format_list_bulleted', 'publications'],
  ['07', 'Hobbies', 'favorite', 'hobbies'],
]

const publications = [
  {
    id: 'attention-PR-geometry',
    tone: 'light',
    citation: 'Gupta, V. (2026)',
    title: 'Query Expansion and Key Specialization in Transformer Attention Geometry',
    label:"Arxiv",
    description:
      'This paper shows that query and key projections evolve asymmetrically during training — queries expand while keys specialize — causally controlling attention sharpness. Initialization acts as a persistent geometric prior shaping these dynamics even when validation losses converge.',
    
  },
]

const projects = [
  {
    id: 'attention-geometry-dynamics',
    type: 'Interactive Visualization',
    title: 'Attention-Geometry-Dynamics',
    description:
      'An interactive playground for visualizing how different attention heads interact within a geometric space. This project investigates the spatial emergent properties of multi-head structures in large language models.',
    tags: ['WebGL', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Fig 5.1 / Attention Manifold Reconstruction',
    feature: true,
  },
  {
    id: 'systems-from-scratch',
    type: 'System',
    title: 'Systems-from-Scratch',
    quote: 'Optimizing at the metal is the only way to truly understand the spirit of the machine.',
    description:
      'A pedagogical archive documenting the construction of a custom neural inference engine from the ground up.',
    tags: ['System', 'C++'],
    repository: true,
  },
  {
    id: 'api-drift-agent',
    type: 'Project_Log.log',
    title: 'API-Drift-Agent',
    description:
      'A research tool for monitoring and mitigating distribution shift in production LLM APIs. Implements real-time KL-divergence tracking across heterogeneous model endpoints.',
    tags: ['Monitoring', 'LLM'],
  },
  {
    id: 'postmortem',
    type: 'Marginalia & Failed States',
    title: 'Postmortem',
    description:
      "A curated collection of marginalia from failed experiments and what they taught about model convergence. Because the path to success is paved with gradients that didn't flow.",
    links: ['Read Entry #12', 'Read Entry #45'],
    failed: true,
  },
  {
    id: 'query-key-lab',
    type: 'Mechanistic Study',
    title: 'Query-Key-Lab',
    description:
      'A notebook-driven lab for probing query expansion and key specialization during transformer training runs.',
    tags: ['Attention', 'Geometry'],
  },
  {
    id: 'manifold-notes',
    type: 'Archive Tooling',
    title: 'Manifold Notes',
    description:
      'A small research notebook system that links experiment logs, diagrams, and paper references into one manuscript-like workspace.',
    tags: ['Research UX', 'Notes'],
  },
  {
    id: 'checkpoint-atlas',
    type: 'Model Observatory',
    title: 'Checkpoint Atlas',
    description:
      'Visual compares of model checkpoints over time, built to make subtle training dynamics visible before metrics flatten them.',
    tags: ['Visualization', 'ML'],
  },
]

function Sidebar({ activeId = 'abstract' }) {
  return (
    <aside className="sidebar" data-active-section={activeId} aria-label="Archive navigation">
      <div>
        <div className="brand-block">
          <h1>ARCHIVE.01</h1>
          <p>Vol. 2024 / Portfolio</p>
        </div>

        <nav className="archive-nav">
          {navItems.map(([number, label, icon, id]) => (
            <a className={id === activeId ? 'active' : ''} href={`/#${id}`} key={id}>
              <span className="material-symbols-outlined" aria-hidden="true">
                {icon}
              </span>
              <span>{number} {label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
       
        <a className="pdf-button" href="/#publications">Request Full PDF</a>
        
      </div>
    </aside>
  )
}

function SectionHeader({ number, title, eyebrow }) {
  return (
    <div className="section-header">
      <div className="section-rule">
        <span>Section [{number}]</span>
      </div>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

function Tags({ items }) {
  return (
    <div className="tag-row">
      {items.map((tag) => (
        <span className={tag.startsWith('#') ? 'hash' : ''} key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function CompactProjectCard({ project, className = '' }) {
  return (
    <article className={`compact-project-card ${project.failed ? 'failed' : ''} ${className}`}>
      <div className="project-card-head">
        <p className="citation">{project.type}</p>
        {project.failed ? <span className="failure-dot" aria-hidden="true" /> : null}
      </div>
      <h3>{project.title}</h3>
      {project.quote ? <blockquote>{project.quote}</blockquote> : null}
      <p>{project.description}</p>
      {project.tags ? <Tags items={project.tags} /> : null}
      {project.links ? (
        <div className="project-links">
          {project.links.map((link) => (
            <a href="#project" key={link}>{link}</a>
          ))}
        </div>
      ) : null}
      {project.failed ? (
        <figure className="failure-polaroid" aria-label="Loss spike placeholder">
          <div>
            <span className="material-symbols-outlined" aria-hidden="true">error</span>
          </div>
          <figcaption>Loss Spike #009</figcaption>
        </figure>
      ) : null}
      <a className="repo-link" href="#project">
        <span>View Repository</span>
        <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
      </a>
    </article>
  )
}

function TimelineItem({ role, company, start, end, children }) {
  return (
    <article className="timeline-item">
      <div className="venue-label">
        {start} - {end}
      </div>
      <p className="citation">{company}</p>
      <h3>{role}</h3>
      {/* <dl className="work-meta">
        <div>
          <dt>Role</dt>
          <dd>{role}</dd>
        </div>
        <div>
          <dt>Company</dt>
          <dd>{company}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>
            {start} - {end}
          </dd>
        </div>
      </dl> */}
      <p>{children}</p>
    </article>
  )
}

function FeaturedProjectCard({ project }) {
  return (
    <article className="featured-project-card">
      <div>
        <div className="featured-project-meta">
          <p className="citation">{project.type}</p>
          <Tags items={project.tags} />
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <figure className="taped-image blueprint-image">
        <img src={project.image} alt="" />
        <figcaption>{project.caption}</figcaption>
        <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
      </figure>
      <a className="repo-link" href="#project">
        <span>View Repository</span>
        <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
      </a>
    </article>
  )
}

function ProjectsArchive({ expanded = false }) {
  const visibleProjects = expanded ? projects : projects.slice(0, 4)
  const [featured, repository, apiDrift, postmortem, ...secondary] = visibleProjects
  const orderedProjects = expanded
    ? [repository, postmortem, apiDrift, ...secondary]
    : [repository, postmortem, apiDrift]

  return (
    <div className={`projects-archive ${expanded ? 'expanded' : ''}`}>
      <div className="reference-section-title">
        <SectionHeader number="5" title="Projects"  />
      </div>

      <div className="projects-layout">
        <FeaturedProjectCard project={featured} />
        {orderedProjects.filter(Boolean).map((project) => (
          <CompactProjectCard
            project={project}
            className={project.repository ? 'repository-card' : ''}
            key={project.id}
          />
        ))}
      </div>

      {!expanded ? (
        <a className="show-more-button" href="/projects">
          <span>Show More</span>
          <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
        </a>
      ) : null}
    </div>
  )
}

function EducationSection() {
  return (
    <section className="page-section " id="education">
      <SectionHeader number="3" title="Academic Background" />
      

      <div className="education-grid">
        <figure className="taped-image edu-image first">
          <img
            src="https://www.collegebatch.com/static/clg-gallery/dwarkadas-j-sanghvi-college-of-engineering-mumbai-213187.webp"
            alt=""
          />
          <figcaption>Fig 4.1: DJSCE - Undergrad Studies</figcaption>
        </figure>

        <div className="edu-copy">
          <a className="institution-card" href="#education">
            <span>Institutional Link</span>
            Dwarkadas J. Sanghvi College of Engineering
          </a>
          <p>
            Currently pursuing a <mark>B.Tech in Computer Science</mark> at Dwarkadas J. Sanghvi College of Engineering,
            Mumbai (2024-2028)
          </p>
        </div>

        <div className="edu-copy lower">
          <a className="institution-card" href="#education">
            <span>Institutional Link</span>
            Jawahar Navodaya Vidyalaya, Palghar
          </a>
      <p>
            The academic journey began with a rigorous focus on the core sciences. My time at JNV Palghar provided a
            robust foundation in <mark>Mathematics and Physics</mark>, fostering the analytical mindset essential for
            advanced computational research.
       </p>
        </div>

        <figure className="taped-image edu-image second">
          <img
            src="https://i.ytimg.com/vi/Z8OP6dPXtSY/sddefault.jpg"
            alt=""
          />
          <figcaption>Fig 4.2: JNV Palghar - Early Foundations</figcaption>
        </figure>
      </div>
    </section>
  )
}

function PublicationCard({ publication }) {
  return (
    <article className={`publication-card ${publication.tone ?? 'light'}`}>
      <div className="venue-label">{publication.label}</div>
      <p className="citation">{publication.citation}</p>
      <h3>{publication.title}</h3>
      <p>{publication.description}</p>

      {/* {publication.details?.length ? (
        <div className="findings-grid">
          {publication.details.map((detail) => (
            <div key={detail.label}>
              <span>{detail.label}</span>
              <p>{detail.value}</p>
            </div>
          ))}
        </div>
      ) : null} */}

      {/* {publication.note ? <blockquote>{publication.note}</blockquote> : null} */}

      {/* <Tags items={publication.tags} /> */}
    </article>
  )
}

function App() {
  const isProjectsPage = window.location.pathname === '/projects'
  const [activeId, setActiveId] = useState(isProjectsPage ? 'project' : 'abstract')

  useEffect(() => {
    const images = [...document.querySelectorAll('.taped-image')]
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-screen-focus', entry.isIntersecting)
        })
      },
      {
        rootMargin: '-28% 0px -28% 0px',
        threshold: 0.35,
      },
    )

    images.forEach((image) => imageObserver.observe(image))

    return () => imageObserver.disconnect()
  }, [isProjectsPage])

  useEffect(() => {
    if (isProjectsPage) return undefined

    const sectionIds = navItems.map(([, , , id]) => id)
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    let frameId = 0

    const updateActiveSection = () => {
      const focusLine = window.innerHeight * 0.36
      let currentId = sections[0]?.id ?? 'abstract'

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= focusLine) {
          currentId = section.id
        }
      })

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        currentId = sections.at(-1)?.id ?? currentId
      }

      setActiveId(currentId)
    }

    const requestActiveUpdate = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateActiveSection)
    }

    frameId = requestAnimationFrame(updateActiveSection)
    window.addEventListener('scroll', requestActiveUpdate, { passive: true })
    window.addEventListener('resize', requestActiveUpdate)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestActiveUpdate)
      window.removeEventListener('resize', requestActiveUpdate)
    }
  }, [isProjectsPage])

  return (
    <>
      <Sidebar activeId={activeId} />
      <main className="manuscript-shell">
        {isProjectsPage ? (
          <article className="manuscript project-manuscript">
            <section className="title-area page-section projects-title" id="project">
              <p className="red-script">Portfolio / Machine Learning / Build Log</p>
              <h2>
                Project Archive <br />
                <em>Extended Index.</em>
              </h2>
            </section>

            <section className="page-section">
              <ProjectsArchive expanded />
            </section>
          </article>
        ) : (
        <article className="manuscript">
          <section className="title-area page-section" id="title">
            <aside className="marginalia">*Note: Portfolio compiled as a research manuscript and archive index.</aside>
            <p className="red-script">Portfolio / Machine Learning / Research Systems</p>
            <h2>
              Vidit Gupta <br />
              <em>Research Portfolio.</em>
            </h2>
          </section>

          <section className="page-section" id="abstract">
            <SectionHeader number="1" title="Abstract" eyebrow="Manuscript summary" />
            <div className="abstract-card">
              <p>
                This portfolio archives my work across machine learning, data science, systems thinking, and human-centered
                research. It frames education, experience, projects, publications, and personal influences as connected
                evidence for a single research practice: building rigorous tools that remain legible to people.
              </p>
            </div>
          </section>

          <section className="page-section" id="introduction">
            <SectionHeader number="2" title="Introduction" eyebrow="Research position" />
            <div className="two-column-text">
              <p>
                My work begins with a practical question: how do intelligent systems become understandable enough to trust,
                critique, and improve? I am interested in the structure beneath model behavior, from attention geometry to
                reproducible research tooling.
              </p>
              <p>
                The archive format reflects how I think: empirical notes, sharp metadata, clear provenance, and room for
                interpretation. Each section below is a compact record of the training, work, projects, and intellectual
                influences that shape that practice.
              </p>
            </div>
          </section>

          <EducationSection />

          <section className="page-section" id="work-exp">
            <SectionHeader number="4" title="Work Experience" eyebrow="Applied practice" />
            <div className="publication-stack">
              <TimelineItem
                role="Machine Learning Intern"
                company="IIT Rourkee"
                start="May 2026"
                end="Present"
              >
                Designed experimental pipelines, evaluated model behavior, and translated research questions into
                reproducible notebooks, demos, and technical documentation.
              </TimelineItem>
              
            </div>
          </section>

          <section className="page-section" id="project">
            <ProjectsArchive />
          </section>

          <section className="page-section" id="publications">
            <SectionHeader number="6" title="Publications" eyebrow="Reference list" />
            <div className="publication-stack">
              {publications.map((publication) => (
                <PublicationCard publication={publication} key={publication.id} />
              ))}
            </div>
          </section>

          <section className="page-section" id="hobbies">
            <SectionHeader number="7" title="Hobbies" eyebrow="Human factor" />
            <div className="hobby-grid">
              <blockquote>
                "The universe has a beginning, but no end. Infinite. Stars, too, have a beginning, but their own power
                results in their destruction. Finite."
                <span>- Fragment from Steins;Gate</span>
              </blockquote>
              <div className="curation-box">
                <h3>Current Curations</h3>
                <ul>
                  <li>Stoic Philosophy</li>
                  <li>Temporal Dynamics</li>
                  <li>Visual Semiotics</li>
                  <li>Abstract Minimalism</li>
                </ul>
              </div>
            </div>
            <p className="closing-note">
              Hobbies are parallel tracks of inquiry: narrative systems, philosophy, visual culture, and the small rituals
              that keep technical work humane.
            </p>
          </section>
        </article>
        )}

        <footer className="page-footer">
          <span>v2.1.0-beta | Commit: 8f2a1c | 2024-10-24</span>
          <div>
            <a href="/#title">Top</a>
            <a href="/#publications">Citations</a>
            <a href="/#hobbies">Archive Index</a>
          </div>
        </footer>
      </main>

      <a className="floating-attachment" href={isProjectsPage ? '#project' : '#title'} aria-label="Back to top">
        <span className="material-symbols-outlined" aria-hidden="true">
          vertical_align_top
        </span>
      </a>
    </>
  )
}

export default App
