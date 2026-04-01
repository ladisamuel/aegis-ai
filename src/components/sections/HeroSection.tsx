// import { useTranslation } from 'react-i18next'
// import { Link } from 'react-router-dom'

// const ArrowRight = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
//   </svg>
// )

// const PlayIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//     <polygon points="5 3 19 12 5 21 5 3"/>
//   </svg>
// )

// // Animated terminal mockup
// function TerminalMockup() {
//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       {/* Outer glow */}
//       <div className="absolute inset-0 bg-linear-to-r from-aegis-500/20 via-cyber-400/15 to-aegis-600/20 rounded-2xl blur-2xl scale-105" />

//       {/* Main dashboard card */}
//       <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden">
//         {/* Window chrome */}
//         <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700/60">
//           <div className="flex gap-1.5">
//             <span className="w-3 h-3 rounded-full bg-red-400/80" />
//             <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
//             <span className="w-3 h-3 rounded-full bg-green-400/80" />
//           </div>
//           <div className="flex-1 flex justify-center">
//             <div className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 max-w-xs w-full">
//               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-500 shrink-0">
//                 <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.25C17.25 21.15 21 16.25 21 11V5L12 1z"/>
//               </svg>
//               <span className="font-mono text-xs text-gray-400 dark:text-gray-500 truncate">app.aegisai.io/dashboard</span>
//             </div>
//           </div>
//         </div>

//         {/* Dashboard body */}
//         <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800">
//           {/* Left sidebar */}
//           <div className="col-span-1 p-4 space-y-3 bg-gray-50/50 dark:bg-gray-900">
//             <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Live Threats</p>
//             {[
//               { label: 'SQL Injection', score: 94, color: 'bg-red-500', time: '2s ago' },
//               { label: 'Brute Force', score: 78, color: 'bg-orange-400', time: '11s ago' },
//               { label: 'XSS Attempt', score: 61, color: 'bg-yellow-400', time: '34s ago' },
//               { label: 'Bot Traffic', score: 42, color: 'bg-blue-400', time: '1m ago' },
//               { label: 'API Anomaly', score: 35, color: 'bg-aegis-400', time: '2m ago' },
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-3">
//                 <div className={`w-2 h-2 rounded-full ${item.color} shrink-0 ${i === 0 ? 'animate-pulse' : ''}`} />
//                 <div className="flex-1 min-w-0">
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="font-mono text-[10px] text-gray-600 dark:text-gray-400 truncate">{item.label}</span>
//                     <span className="font-mono text-[10px] font-bold text-gray-800 dark:text-gray-200">{item.score}</span>
//                   </div>
//                   <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                     <div className={`h-full ${item.color} rounded-full transition-all`} style={{ width: `${item.score}%` }} />
//                   </div>
//                 </div>
//                 <span className="font-mono text-[9px] text-gray-400 dark:text-gray-600 shrink-0">{item.time}</span>
//               </div>
//             ))}
//           </div>

//           {/* Center - world map / activity */}
//           <div className="col-span-2 p-4 relative overflow-hidden">
//             <div className="flex items-center justify-between mb-3">
//               <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">Attack Map — Live</p>
//               <div className="flex items-center gap-1.5">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                 <span className="font-mono text-[10px] text-emerald-500">LIVE</span>
//               </div>
//             </div>

//             {/* Simplified world map dots */}
//             <div className="relative h-40 bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/40">
//               {/* Grid lines */}
//               <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 160" preserveAspectRatio="none">
//                 {[20, 40, 60, 80, 100, 120, 140].map(y => (
//                   <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-600"/>
//                 ))}
//                 {[50, 100, 150, 200, 250, 300, 350].map(x => (
//                   <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-600"/>
//                 ))}
//               </svg>

