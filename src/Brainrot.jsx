import { useEffect, useRef, useState } from 'react'
import './Brainrot.css'

const LIFE_LINES = [
  'Hello I am vidit a apsiring researcher.',
  'Vidit Gupta. Information Technology. DJSCE Mumbai. GPA nine point one.',
  'I live in Mumbai. I grew up at Jawahar Navodaya Vidyalaya Palghar. Class ten ninety five point four. Class twelve ninety two.',
  'I started coding when I was thirteen because I wanted to know how things work under the surface.',
  'Right now I am a collaborative researcher at Advanced Vision Labs studying representation geometry in deep networks.',
  'I am also an undergraduate research assistant at IIT Roorkee doing district level drought forecasting across India.',
  'I have two papers under review. Query expansion and key specialization in transformer attention geometry.',
  'And residual stream geometry in transformer language models. Rank goes up with depth. Capacity utilisation is seventy nine percent.',
  'I published representation geometry on pie pie pie. Streaming covariance. Participation ratio. Linear C K A.',
  'I built a language model stack from scratch. Custom B P E. Rope. Mixture of experts. Tool calling agents with K V cache.',
  'I instrumented a four million parameter transformer for eighty seven epochs. Queries expand. Keys specialize. Softmax goes low rank.',
  'Torch iso flops. Chinchilla scaling. OriginTrace. Aria. SignSense. CogniSense. Api drift agent.',
  'Vice chairperson of DJ InIT dot ai. Technical member of DJS Codestars. ML research at GDG DJSCE.',
  'Best student teacher award JNV Palghar two thousand twenty three. Science congress at IIT Gandhinagar with a face mouse.',
  'Favourite anime Steins Gate, Kaguya sama Love is War, and Attack on Titan. Favourite youtuber Vsauce.',
  'I grew up on Pokemon. I still play Minecraft. I like space travel and philosophy debates.',
  'Favourite computer scientist is Claude Shannon. Codeforces noobgrammer two five six. GitHub Vidit dash zero one.',
]

const STICKERS = [
  { title: 'who even is this', body: 'vidit gupta • mumbai • apsiring researcher • IT @ DJSCE • GPA 9.1' },
  { title: 'jobs', body: 'AVL representation geometry. IIT Roorkee drought forecast.' },
  { title: 'papers', body: 'Attention Q/K paper + residual-stream geometry. both under review.' },
  { title: 'lore', body: 'Steins;Gate. Kaguya. AOT. Vsauce. Pokemon. Minecraft. Shannon.' },
]

const CLIPS = [
  { id: 'i0M4ARe9v0Y', title: 'SUBWAY SURFERS', className: 'vid-subway', vertical: true, x: 40, y: 70, rot: -3 },
  { id: '6Ejga4kJUts', title: 'FAMILY GUY', className: 'vid-guy', x: 520, y: 80, rot: 3 },
  { id: '9bZkp7q19f0', title: 'GANGNAM STYLE', className: 'vid-gangnam', x: 900, y: 220, rot: -2 },
]

const BGM = [
  { id: 'zGhEyEJLChw', title: 'subway surfers theme' },
  { id: '9bZkp7q19f0', title: 'gangnam style' },
]

function youtubeSrc(id) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    controls: '0',
    disablekb: '1',
    fs: '0',
    loop: '1',
    playlist: id,
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
    iv_load_policy: '3',
  })
  return `https://www.youtube.com/embed/${id}?${params.toString()}`
}

function youtubeAudioSrc(id) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '0',
    controls: '0',
    disablekb: '1',
    fs: '0',
    loop: '1',
    playlist: id,
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
    enablejsapi: '1',
  })
  return `https://www.youtube.com/embed/${id}?${params.toString()}`
}

function pickVoice(voices) {
  return (
    voices.find((voice) => /en-IN|en_IN/i.test(voice.lang) && /google|female|zira/i.test(voice.name)) ||
    voices.find((voice) => /en/i.test(voice.lang)) ||
    voices[0] ||
    null
  )
}

