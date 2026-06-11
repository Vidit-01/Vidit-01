import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  ['01', 'Abstract', 'article', 'abstract'],
  ['02', 'Introduction', 'subject', 'introduction'],
  ['03', 'Education', 'school', 'education'],
  ['04', 'Work Exp', 'psychology', 'work-exp'],
  ['05', 'Projects', 'code_blocks', 'project'],
  ['06', 'Publications', 'format_list_bulleted', 'publications'],
  ['07', 'Achievements', 'workspace_premium', 'achievements'],
  ['08', 'Hobbies', 'favorite', 'hobbies'],
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

const achievements = [
  {
    id: 'reigonal-science-congress',
    // tone: 're',
    eyebrow: '',
    title: 'Presented at Regional Student Science Congress at IIT Gandhinagar',
    description:
      'Developed and presented a facial landmark–based mouse controller that enabled hands-free computer interaction using only a webcam. Built with OpenCV and MediaPipe, the system tracked facial features in real time and converted head movements into cursor actions. The project explored practical applications of computer vision for accessibility, assistive technology, and alternative human-computer interfaces. Presented the work at the Regional Student Science Congress hosted at IIT Gandhinagar',
  },

]

const projects = [
  {
    id: 'api-drift-agent',
    type: 'Developer Tool',
    title: 'API-Drift-Agent',
    description:
      'A CLI tool that detects drift between an OpenAPI 3.x contract and a live FastAPI codebase. Built around two layers: a deterministic static analyzer that classifies exact contract differences and an agent explanation layer using LangChain that reasons about whether the spec or the code should be treated as source of truth.',
    tags: ['Tools', 'Langchain'],
    image: 'https://raw.githubusercontent.com/Vidit-01/api-drift-agent/refs/heads/main/assets/first.gif',
    caption: 'Fig 5.1 / Attention Manifold Reconstruction',
    feature: true,
  },
  {
    id: 'systems-from-scratch',
    type: 'Systems',
    title: 'Systems-from-Scratch',
    description:
    'A personal project of building various systems which developers interact with from ground up. The aim of this project was to understand the systems which abstraction hides. Currently Data Structures, HTTP Server and Storage Engine were made.',
    tags: ['System', 'C++'],
    repository: true,
  },
  
  {id:'origintrace',
    type: 'Product',
    title:' OriginTrace: Recursive Supply Chain Intelligence',
    description:'OriginTrace is an AI-powered supply chain mapping and risk intelligence platform that recursively traces supply networks to raw materials using BOM logic, web data, and generative AI.',
    tags: ['Hackathon','React'],
    image: 'https://raw.githubusercontent.com/Vidit-01/OriginTrace/refs/heads/main/Screenshot%202026-06-10%20205312.png',
    repository: true
  },
  {
    id: 'attention-geometry',
    type: 'Transformers',
    title: 'Attention-Geometry-Dynamics',
    description:
      'A measurement study tracking the internal geometry of a small transformer language model throughout training. Rather than focusing on final performance, this project instruments a standard GPT-style architecture with 18 geometric metrics, covering representation isotropy, weight matrix structure, attention entropy, and Q/K asymmetry, and records how they evolve across 80 epochs.',
    tags: ['Attention', 'LLM'],
    repository: true
  },
]

const contactRows = [
  { label: 'Name', value: 'Gupta, Vidit' },
  { label: 'Institution', value: 'DJSCE Mumbai' },
  { label: 'Email', value: 'viditanupgupta@gmail.com', href: 'mailto:viditanupgupta@gmail.com' },
  { label: 'Codeforces', value: 'noobgrammer256', href: 'https://codeforces.com/profile/noobgrammer256' },
  { label: 'Google Scholar', value: 'Vidit Gupta', href: 'https://scholar.google.com/' },
  { label: 'GitHub', value: 'Vidit-01', href: 'https://github.com/Vidit-01' },
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
       
        <a className="pdf-button" href="/Vidit_Resume.pdf" target="_blank" rel="noreferrer">Resume PDF</a>
        
      </div>
    </aside>
  )
}