//               {/* Attack points */}
//               {[
//                 { cx: 80, cy: 55, r: 3, color: '#ef4444', pulse: true },
//                 { cx: 175, cy: 60, r: 2, color: '#f97316', pulse: false },
//                 { cx: 310, cy: 70, r: 4, color: '#ef4444', pulse: true },
//                 { cx: 230, cy: 45, r: 2, color: '#eab308', pulse: false },
//                 { cx: 120, cy: 90, r: 2, color: '#3b82f6', pulse: false },
//                 { cx: 260, cy: 100, r: 3, color: '#f97316', pulse: true },
//                 { cx: 340, cy: 40, r: 2, color: '#10b981', pulse: false },
//               ].map((dot, i) => (
//                 <svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 400 160">
//                   {dot.pulse && (
//                     <circle cx={dot.cx} cy={dot.cy} r={dot.r * 3} fill={dot.color} opacity="0.15">
//                       <animate attributeName="r" values={`${dot.r * 2};${dot.r * 5};${dot.r * 2}`} dur="2s" repeatCount="indefinite"/>
//                       <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
//                     </circle>
//                   )}
//                   <circle cx={dot.cx} cy={dot.cy} r={dot.r} fill={dot.color} />
//                 </svg>
//               ))}

//               {/* Connection lines */}
//               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 160">
//                 <path d="M 310 70 Q 245 30 175 60" stroke="#ef4444" strokeWidth="0.8" fill="none" opacity="0.4">
//                   <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite"/>
//                 </path>
//                 <path d="M 80 55 Q 130 30 175 60" stroke="#f97316" strokeWidth="0.8" fill="none" opacity="0.3"/>
//               </svg>
//             </div>

//             {/* Stats row */}
//             <div className="grid grid-cols-3 gap-3 mt-3">
//               {[
//                 { label: 'Events/sec', value: '12,847', trend: '+3.2%', up: true },
//                 { label: 'Blocked Today', value: '2,491', trend: '-8% vs avg', up: false },
//                 { label: 'Risk Score', value: '23 / 100', trend: 'Low', up: false },
//               ].map((stat, i) => (
//                 <div key={i} className="bg-gray-50 dark:bg-gray-800/60 rounded-lg p-2.5 border border-gray-100 dark:border-gray-700/40">
//                   <p className="font-mono text-[9px] uppercase text-gray-400 dark:text-gray-500 mb-1">{stat.label}</p>
//                   <p className="font-display font-bold text-sm text-gray-900 dark:text-white">{stat.value}</p>
//                   <p className={`font-mono text-[9px] mt-0.5 ${stat.up ? 'text-emerald-500' : 'text-gray-400 dark:text-gray-500'}`}>{stat.trend}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function HeroSection() {
//   const { t } = useTranslation()

//   const logos = ['Acme Corp', 'Vortex', 'Nexus', 'Stratos', 'CloudSync']

//   return (
//     <section className="relative border-4 min-h-screen flex flex-col items-center pt-28 pb-16 px-4 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-linear-to-b from-aegis-50/60 via-white to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950" />
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-linear-radial from-aegis-100/70 dark:from-aegis-900/20 to-transparent rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyber-400/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute top-40 right-1/4 w-48 h-48 bg-threat-400/5 rounded-full blur-3xl pointer-events-none" />

//       {/* Grid texture */}
//       <div className="absolute  inset-0 dark:opacity-20 opacity-30"
//         style={{
//           backgroundImage: `linear-gradient(var(--grid-color, rgba(14, 165, 150, 0.06)) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color, rgba(14, 165, 150, 0.06)) 1px, transparent 1px)`,
//           backgroundSize: '48px 48px',
//         }}
//       />

//       <div className=" border-4 relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-aegis-50 dark:bg-aegis-950/60 border border-aegis-200 dark:border-aegis-800/50 rounded-full text-aegis-700 dark:text-cyber-400 text-sm font-body font-medium animate-fade-in">
//           <span className="w-2 h-2 rounded-full bg-aegis-500 dark:bg-cyber-400 animate-pulse" />
//           {t('hero.badge')}
//         </div>

//         {/* Headline */}
//         <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-6 max-w-4xl animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
//           {t('hero.title')}
//         </h1>

