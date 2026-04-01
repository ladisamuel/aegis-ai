// ─── Class name merger (lightweight clsx) ─────────────────────────────────────
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

// ─── Format currency ──────────────────────────────────────────────────────────
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)
}

// ─── Truncate text ────────────────────────────────────────────────────────────
export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? `${str.slice(0, maxLength)}…` : str
}

// ─── Sleep helper ─────────────────────────────────────────────────────────────
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

// ─── Detect RTL language ──────────────────────────────────────────────────────
export const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur']
export function isRTL(lang: string): boolean {
  return RTL_LANGUAGES.includes(lang)
}
