import { useTranslation } from 'react-i18next'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

// Code snippet mockup for step 1
function CodeMockup() {
  const lines = [
    { code: 'from aegis import IDSAgent', color: 'text-purple-400' },
    { code: '', color: '' },
    { code: 'agent = IDSAgent(', color: 'text-gray-300' },
    { code: '    api_key="ak_live_…",', color: 'text-yellow-300' },
    { code: '    mode="realtime"', color: 'text-yellow-300' },
    { code: ')', color: 'text-gray-300' },
    { code: '', color: '' },
    { code: '# Django middleware', color: 'text-gray-600' },
    { code: 'MIDDLEWARE += [agent.middleware]', color: 'text-blue-400' },
  ]
  return (
    <div className="rounded-xl border border-gray-700/60 bg-gray-950 overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/80 border-b border-gray-700/60">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"/>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"/>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"/>
        <span className="ml-2 font-mono text-[11px] text-gray-500">setup.py</span>
      </div>
      <div className="p-4">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="font-mono text-[11px] text-gray-700 select-none w-4 text-right shrink-0">{line.code ? i + 1 : ''}</span>
            <span className={`font-mono text-[11px] leading-relaxed ${line.color}`}>{line.code || '\u00A0'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Threat analysis mockup for step 2
function AnalysisMockup() {
  return (
    <div className="rounded-xl border border-gray-700/60 bg-gray-950 overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/80 border-b border-gray-700/60">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
        <span className="font-mono text-[11px] text-gray-500">stream — aegis detection engine</span>
      </div>
      <div className="p-4 space-y-2 font-mono text-[11px]">
        {[
          { msg: '[12:04:31] event_id=e_a9f2  source=203.0.113.42  risk=12', color: 'text-gray-500' },
          { msg: '[12:04:31] event_id=e_a9f3  sqli_match=union+select  risk=94 ⚠', color: 'text-red-400' },
          { msg: '[12:04:32] isolation_forest score=-0.74  ANOMALY', color: 'text-orange-400' },
          { msg: '[12:04:32] action=BLOCK  ip=203.0.113.42  ttl=3600s', color: 'text-red-300' },
          { msg: '[12:04:33] alert → slack#security  severity=critical', color: 'text-yellow-400' },
          { msg: '[12:04:33] event_id=e_a9f4  source=10.0.0.5  risk=8', color: 'text-gray-600' },
          { msg: '[12:04:34] user_profile updated  entity=user_12345  score=41', color: 'text-blue-400' },
        ].map((line, i) => (
          <p key={i} className={line.color}>{line.msg}</p>
        ))}
        <p className="text-gray-700 animate-pulse">█</p>
      </div>
    </div>
  )
}

// Alert dashboard mockup for step 3
function AlertMockup() {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <span className="font-display font-semibold text-sm text-gray-800 dark:text-white">Alerts — Today</span>
        <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-mono text-[10px] font-bold">3 Critical</span>
      </div>
      <div className="divide-y divide-gray-50 dark:divide-gray-800/60">
        {[
          { title: 'SQL Injection — /api/login', severity: 'critical', ip: '203.0.113.42', time: '12:04', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/30' },
          { title: 'Brute Force — 847 attempts', severity: 'high', ip: '198.51.100.7', time: '11:52', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/20' },
          { title: 'AI Anomaly — unusual path', severity: 'medium', ip: '192.0.2.88', time: '11:41', color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-950/20' },
          { title: 'Bot traffic cluster', severity: 'low', ip: 'AS12345', time: '11:30', color: 'text-blue-400', bg: '' },
        ].map((alert, i) => (
          <div key={i} className={`flex items-start gap-3 px-4 py-3 ${alert.bg}`}>
            <span className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${alert.color.replace('text', 'bg')}`}/>
            <div className="flex-1 min-w-0">
              <p className="font-body text-xs font-medium text-gray-800 dark:text-gray-200 truncate">{alert.title}</p>
              <p className="font-mono text-[10px] text-gray-400 dark:text-gray-600">{alert.ip}</p>
            </div>
            <div className="text-right shrink-0">
              <span className={`font-mono text-[10px] font-semibold uppercase ${alert.color}`}>{alert.severity}</span>
              <p className="font-mono text-[10px] text-gray-400">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface StepProps {
  label: string
  title: string
  desc: string
  points: string[]
  visual: React.ReactNode
  reverse?: boolean
  index: number
}

function Step({ label, title, desc, points, visual, reverse, index }: StepProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? 'lg:[direction:rtl]' : ''}`}>
      {/* Text side */}
      <div className={reverse ? 'lg:[direction:ltr]' : ''}>
        <span className="inline-block font-mono text-xs font-bold text-aegis-600 dark:text-cyber-400 uppercase tracking-[0.2em] mb-3">
          {label}
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4 leading-tight">
          {title}
        </h3>
        <p className="font-body text-base text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
          {desc}
        </p>
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-aegis-100 dark:bg-aegis-950/60 border border-aegis-200 dark:border-aegis-800/60 flex items-center justify-center text-aegis-600 dark:text-cyber-400">
                <CheckIcon />
              </span>
              <span className="font-body text-sm text-gray-600 dark:text-gray-400">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual side */}
      <div className={`${reverse ? 'lg:[direction:ltr]' : ''}`}>
        {visual}
      </div>
    </div>
  )
}

export default function HowItWorksSection() {
  const { t } = useTranslation()

  const steps = [
    {
      label: t('howItWorks.step1.label'),
      title: t('howItWorks.step1.title'),
      desc: t('howItWorks.step1.desc'),
      points: t('howItWorks.step1.points', { returnObjects: true }) as string[],
      visual: <CodeMockup />,
    },
    {
      label: t('howItWorks.step2.label'),
      title: t('howItWorks.step2.title'),
      desc: t('howItWorks.step2.desc'),
      points: t('howItWorks.step2.points', { returnObjects: true }) as string[],
      visual: <AnalysisMockup />,
      reverse: true,
    },
    {
      label: t('howItWorks.step3.label'),
      title: t('howItWorks.step3.title'),
      desc: t('howItWorks.step3.desc'),
      points: t('howItWorks.step3.points', { returnObjects: true }) as string[],
      visual: <AlertMockup />,
    },
  ]

  return (
    <section id="how-it-works" className="relative py-24 px-4 bg-white dark:bg-gray-950">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 tracking-tight">
            {t('howItWorks.sectionTitle')}
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('howItWorks.sectionSubtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, i) => (
            <Step key={i} {...step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