//         {/* Subtitle */}
//         <p className="font-body text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
//           {t('hero.subtitle')}
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
//           <a
//             href="#how-it-works"
//             className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 font-body font-semibold text-base text-white bg-aegis-600 hover:bg-aegis-700 dark:bg-cyber-500 dark:hover:bg-cyber-600 dark:text-gray-950 rounded-xl transition-all duration-200 shadow-lg shadow-aegis-500/25 dark:shadow-cyber-400/20 hover:shadow-xl hover:shadow-aegis-500/30 dark:hover:shadow-cyber-400/25 hover:-translate-y-0.5"
//           >
//             <PlayIcon />
//             {t('hero.cta')}
//           </a>
//           <Link
//             to="/register"
//             className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-body font-semibold text-base text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:-translate-y-0.5"
//           >
//             {t('hero.ctaSecondary')}
//             <ArrowRight />
//           </Link>
//         </div>

//         {/* Social proof logos */}
//         <div className="w-full animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
//           <p className="font-body text-xs uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-6">
//             {t('hero.trustedBy')}
//           </p>
//           <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-10">
//             {logos.map(logo => (
//               <span key={logo} className="font-display font-bold text-sm sm:text-base text-gray-300 dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-500 transition-colors cursor-pointer tracking-wide">
//                 {logo}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Dashboard mockup */}
//         <div className="w-full mt-16 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
//           <TerminalMockup />
//         </div>
//       </div>
//     </section>
//   )
// }







































import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

// ─── Icons ─────────────────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.25C17.25 21.15 21 16.25 21 11V5L12 1z"/>
  </svg>
)

// ─── Animated counter ──────────────────────────────────────────────────────────
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const progress = Math.min((ts - startRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [target, duration])

  return <>{count.toLocaleString()}</>
}

// ─── Live event feed ───────────────────────────────────────────────────────────
interface FeedEvent {
  id: number; type: string; sev: string; label: string;
  ip: string; score: number; ts: string;
}

const SEED_EVENTS: FeedEvent[] = [
  { id: 1, type: 'BLOCK', sev: 'crit', label: 'SQL Injection',       ip: '203.0.113.42',  score: 94, ts: '04:31' },
  { id: 2, type: 'BLOCK', sev: 'high', label: 'Brute Force',         ip: '198.51.100.7',  score: 81, ts: '04:28' },
  { id: 3, type: 'ALERT', sev: 'high', label: 'Path Traversal',      ip: '192.0.2.14',    score: 76, ts: '04:22' },
  { id: 4, type: 'ALERT', sev: 'med',  label: 'XSS Attempt',         ip: '198.18.0.55',   score: 63, ts: '04:17' },
  { id: 5, type: 'ALERT', sev: 'med',  label: 'AI Anomaly',          ip: '203.0.113.9',   score: 58, ts: '04:11' },
  { id: 6, type: 'LOG',   sev: 'low',  label: 'Bot Fingerprint',     ip: 'AS15169',       score: 34, ts: '04:05' },
  { id: 7, type: 'LOG',   sev: 'low',  label: 'Rate Limit Hit',      ip: '10.0.0.88',     score: 22, ts: '03:58' },
  { id: 8, type: 'BLOCK', sev: 'crit', label: 'Cmd Injection',       ip: '45.155.205.8',  score: 98, ts: '03:51' },
]

const INCOMING: FeedEvent[] = [
  { id: 101, type: 'BLOCK', sev: 'crit', label: 'NoSQL Injection',    ip: '185.220.101.5', score: 91, ts: '05:02' },
  { id: 102, type: 'ALERT', sev: 'high', label: 'SSRF Attempt',       ip: '172.67.0.21',   score: 79, ts: '05:18' },
  { id: 103, type: 'LOG',   sev: 'low',  label: 'Geo Velocity Flag',  ip: 'user_12345',    score: 41, ts: '05:34' },
  { id: 104, type: 'BLOCK', sev: 'crit', label: 'Header Injection',   ip: '94.102.49.3',   score: 96, ts: '05:50' },
]

