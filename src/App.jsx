import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'

const Brainrot = lazy(() => import('./Brainrot.jsx'))

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
    citation: 'Gupta, V., Nadkarni, S., Chaudhari, M., Sawant, V., Satam, P. (2026)',
    title: 'Query Expansion and Key Specialization in Transformer Attention Geometry',
    label: 'Under Review',
    description:
      'This paper shows that query and key projections evolve asymmetrically during training — queries expand while keys specialize — causally controlling attention sharpness. Initialization acts as a persistent geometric prior shaping these dynamics even when validation losses converge.',
  },
  {
    id: 'residual-stream-geometry',
    tone: 'light',
    citation: 'Gupta, V., Khandagle, P., Katre, N., Machado, S. (2026)',
    title: 'Residual-Stream Geometry in Transformer Language Models',
    label: 'Under Review',
    description:
      'A controlled width study of residual-stream geometry in GPT-style language models on WikiText-2. The hypothesis that effective rank decreases with depth does not hold: rank rises with depth and training, mid-layer capacity utilisation converges to ~79% across widths, and the narrowest model (d=128) generalises better than wider, over-provisioned ones.',
  },
]

const achievements = [
  {
    id: 'best-student-teacher',
    eyebrow: 'JNV Palghar, 2023',
    title: 'Best Student Teacher Award',
    description:
      'Recognized by faculty for outstanding performance in the annual Teachers’ Day student-led teaching program at Jawahar Navodaya Vidyalaya, Palghar.',
  },
  {
    id: 'regional-science-congress',
    eyebrow: 'IIT Gandhinagar, 2022',
    title: 'Regional Student Science Congress',
    description:
      'Developed and presented a facial landmark–based mouse controller that enabled hands-free computer interaction using only a webcam. Built with OpenCV and MediaPipe, the system tracked facial features in real time and converted head movements into cursor actions. Presented at the Regional Student Science Congress hosted at IIT Gandhinagar.',
  },
]

