import { ArrowUp, Heart } from 'lucide-react'
import { profile, navItems } from '../data/resume'

export default function Footer() {
  const year = new Date().getFullYear()

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="container-page">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* 品牌 */}
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/40 bg-accent/10 font-mono text-sm font-bold text-accent">
              W
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-primary">{profile.name}</div>
              <div className="text-[11px] text-muted">{profile.title}</div>
            </div>
          </div>

          {/* 快速导航 */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-xs text-secondary transition-colors hover:text-accent"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* 回到顶部 */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-elevated/40 px-3 py-2 text-xs text-secondary transition-all hover:border-accent/50 hover:text-accent"
          >
            <ArrowUp className="h-3.5 w-3.5" /> 回到顶部
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-1 border-t border-border/50 pt-6 text-center text-[11px] text-muted sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {profile.name} · 保留所有权利
          </p>
          <p className="inline-flex items-center gap-1">
            以 React + Vite 构建，用 <Heart className="h-3 w-3 text-accent" /> 打磨细节
          </p>
        </div>
      </div>
    </footer>
  )
}