type SevKey = 'crit' | 'high' | 'med' | 'low'
const SEV: Record<SevKey, { dot: string; score: string }> = {
  crit: { dot: 'bg-red-500',    score: 'text-red-400'    },
  high: { dot: 'bg-orange-400', score: 'text-orange-400' },
  med:  { dot: 'bg-yellow-400', score: 'text-yellow-300' },
  low:  { dot: 'bg-blue-400',   score: 'text-gray-500'   },
}
const TYPE_CLR: Record<string, string> = {
  BLOCK: 'text-red-400',
  ALERT: 'text-yellow-300',
  LOG:   'text-gray-600',
}

function LiveFeed() {
  const [events, setEvents] = useState<FeedEvent[]>(SEED_EVENTS)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIdx(i => {
        const next = i % INCOMING.length
        setEvents(prev => [INCOMING[next], ...prev].slice(0, 10))
        return next + 1
      })
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="space-y-0.5">
      {events.map((ev, i) => {
        const sev = SEV[ev.sev as SevKey] || SEV.low
        return (
          <div
            key={ev.id}
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-all duration-500 ${
              i === 0 ? 'bg-white/6' : ''
            }`}
            style={{ opacity: Math.max(0.12, 1 - i * 0.09) }}
          >
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${sev.dot} ${i === 0 ? 'animate-pulse' : ''}`} />
            <span className={`font-mono text-[10px] font-bold w-9 shrink-0 ${TYPE_CLR[ev.type] || 'text-gray-500'}`}>{ev.type}</span>
            <span className="font-mono text-[11px] text-gray-300 flex-1 truncate">{ev.label}</span>
            <span className="font-mono text-[10px] text-gray-600 w-24 truncate text-right hidden sm:block">{ev.ip}</span>
            <span className={`font-mono text-[11px] font-bold w-6 text-right shrink-0 ${sev.score}`}>{ev.score}</span>
            <span className="font-mono text-[10px] text-gray-700 w-10 text-right shrink-0">{ev.ts}</span>
          </div>
        )
      })}
    </div>
  )
}

// ─── Floating chip ─────────────────────────────────────────────────────────────
function FloatingChip({ label, value, dot, delay }: {
  label: string; value: string; dot: string; delay: number
}) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-gray-900/95 backdrop-blur-md shadow-xl shadow-black/40"
      style={{ animation: `float 5s ${delay}s ease-in-out infinite` }}
    >
      <span className={`w-2 h-2 rounded-full ${dot} animate-pulse shrink-0`} />
      <div className="leading-none">
        <p className="font-mono text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
        <p className="font-mono text-xs font-bold text-white">{value}</p>
      </div>
    </div>
  )
}