const projects = [
  {
    id: 'attention-geometry',
    type: 'Mechanistic Interp',
    title: 'Attention Geometry & Training Dynamics',
    description:
      'A measurement study of a ~4M-parameter GPT-style language model across 87 epochs. Instruments 18 geometric metrics — attention entropy, Q/K participation ratios, W_q spectral norms, and pre/post-softmax rank — on a WikiText-103 character subset. Finds that queries and keys diverge despite sharing c_attn, and that softmax concentrates a rising-rank logit matrix into a low-rank attention pattern.',
    tags: ['PyTorch', 'Attention'],
    image: 'https://raw.githubusercontent.com/Vidit-01/attention-geometry-dynamics/main/plots/participation_ratio.png',
    caption: 'Fig 5.1 / Q and K participation-ratio divergence by depth',
    url: 'https://github.com/Vidit-01/attention-geometry-dynamics',
    feature: true,
  },
  {
    id: 'language-model-stack',
    type: 'LLM Systems',
    title: 'Language Model Stack: Training to Agents',
    description:
      'End-to-end language-model pipeline from scratch: a modern decoder (custom BPE, RoPE, GQA, SwiGLU MoE), a token-level inference runtime with KV cache and greedy / beam / nucleus / min-p / typical sampling, and a tool-using agent that interrupts decoding, executes tools, and resumes without rebuilding the prompt.',
    tags: ['PyTorch', 'Agents'],
    url: 'https://github.com/Vidit-01/language-model-stack',
    repository: true,
  },
  {
    id: 'representation-geometry',
    type: 'Research Tooling',
    title: 'Representation Geometry',
    description:
      'A published, model-agnostic PyTorch library for measuring transformer representation geometry. Hooks activations, streams covariance with a bounded-memory Welford backend, and computes spectral, SVD, and novelty metrics — participation ratio, stable rank, linear CKA — as versioned artifact bundles on native and Hugging Face models.',
    tags: ['PyTorch', 'PyPI'],
    url: 'https://github.com/Vidit-01/representation-geometry',
    repository: true,
  },
  {
    id: 'residual-geometry',
    type: 'Mechanistic Interp',
    title: 'Residual-Stream Geometry in Transformers',
    description:
      'Width study of residual-stream geometry in 6-layer GPT-style LMs (d=128/256/512) on WikiText-2. Effective rank increases with depth; capacity utilisation converges to ~79% across widths; d=128 generalises better than d=256, while d=512 overfits. Layer 1 drives the main representational change (CKA ~0.55); later layers refine.',
    tags: ['PyTorch', 'Geometry'],
    image: 'https://raw.githubusercontent.com/Vidit-01/transformer-residual-geometry/main/plots/utilisation_ratio_dynamics_midlayer.png',
    url: 'https://github.com/Vidit-01/transformer-residual-geometry',
    repository: true,
  },
  {
    id: 'api-drift-agent',
    type: 'Developer Tool',
    title: 'API Drift Agent',
    description:
      'A CLI that statically diffs OpenAPI 3.x contracts against FastAPI/Pydantic codebases. A deterministic analyzer classifies endpoint, schema, and parameter drift; an optional LangChain layer (Ollama or Groq) explains source-of-truth and proposes patches. Rich TUI, JSON/CI gates, published on PyPI.',
    tags: ['FastAPI', 'LangChain'],
    image: 'https://raw.githubusercontent.com/Vidit-01/api-drift-agent/refs/heads/main/assets/first.gif',
    caption: 'Fig 5.2 / Deterministic drift scan with agent explain layer',
    url: 'https://github.com/Vidit-01/api-drift-agent',
    repository: true,
  },
  {
    id: 'torch-isoflops',
    type: 'Scaling Laws',
    title: 'Torch IsoFLOP',
    description:
      'Harness-agnostic PyTorch library for IsoFLOP / Chinchilla-style scaling experiments. Plans (N, D) grids under a fixed compute budget, counts FLOPs via module hooks, and fits L(N,D) laws plus isoFLOP parabolas with resumable JSONL logs.',
    tags: ['PyTorch', 'IsoFLOP'],
    url: 'https://github.com/Vidit-01/torch-isoflops',
    repository: true,
  },
  {
    id: 'origintrace',
    type: 'Product',
    title: 'OriginTrace: Recursive Supply-Chain Intelligence',
    description:
      'Supply-chain mapping platform that recursively traces supplier networks to raw materials using BOM/HSN logic, web data, and Gemini. Scores each node for SDN/OFAC sanctions, SEC financial risk, and climate disruption on a FastAPI + Next.js stack.',
    tags: ['FastAPI', 'Next.js'],
    image: 'https://raw.githubusercontent.com/Vidit-01/OriginTrace/refs/heads/main/Screenshot%202026-06-10%20205312.png',
    url: 'https://github.com/Vidit-01/OriginTrace',
    repository: true,
  },
  {
    id: 'aria-voice-agent',
    type: 'Product',
    title: 'Aria: Overseas-Education Ecosystem',
    description:
      'Counseling stack combining a WhatsApp RAG bot, a LiveKit/Gemini voice agent, and student/admin web apps with resume analysis, lead triage, and session reporting. FastAPI, React, and Supabase.',
    tags: ['LiveKit', 'Gemini'],
    url: 'https://github.com/Vidit-01/aria-voice-agent',
    repository: true,
  },
  {
    id: 'isl-translate',
    type: 'Applied ML',
    title: 'SignSense: Real-Time Sign Language Translation',
    description:
      'Indian Sign Language pipeline from MediaPipe Holistic landmarks through a sequence classifier and TFLite export, with Gemini turning recognized signs into fluent sentences for accessibility-focused communication.',
    tags: ['MediaPipe', 'TensorFlow'],
    url: 'https://github.com/Vidit-01/ISLTranslate',
    repository: true,
  },
  {
    id: 'cognisense',
    type: 'Applied ML',
    title: 'CogniSense: Cognitive State Monitoring',
    description:
      'Productivity assistant that classifies Focused / Confused / Fatigued from MediaPipe face landmarks plus behaviour signals, then sends Groq nudges through a React dashboard over a FastAPI backend.',
    tags: ['MediaPipe', 'FastAPI'],
    url: 'https://github.com/Vidit-01/CogniSense',
    repository: true,
  },
]

const contactRows = [
  { label: 'Name', value: 'Gupta, Vidit' },
  { label: 'Institution', value: 'DJSCE Mumbai' },
  { label: 'Email', value: 'viditanupgupta@gmail.com', href: 'mailto:viditanupgupta@gmail.com' },
  { label: 'LinkedIn', value: 'vidit-gupta3001', href: 'https://www.linkedin.com/in/vidit-gupta3001/' },
  { label: 'GitHub', value: 'Vidit-01', href: 'https://github.com/Vidit-01' },
  { label: 'Codeforces', value: 'noobgrammer256', href: 'https://codeforces.com/profile/noobgrammer256' },
]

function Sidebar({ activeId = 'abstract' }) {
  return (
    <aside className="sidebar" data-active-section={activeId} aria-label="Archive navigation">
      <div>
        <div className="brand-block">
          <h1>ARCHIVE.01</h1>
          <p>Vol. 2026 / Portfolio</p>
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
       
        <a className="pdf-button" href="/Vidit_Resume.pdf?v=20260822" target="_blank" rel="noreferrer">Resume PDF</a>
        
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
      {project.url ? (
        <a className="repo-link" href={project.url} target="_blank" rel="noreferrer">
          <span>View Repository</span>
          <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
        </a>
      ) : null}
    </article>
  )
}

