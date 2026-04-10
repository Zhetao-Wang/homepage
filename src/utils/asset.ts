export const withBase = (path?: string) => {
  if (!path) return path
  const clean = path.startsWith('/') ? path.slice(1) : path
  // Vite injects import.meta.env.BASE_URL at build time
  const base = (import.meta as any).env.BASE_URL || '/'
  const normalized = base.endsWith('/') ? base : base + '/'
  return normalized + clean
}
