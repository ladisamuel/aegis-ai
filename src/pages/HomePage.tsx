import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import PricingSection from "../components/sections/PricingSection";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CTASection() {
  const { t } = useTranslation();
  return (
    <section className="relative py-24 px-4 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-150 h-100 bg-aegis-500/8 dark:bg-aegis-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6 tracking-tight">
          Start protecting your app{" "}
          <span className="text-aegis-600 dark:text-cyber-400">today</span>
        </h2>
        <p className="font-body text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto">
          Join hundreds of security-first engineering teams. Free tier includes
          10K events per day — no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="inline-flex border items-center justify-center gap-2 px-8 py-4 font-body font-semibold text-base text-white bg-aegis-600 hover:bg-aegis-700
             dark:bg-cyber-500 dark:hover:bg-cyber-600 dark:text-gray-600 
            
            rounded-xl transition-all duration-200 shadow-lg shadow-aegis-500/25 hover:shadow-xl hover:shadow-aegis-500/30 hover:-translate-y-0.5"
          >
            {t("hero.ctaSecondary")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
          <a
            href="mailto:sales@aegisai.io"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-semibold text-base text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
