import { useTranslation } from 'react-i18next'

const icons = {
  realTime: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  aiAnomaly: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  behavioral: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  apiFirst: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
}

const featureColors = [
  { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-100 dark:border-blue-900/30', icon: 'text-blue-500 dark:text-blue-400', dot: 'bg-blue-400' },
  { bg: 'bg-purple-50 dark:bg-purple-950/30', border: 'border-purple-100 dark:border-purple-900/30', icon: 'text-purple-500 dark:text-purple-400', dot: 'bg-purple-400' },
  { bg: 'bg-aegis-50 dark:bg-aegis-950/30', border: 'border-aegis-100 dark:border-aegis-900/30', icon: 'text-aegis-600 dark:text-cyber-400', dot: 'bg-aegis-400' },
  { bg: 'bg-orange-50 dark:bg-orange-950/30', border: 'border-orange-100 dark:border-orange-900/30', icon: 'text-orange-500 dark:text-orange-400', dot: 'bg-orange-400' },
]

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  desc: string
  colors: typeof featureColors[0]
  delay: number
}

function FeatureCard({ icon, title, desc, colors, delay }: FeatureCardProps) {
  return (
    <div
      className={`group relative p-6 rounded-2xl border ${colors.border} ${colors.bg} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border ${colors.border} ${colors.icon} mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>

      {/* Corner accent */}
      <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${colors.dot} opacity-60 group-hover:opacity-100 transition-opacity`} />
    </div>
  )
}

export default function FeaturesSection() {
  const { t } = useTranslation()

  const featureKeys = ['realTime', 'aiAnomaly', 'behavioral', 'apiFirst'] as const

  return (
    <section id="features" className="relative py-24 px-4 bg-gray-50/80 dark:bg-gray-900/40">
      {/* Subtle separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 tracking-tight">
            {t('features.sectionTitle')}
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('features.sectionSubtitle')}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featureKeys.map((key, i) => (
            <FeatureCard
              key={key}
              icon={icons[key]}
              title={t(`features.${key}.title`)}
              desc={t(`features.${key}.desc`)}
              colors={featureColors[i]}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '<50ms', label: 'Detection Latency' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '<5%', label: 'False Positive Rate' },
            { value: '100K/s', label: 'Event Throughput' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800/60 shadow-sm">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-aegis-600 dark:text-cyber-400 mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