// ─── Main Hero ─────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const { t } = useTranslation()
  const [blocked, setBlocked] = useState(2491)
  const [eps, setEps] = useState(12847)

  useEffect(() => {
    const t1 = setInterval(() => setBlocked(v => v + Math.floor(Math.random() * 3)), 2800)
    const t2 = setInterval(() => setEps(v => Math.max(12000, v + Math.floor(Math.random() * 60 - 20))), 900)
    return () => { clearInterval(t1); clearInterval(t2) }
  }, [])

  return (
    <>
      <style>{`
        @keyframes scanDown {
          0%   { top: -128px; }
          100% { top: calc(100% + 128px); }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-9px); }
        }
        .hero-shimmer {
          background: linear-gradient(100deg, #1db3a5 0%, #00ffd5 35%, #72e0d1 55%, #00e5bc 75%, #1db3a5 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 3.5s linear infinite;
        }
        .hero-grid-bg {
          background-image:
            linear-gradient(rgba(29,179,165,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,179,165,0.06) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-950 transition-colors duration-300">

        {/* ── Background ── */}
        <div className="absolute inset-0 hero-grid-bg" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-950/80 pointer-events-none" />

        {/* Ambient glows */}
        <div className="absolute top-1/2 left-[-10%] w-[55vw] h-[55vw] -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(29,179,165,0.10) 0%, transparent 65%)' }} />
        <div className="absolute top-1/2 right-[-8%] w-[40vw] h-[40vw] -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,255,213,0.06) 0%, transparent 65%)' }} />

        {/* Bottom separator */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-aegis-500/30 to-transparent" />

        {/* ── Main content grid ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 xl:gap-16 items-center">

            {/* ──── LEFT COLUMN ──────────────────────────────────── */}
            <div className="flex flex-col">

              {/* Badge */}
              <div
                className="self-start flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full border border-aegis-800/50 bg-aegis-950/50"
                style={{ animation: 'fadeIn 0.5s ease-out forwards' }}
              >
                <span className="text-aegis-400"><ShieldIcon /></span>
                <span className="font-mono text-[11px] text-aegis-400 tracking-wide">{t('hero.badge')}</span>
              </div>

              {/* Headline */}
              <h1
                className="font-display font-extrabold text-[2.6rem] sm:text-5xl xl:text-[3.5rem] leading-[1.06] tracking-tight mb-5"
                style={{ animation: 'fadeUp 0.6s 0.1s ease-out forwards', opacity: 0 }}
              >
                <span className="text-white">AI‑Powered </span>
                <span className="hero-shimmer">Intrusion Detection</span>
                <span className="block text-gray-400 font-semibold mt-1 text-3xl sm:text-4xl xl:text-[2.6rem]">
                  for the Modern Cloud
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="font-body text-base sm:text-lg text-gray-400 leading-relaxed max-w-120 mb-9"
                style={{ animation: 'fadeUp 0.6s 0.2s ease-out forwards', opacity: 0 }}
              >
                {t('hero.subtitle')}
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-3 mb-11"
                style={{ animation: 'fadeUp 0.6s 0.3s ease-out forwards', opacity: 0 }}
              >
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-semibold text-sm bg-gray-400 hover:bg-gray-500 text-gray-950 shadow-lg shadow-cyber-400/20 hover:shadow-xl hover:shadow-cyber-400/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t('hero.ctaSecondary')}
                  <ArrowRight />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-semibold text-sm text-gray-300 border border-white/10 bg-white/4 hover:bg-white/8 hover:border-white/18 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t('hero.cta')}
                </a>
              </div>

              {/* Live metrics */}
              <div
                className="grid grid-cols-3 gap-3 mb-10"
                style={{ animation: 'fadeUp 0.6s 0.4s ease-out forwards', opacity: 0 }}
              >
                {[
                  { value: null,    counter: 847293, label: 'Threats blocked' },
                  { value: '<50ms', counter: null,   label: 'Detection p99'   },
                  { value: '99.99%',counter: null,   label: 'Uptime SLA'      },
                ].map((m, i) => (
                  <div key={i} className="flex flex-col gap-1.5 p-3.5 rounded-xl border border-white/7 bg-white/3 hover:bg-white/5 transition-colors">
                    <span className="font-display font-extrabold text-xl text-white leading-none">
                      {m.counter != null ? <AnimatedCounter target={m.counter} duration={2400} /> : m.value}
                    </span>
                    <span className="font-body text-[11px] text-gray-500 leading-snug">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Trusted by */}
              <div
                className="pt-7 border-t border-white/7"
                style={{ animation: 'fadeUp 0.6s 0.5s ease-out forwards', opacity: 0 }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-700 mb-4">
                  {t('hero.trustedBy')}
                </p>
                <div className="flex flex-wrap gap-x-7 gap-y-2">
                  {['Acme Corp', 'Vortex', 'Nexus', 'Stratos', 'CloudSync'].map(logo => (
                    <span key={logo} className="font-display font-bold text-xs uppercase tracking-widest text-gray-700 hover:text-gray-500 transition-colors cursor-default">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ──── RIGHT COLUMN: Terminal ──────────────────────── */}
            <div
              className="relative h-135 lg:h-155"
              style={{ animation: 'fadeUp 0.8s 0.25s ease-out forwards', opacity: 0 }}
            >
              {/* Outer ambient */}
              <div className="absolute -inset-8 rounded-3xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(29,179,165,0.08) 0%, transparent 70%)' }} />

              {/* Border glow ring */}
              <div className="absolute -inset-px rounded-2xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(29,179,165,0.3), transparent 40%, rgba(0,255,213,0.15))', borderRadius: '16px' }} />

              {/* Terminal card */}
              <div className="relative h-full rounded-2xl border border-white/10 bg-gray-950/95 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/70 flex flex-col">

                {/* Animated scan line */}
                <div className="absolute inset-x-0 h-28 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
                  <div
                    className="absolute inset-x-0 h-28 opacity-[0.04]"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(0,255,213,0.8), transparent)',
                      animation: 'scanDown 5s linear infinite',
                    }}
                  />
                </div>

                {/* Subtle CRT grain */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: '160px 160px',
                  }}
                />

                {/* ── Window chrome ── */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-black/30 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <span className="font-mono text-[11px] text-gray-600 hidden sm:block">aegis://stream — tenant_0x4a2f</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-wider">LIVE</span>
                  </div>
                </div>

                {/* ── Live stats strip ── */}
                <div className="grid grid-cols-3 divide-x divide-white/7 border-b border-white/7 bg-black/20 shrink-0">
                  {[
                    { label: 'Events / sec',  value: eps.toLocaleString(),     clr: 'text-cyber-400'    },
                    { label: 'Blocked today', value: blocked.toLocaleString(), clr: 'text-red-400'      },
                    { label: 'Threat level',  value: 'ELEVATED',               clr: 'text-yellow-300'   },
                  ].map((s, i) => (
                    <div key={i} className="px-3 py-2.5">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-gray-700 mb-0.5">{s.label}</p>
                      <p className={`font-mono text-sm font-bold ${s.clr}`}>{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* ── Column headers ── */}
                <div className="flex items-center gap-2.5 px-3 py-1.5 border-b border-white/5 bg-black/10 shrink-0">
                  {[
                    { label: 'TYPE',   cls: 'w-9 shrink-0' },
                    { label: 'THREAT', cls: 'flex-1' },
                    { label: 'SOURCE', cls: 'w-24 text-right hidden sm:block' },
                    { label: 'RISK',   cls: 'w-6 text-right shrink-0' },
                    { label: 'TIME',   cls: 'w-10 text-right shrink-0' },
                  ].map(h => (
                    <span key={h.label} className={`font-mono text-[9px] uppercase tracking-widest text-gray-700 ${h.cls}`}>{h.label}</span>
                  ))}
                </div>

                {/* ── Live event feed ── */}
                <div className="flex-1 overflow-hidden px-1 py-2">
                  <LiveFeed />
                </div>

                {/* ── Input line ── */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-t border-white/7 bg-black/30 shrink-0">
                  <span className="text-aegis-500 font-mono text-xs">❯</span>
                  <span className="font-mono text-xs text-gray-600">aegis-stream</span>
                  <span className="font-mono text-xs text-aegis-400 animate-pulse ml-0.5">█</span>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute -top-5 right-6 z-20">
                <FloatingChip label="New Threat" value="SQL Injection" dot="bg-red-500" delay={0} />
              </div>
              <div className="absolute bottom-16 -left-6 z-20">
                <FloatingChip label="AI Risk Score" value="98 / 100" dot="bg-orange-400" delay={1.8} />
              </div>
              <div className="absolute -bottom-5 right-10 z-20">
                <FloatingChip label="Response Time" value="Blocked · 3ms" dot="bg-emerald-400" delay={0.9} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 pointer-events-none">
          <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-7 bg-linear-to-b from-gray-600 to-transparent" />
        </div>
      </section>
    </>
  )
}