function AuthorMetadata({ collapsed, onOpen, onClose }) {
  return (
    <aside className={`author-metadata ${collapsed ? 'is-collapsed' : ''}`} aria-label="Author metadata">
      <button className="contact-pill" type="button" onClick={onOpen}>
        <span className="material-symbols-outlined" aria-hidden="true">alternate_email</span>
        <span>Contact</span>
      </button>
      <div className="metadata-card">
        <button className="metadata-close" type="button" onClick={onClose} aria-label="Collapse contact menu">
          <span className="material-symbols-outlined" aria-hidden="true">close</span>
        </button>
        <h2>Author Metadata</h2>
        <dl>
          {contactRows.map(({ label, value, href }) => (
            <div key={label}>
              <dt>{label}:</dt>
              <dd>
                {href ? (
                  <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}>
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
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
      
      {/* Renders image below title if present */}
      {project.image && !project.failed && (
        <figure className="taped-image project-image" style={{ margin: '14px 0' }}>
          <img src={project.image} alt={project.title} />
        </figure>
      )}

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
  const leftColumnProjects = [postmortem]
  const rightColumnProjects = expanded
    ? [repository, apiDrift, ...secondary]
    : [repository, apiDrift]

  return (
    <div className={`projects-archive ${expanded ? 'expanded' : ''}`}>
      <SectionHeader
        number="5"
        title="Projects"
        eyebrow={expanded ? 'Expanded research archive' : 'Featured research artifacts'}
      />

      <div className="projects-layout">
        <div className="projects-column projects-column-main">
          <FeaturedProjectCard project={featured} />
          {leftColumnProjects.filter(Boolean).map((project) => (
            <CompactProjectCard
              project={project}
              className={`${project.repository ? 'repository-card' : ''} project-${project.id}`}
              key={project.id}
            />
          ))}
        </div>
        <div className="projects-column projects-column-side">
          {rightColumnProjects.filter(Boolean).map((project) => (
            <CompactProjectCard
              project={project}
              className={`${project.repository ? 'repository-card' : ''} project-${project.id}`}
              key={project.id}
            />
          ))}
        </div>
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
          <figcaption>Fig 3.1: DJSCE - Undergrad Studies</figcaption>
        </figure>

        <div className="edu-copy">
          <a className="institution-card" href="#education">
            <span>Institutional Link</span>
            Dwarkadas J. Sanghvi College of Engineering
          </a>
          <p>
            Currently pursuing a <mark>B.Tech in Information Technology</mark> at Dwarkadas J. Sanghvi College of Engineering,
            Mumbai (2024-2028)
          </p>
        </div>

        <div className="edu-copy lower">
          <a className="institution-card" href="#education">
            <span>Institutional Link</span>
            Jawahar Navodaya Vidyalaya, Palghar
          </a>
      <p>
            Jawahar Navodaya Vidyalaya is a selective government residential school, admitting students through a national entrance exam. I studied here from Grade 6 through Grade 12 (2017-2024), living on campus away from home. It is also where I first got introduced to <mark>coding</mark>.
       </p>
        </div>

        <figure className="taped-image edu-image second">
          <img
            src="https://i.ytimg.com/vi/Z8OP6dPXtSY/sddefault.jpg"
            alt=""
          />
          <figcaption>Fig 3.2: JNV Palghar - Early Foundations</figcaption>
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

function AchievementCard({ achievement }) {
  return (
    <article className={`achievement-card ${achievement.tone === 'red' ? 'accent' : ''}`}>
      <p>{achievement.eyebrow}</p>
      <h3>{achievement.title}</h3>
      <span>{achievement.description}</span>
    </article>
  )
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isProjectsPage = pathname === '/projects'
  const [activeId, setActiveId] = useState(isProjectsPage ? 'project' : 'abstract')
  const [isContactAutoCollapsed, setIsContactAutoCollapsed] = useState(false)
  const [isContactManuallyClosed, setIsContactManuallyClosed] = useState(false)
  const [isContactPinnedOpen, setIsContactPinnedOpen] = useState(false)
  const isMetadataOpen = (!isContactAutoCollapsed && !isContactManuallyClosed) || isContactPinnedOpen

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

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - window.innerHeight * 0.18) {
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

  useEffect(() => {
    const updateContactState = () => {
      const shouldCollapse = window.scrollY > 140 || window.innerWidth < 1180
      setIsContactAutoCollapsed(shouldCollapse)
      if (!shouldCollapse) {
        setIsContactPinnedOpen(false)
      }
    }

    updateContactState()
    window.addEventListener('scroll', updateContactState, { passive: true })
    window.addEventListener('resize', updateContactState)

    return () => {
      window.removeEventListener('scroll', updateContactState)
      window.removeEventListener('resize', updateContactState)
    }
  }, [])

  return (
    <>
      <Sidebar activeId={activeId} />
      <AuthorMetadata
        collapsed={!isMetadataOpen}
        onOpen={() => {
          setIsContactManuallyClosed(false)
          setIsContactPinnedOpen(true)
        }}
        onClose={() => {
          setIsContactManuallyClosed(true)
          setIsContactPinnedOpen(false)
        }}
      />
      <main className={`manuscript-shell ${isMetadataOpen ? 'metadata-open' : 'metadata-collapsed'}`}>
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
                I'm a second-year CS undergrad at DJSCE Mumbai, and I'm obsessed with understanding the internal geometry of models. I have been exploring the initialization effects of Transformers on Wq and Wk matrix. I love build things from scratch to understand them. I'm actively looking to do research, bring whatever I have, and learn the rest.
              </p>
            </div>
          </section>

          <section className="page-section" id="introduction">
            <SectionHeader number="2" title="Introduction" eyebrow="Research position" />
            <div className="two-column-text">
              <p>
                I love to understand how things work. For me the mechanism below the surface is as important as the outcome. When I started to learn coding when I was thirteen, it caught my interest as I could understand how some of the technology works.   
              </p>
              <p>
                I would like to bring the joy of understanding to AI Research, which in turn might help us in the goal of making a efficient superintelligent system which works with people to solve greatest problems in Physics, Mathematics and formal Sciences.
              </p>
            </div>
          </section>

          <EducationSection />

          <section className="page-section" id="work-exp">
            <SectionHeader number="4" title="Work Experience" eyebrow="Applied practice" />
            <div className="publication-stack">
              <TimelineItem
                role="Machine Learning Intern"
                company="IIT Roorkee"
                start="May 2026"
                end="Present"
              >
                Contributing to a research project on drought prediction in India using climatic and environmental datasets. Working on exploratory analysis, feature engineering, and evaluating machine learning approaches for forecasting drought conditions. Gaining experience with geospatial and time-series data while supporting model development and experimentation.
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

          <section className="page-section" id="achievements">
            <SectionHeader number="7" title="Achievements" eyebrow="Selected recognitions" />
            <div className="achievement-stack">
              {achievements.map((achievement) => (
                <AchievementCard achievement={achievement} key={achievement.id} />
              ))}
            </div>
          </section>

          <section className="page-section" id="hobbies">
            <SectionHeader number="8" title="Hobbies" eyebrow="Human factor" />

            {/* Two-column: left = quote + text, right = Steins;Gate image */}
            <div className="hobby-header">
              <div className="hobby-header-left">
                <blockquote className="hobby-quote">
                  "If you want to grant your own wish, then you should clear your own path to it."
                  <span>- Makise Kurisu from Steins;Gate</span>
                </blockquote>
                <p className="closing-note">
                  Apart from coding, I spend my free time watching anime and YouTube. My favourite shows include Steins;Gate, Love is War and Attack on Titan. My favourite YouTuber is Vsauce. I also love debates and discussions around philosophy. I like space travel. I grew watching and playing Pokemon. I still play Minecraft sometimes. My favourite computer scientist is Claude Shanon
                </p>
              </div>

              <figure className="taped-image hobby-feature-img" style={{ transform: 'rotate(-1.8deg)' }}>
                <img
                  src="https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
                  alt="Steins;Gate anime"
                />
                <figcaption>Fig 7.1 / Steins;Gate &mdash; Anime</figcaption>
              </figure>
            </div>

          </section>

        </article>
        )}

        <footer className="page-footer">
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