function TimelineItem({ role, company, start, end, bullets, children }) {
  return (
    <article className="timeline-item">
      <div className="venue-label">
        {start} - {end}
      </div>
      <p className="citation">{company}</p>
      <h3>{role}</h3>
      {bullets?.length ? (
        <ul className="timeline-bullets">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : (
        <p>{children}</p>
      )}
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
      {project.image ? (
        <figure className="taped-image blueprint-image">
          <img src={project.image} alt="" />
          <figcaption>{project.caption}</figcaption>
          <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
        </figure>
      ) : null}
      {project.url ? (
        <a className="repo-link" href={project.url} target="_blank" rel="noreferrer">
          <span>View Repository</span>
          <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
        </a>
      ) : null}
    </article>
  )
}

function ProjectsArchive({ expanded = false }) {
  const visibleProjects = expanded ? projects : projects.slice(0, 4)
  const featured = visibleProjects.find((project) => project.feature) ?? visibleProjects[0]
  const remaining = visibleProjects.filter((project) => project.id !== featured?.id)
  const leftColumnProjects = remaining.slice(0, 1)
  const rightColumnProjects = remaining.slice(1)

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
          <a className="institution-card" href="https://djsce.ac.in/" target="_blank" rel="noreferrer">
            <span>Institutional Link</span>
            Dwarkadas J. Sanghvi College of Engineering
          </a>
          <p>
            Currently pursuing a <mark>B.Tech in Information Technology</mark> at Dwarkadas J. Sanghvi College of Engineering,
            Mumbai (Sep 2024 – 2028). GPA: 9.1
          </p>
        </div>

        <div className="edu-copy lower">
          <a className="institution-card" href="https://navodaya.gov.in/" target="_blank" rel="noreferrer">
            <span>Institutional Link</span>
            Jawahar Navodaya Vidyalaya, Palghar
          </a>
      <p>
            Jawahar Navodaya Vidyalaya is a selective government residential school, admitting students through a national entrance exam. I studied here from Grade 6 through Grade 12 (Jul 2016 – Apr 2024), living on campus away from home. Class 10: 95.4%. Class 12: 92%. It is also where I first got introduced to <mark>coding</mark>.
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
  const isBrainrotPage = pathname === '/brainrot'

  if (isBrainrotPage) {
    return (
      <Suspense fallback={<div className="brainrot-boot" />}>
        <Brainrot />
      </Suspense>
    )
  }

  return <Portfolio />
}

function Portfolio() {
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
                I'm an Information Technology undergraduate at DJSCE Mumbai (2024–2028, GPA 9.1). I study the internal geometry of transformers — how query and key projections, residual streams, and attention rank evolve during training — and I publish measurement tools so those observations are reproducible. I am an undergraduate research assistant at IIT Roorkee on geospatial time-series forecasting for district-level drought prediction. I like building systems from scratch to understand them. I'm looking to do research: I'll bring what I have, and learn the rest.
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
                I want to bring that same habit of looking under the surface to AI research — measuring how transformers actually use their residual stream and attention geometry, not only how they score on a loss curve. Two manuscripts from this work are under review. Longer term I care about efficient systems that work with people on hard problems in physics, mathematics, and the formal sciences.
              </p>
            </div>
          </section>

          <EducationSection />

          <section className="page-section" id="work-exp">
            <SectionHeader number="4" title="Work Experience" eyebrow="Research appointments" />
            <div className="publication-stack">
              <TimelineItem
                role="Collaborative Researcher"
                company="Advanced Vision Labs · Remote"
                start="Aug 2026"
                end="Present"
                bullets={[
                  'Collaborating on research in representation learning, investigating the geometry and structure of learned representations in modern deep neural networks.',
                  'Reproducing and experimentally analyzing recent representation-learning methods, studying the effects of normalization and feature alignment across pretrained models.',
                ]}
              />
              <TimelineItem
                role="Undergraduate Research Assistant"
                company="IIT Roorkee · Remote"
                start="May 2026"
                end="Present"
                bullets={[
                  'Conducting research on geospatial time-series forecasting for district-level drought prediction across India using a proprietary multi-year dataset.',
                  'Surveyed recent literature on spatiotemporal forecasting and drought prediction, analyzing Transformer-, graph-, and attention-based architectures to identify suitable modeling strategies.',
                  'Designed candidate deep learning architectures integrating spatial attention with temporal sequence modeling for nationwide drought forecasting.',
                ]}
              />
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
