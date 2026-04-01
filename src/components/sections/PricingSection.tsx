import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

type TierKey = 'developer' | 'growth' | 'business' | 'enterprise'

export default function PricingSection() {
  const { t } = useTranslation()
  const [annual, setAnnual] = useState(false)

  const tiers: { key: TierKey; highlight?: boolean }[] = [
    { key: 'developer' },
    { key: 'growth', highlight: true },
    { key: 'business' },
    { key: 'enterprise' },
  ]

  const getDiscountedPrice = (price: string) => {
    if (!annual || price === '$0' || price === 'Custom' || !price.startsWith('$')) return price
    const num = parseInt(price.replace(/[$,]/g, ''))
    return `$${(num * 0.8).toLocaleString()}`
  }

  return (
    <section id="pricing" className="relative py-24 px-4 bg-gray-50/80 dark:bg-gray-900/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 tracking-tight">
            {t('pricing.sectionTitle')}
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8">
            {t('pricing.sectionSubtitle')}
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 text-sm font-body font-medium rounded-lg transition-all ${
                !annual ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {t('pricing.monthly')}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-body font-medium rounded-lg transition-all ${
                annual ? 'bg-aegis-600 dark:bg-cyber-500 text-white dark:text-gray-950 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {t('pricing.annual')}
              <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-md ${annual ? 'bg-white/20 text-white' : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'}`}>
                {t('pricing.save')}
              </span>
            </button>
          </div>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {tiers.map(({ key, highlight }) => {
            const name = t(`pricing.tiers.${key}.name`)
            const price = getDiscountedPrice(t(`pricing.tiers.${key}.price`))
            const period = t(`pricing.tiers.${key}.period`)
            const desc = t(`pricing.tiers.${key}.desc`)
            const cta = t(`pricing.tiers.${key}.cta`)
            const features = t(`pricing.tiers.${key}.features`, { returnObjects: true }) as string[]
            const badge = key === 'growth' ? t('pricing.tiers.growth.badge') : null

            return (
              <div
                key={key}
                className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  highlight
                    ? 'bg-gray-900 dark:bg-gray-950 border-2 border-aegis-500 dark:border-cyber-400 shadow-2xl shadow-aegis-500/15 dark:shadow-cyber-400/10'
                    : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                {/* Badge */}
                {badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-3 py-1 text-xs font-body font-bold text-white bg-aegis-600 dark:bg-cyber-500 dark:text-gray-950 rounded-full shadow-sm whitespace-nowrap">
                      {badge}
                    </span>
                  </div>
                )}

                {/* Tier name */}
                <div className="mb-4">
                  <span className={`font-display font-semibold text-sm uppercase tracking-wider ${highlight ? 'text-aegis-400 dark:text-cyber-400' : 'text-gray-500 dark:text-gray-400'}`}>
                    {name}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-2 flex items-baseline gap-1">
                  <span className={`font-display font-extrabold text-4xl ${highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {price}
                  </span>
                  {period && (
                    <span className={`font-body text-sm ${highlight ? 'text-gray-400' : 'text-gray-400 dark:text-gray-500'}`}>
                      {period}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className={`font-body text-xs leading-relaxed mb-6 ${highlight ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  {desc}
                </p>

                {/* CTA */}
                <Link
                  to={key === 'developer' ? '/register' : key === 'growth' ? '/register' : '#'}
                  className={`block text-center px-5 py-3 rounded-xl text-sm font-body font-semibold transition-all duration-200 mb-6 ${
                    highlight
                      ? 'bg-aegis-500 hover:bg-aegis-400 dark:bg-cyber-500 dark:hover:bg-cyber-400 dark:text-gray-950 text-white shadow-lg shadow-aegis-500/30 hover:shadow-xl hover:shadow-aegis-500/40'
                      : key === 'developer'
                        ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                        : 'border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {cta}
                </Link>

                {/* Features */}
                <ul className="space-y-3 mt-auto">
                  {Array.isArray(features) && features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        highlight
                          ? 'bg-aegis-500/20 text-aegis-400 dark:text-cyber-400'
                          : 'bg-gray-100 dark:bg-gray-800 text-aegis-600 dark:text-aegis-400'
                      }`}>
                        <CheckIcon />
                      </span>
                      <span className={`font-body text-sm ${highlight ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Enterprise footnote */}
        <p className="text-center mt-10 font-body text-sm text-gray-400 dark:text-gray-500">
          Need MSP / white-label pricing?{' '}
          <a href="#" className="text-aegis-600 dark:text-cyber-400 hover:underline font-medium">
            Contact us for reseller rates →
          </a>
        </p>
      </div>
    </section>
  )
}
