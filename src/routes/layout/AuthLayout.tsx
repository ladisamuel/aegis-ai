import { Outlet, Link } from 'react-router-dom'

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.25C17.25 21.15 21 16.25 21 11V5L12 1z"/>
  </svg>
)

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-aegis-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyber-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aegis-600/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <Link to="/" className="flex items-center gap-2.5 w-fit group" aria-label="Go home">
          <span className="text-aegis-400 dark:text-cyber-400 transition-transform group-hover:scale-110 duration-200">
            <ShieldIcon />
          </span>
          <span className="font-display font-bold text-xl text-white">
            Aegis<span className="text-aegis-400">.</span>AI
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <Outlet />
      </div>
    </div>
  )
}