function useWander(active) {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!active) return undefined
    const root = rootRef.current
    if (!root) return undefined
    const nodes = [...root.querySelectorAll('[data-wander]')]
    const states = nodes.map((node) => ({
      node,
      x: Number(node.dataset.x ?? 80),
      y: Number(node.dataset.y ?? 80),
      vx: (Math.random() < 0.5 ? -1 : 1) * (42 + Math.random() * 26),
      vy: (Math.random() < 0.5 ? -1 : 1) * (34 + Math.random() * 22),
      rot: Number(node.dataset.rot ?? 0),
    }))

    let last = performance.now()
    let frame = 0
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const maxX = window.innerWidth
      const maxY = window.innerHeight
      states.forEach((state) => {
        const width = state.node.offsetWidth || 220
        const height = state.node.offsetHeight || 160
        state.x += state.vx * dt
        state.y += state.vy * dt
        if (state.x < 8) {
          state.x = 8
          state.vx = Math.abs(state.vx)
        }
        if (state.y < 52) {
          state.y = 52
          state.vy = Math.abs(state.vy)
        }
        if (state.x > maxX - width - 8) {
          state.x = maxX - width - 8
          state.vx = -Math.abs(state.vx)
        }
        if (state.y > maxY - height - 58) {
          state.y = maxY - height - 58
          state.vy = -Math.abs(state.vy)
        }
        state.node.style.transform = `translate(${state.x}px, ${state.y}px) rotate(${state.rot}deg)`
      })
      frame = window.requestAnimationFrame(tick)
    }
    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [active])

  return rootRef
}

export default function Brainrot() {
  const [voiceOn, setVoiceOn] = useState(true)
  const [lineIndex, setLineIndex] = useState(0)
  const [bgmTick, setBgmTick] = useState(0)
  const voiceOnRef = useRef(true)
  const indexRef = useRef(0)
  const speakNextRef = useRef(() => {})
  const stageRef = useWander(true)

  useEffect(() => {
    document.title = 'vidit brainrot.exe'
    document.documentElement.classList.add('brainrot-lock')
    document.body.classList.add('brainrot-lock')
    window.speechSynthesis?.getVoices()
    const kick = window.setTimeout(() => speakNextRef.current(), 160)
    const unlockAudio = () => {
      setBgmTick((tick) => tick + 1)
      window.speechSynthesis?.getVoices()
      window.setTimeout(() => speakNextRef.current(), 50)
    }
    window.addEventListener('pointerdown', unlockAudio, { once: true })
    window.addEventListener('keydown', unlockAudio, { once: true })
    return () => {
      document.title = "Vidit's Portfolio"
      document.documentElement.classList.remove('brainrot-lock')
      document.body.classList.remove('brainrot-lock')
      window.clearTimeout(kick)
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
      window.speechSynthesis?.cancel()
    }
  }, [])

  useEffect(() => {
    voiceOnRef.current = voiceOn
    if (!voiceOn) window.speechSynthesis?.cancel()
  }, [voiceOn])

  speakNextRef.current = () => {
    if (!voiceOnRef.current || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(LIFE_LINES[indexRef.current % LIFE_LINES.length])
    utterance.voice = pickVoice(window.speechSynthesis.getVoices())
    utterance.rate = 1.18
    utterance.pitch = 1.28
    utterance.volume = 1
    utterance.onend = () => {
      indexRef.current += 1
      setLineIndex(indexRef.current % LIFE_LINES.length)
      window.setTimeout(() => speakNextRef.current(), 220)
    }
    window.speechSynthesis.speak(utterance)
  }

  return (
    <div className="brainrot">
        <div className="brainrot-stage" ref={stageRef}>
          {BGM.map((track) => (
            <iframe
              className="brainrot-bgm"
              key={`${track.id}-${bgmTick}`}
              src={youtubeAudioSrc(track.id)}
              title={track.title}
              allow="autoplay; encrypted-media"
              tabIndex={-1}
            />
          ))}

          <p className="brainrot-hero">Hello I am vidit a apsiring researcher</p>
          <p className="brainrot-now">{LIFE_LINES[lineIndex]}</p>

          {CLIPS.map((clip) => (
            <figure
              className={`brainrot-vid ${clip.className}`}
              data-wander
              data-x={clip.x}
              data-y={clip.y}
              data-rot={clip.rot}
              key={clip.id}
            >
              <figcaption>{clip.title}</figcaption>
              <div className="vid-frame">
                <img src={`https://i.ytimg.com/vi/${clip.id}/hqdefault.jpg`} alt="" />
                <iframe
                  src={youtubeSrc(clip.id)}
                  title={clip.title}
                  allow="autoplay; encrypted-media"
                  tabIndex={-1}
                />
                <span className="brainrot-vid-lock" aria-hidden="true" />
              </div>
            </figure>
          ))}

          <div className="brainrot-duo" data-wander data-x="80" data-y="280" data-rot="-2">
            <p className="sahur-yell">big TTT</p>
            <div className="duo-bodies">
              <img className="duo-chika" src="/brainrot/anime-dance.gif" alt="" />
              <img className="duo-sahur" src="/brainrot/tung-tung-sahur.png" alt="" />
            </div>
          </div>

          {STICKERS.map((sticker, index) => (
            <aside
              className="brainrot-sticker"
              data-wander
              data-x={160 + index * 180}
              data-y={420 + (index % 2) * 70}
              data-rot={index % 2 === 0 ? -4 : 5}
              key={sticker.title}
            >
              <p>{sticker.title}</p>
              <span>{sticker.body}</span>
            </aside>
          ))}

          <span className="brainrot-mascot" data-wander data-x="700" data-y="120" data-rot="8">
            🧠
          </span>
          <span className="brainrot-mascot" data-wander data-x="1100" data-y="360" data-rot="-6">
            🗿
          </span>
          <span className="brainrot-mascot" data-wander data-x="240" data-y="80" data-rot="4">
            💀
          </span>

          <Snake />

          <div className="brainrot-ticker" aria-hidden="true">
            <div>{LIFE_LINES.join('   ★   ')}</div>
          </div>

          <div className="brainrot-hud">
            <button
              type="button"
              onClick={() => {
                setVoiceOn((on) => {
                  const next = !on
                  if (!next) window.speechSynthesis?.cancel()
                  else window.setTimeout(() => speakNextRef.current(), 50)
                  return next
                })
              }}
            >
              {voiceOn ? 'VOICE ON' : 'VOICE OFF'}
            </button>
            <a href="/">escape to normal portfolio</a>
          </div>
        </div>
    </div>
  )
}

function Snake() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    let targetLength = 18
    const body = Array.from({ length: targetLength }, () => ({ x: 160, y: 220 }))
    const head = { x: 160, y: 220, a: 0.3, speed: 52 }

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width
      canvas.height = height
    }
    resize()
    window.addEventListener('resize', resize)

    const grow = window.setInterval(() => {
      targetLength = Math.min(70, targetLength + 3)
    }, 3500)

    let last = performance.now()
    let running = true
    const tick = (now) => {
      if (!running) return
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      head.a += Math.sin(now / 420) * 0.035
      head.x += Math.cos(head.a) * head.speed * dt
      head.y += Math.sin(head.a) * head.speed * dt
      if (head.x < 30 || head.x > width - 30) head.a = Math.PI - head.a
      if (head.y < 60 || head.y > height - 70) head.a = -head.a
      head.x = Math.max(30, Math.min(width - 30, head.x))
      head.y = Math.max(60, Math.min(height - 70, head.y))
      body.unshift({ x: head.x, y: head.y })
      while (body.length > targetLength) body.pop()

      ctx.clearRect(0, 0, width, height)
      for (let i = body.length - 1; i >= 0; i -= 1) {
        const part = body[i]
        const radius = 28 - Math.min(12, i * 0.18)
        ctx.beginPath()
        ctx.fillStyle = i % 2 === 0 ? '#39ff14' : '#0f7a00'
        ctx.arc(part.x, part.y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.lineWidth = 3
        ctx.strokeStyle = '#111'
        ctx.stroke()
      }
      ctx.fillStyle = '#111'
      ctx.beginPath()
      ctx.arc(head.x + 8, head.y - 6, 3.5, 0, Math.PI * 2)
      ctx.arc(head.x + 16, head.y - 4, 3.5, 0, Math.PI * 2)
      ctx.fill()
      ctx.font = '28px Impact'
      ctx.fillText('SNAKE', head.x - 36, head.y - 34)
      window.requestAnimationFrame(tick)
    }
    window.requestAnimationFrame(tick)

    return () => {
      running = false
      window.clearInterval(grow)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas className="brainrot-snake" ref={canvasRef} aria-hidden="true" />
}
