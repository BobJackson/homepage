import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Download, Globe } from 'lucide-react'
import useScrollSpy from '../hooks/useScrollSpy'
import { useLanguage } from '../i18n/LanguageContext'

const sectionIds = ['ai', 'advantages', 'skills', 'experience', 'projects', 'contact']

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds, 140)
  const { t, data, lang, toggleLang } = useLanguage()
  const { navItems, profile } = data

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'border-b border-border/60 shadow-[0_4px_30px_-12px_rgba(0,0,0,0.5)]' : 'border-b border-transparent'
        }`}
        style={{ backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent', backdropFilter: scrolled ? 'blur(14px)' : 'none' }}
      >
        <nav className="container-page flex h-[68px] items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/40 bg-accent/10 font-mono text-sm font-bold text-accent transition-all group-hover:shadow-glow-sm">
              W
            </span>
            <span className="text-left leading-tight">
              <span className="block text-sm font-semibold text-primary">{profile.name}</span>
              <span className="block text-[11px] text-muted">{profile.title}</span>
            </span>
          </button>

          {/* 桌面导航 */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  activeId === item.id ? 'text-accent' : 'text-secondary hover:text-primary'
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-accent/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* 右侧操作 */}
          <div className="flex items-center gap-2">
            {/* 语言一键切换 */}
            <button
              onClick={toggleLang}
              aria-label={t.langSwitchAria}
              title={t.langSwitchAria}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border/70 bg-elevated/40 px-2.5 text-xs font-semibold text-secondary transition-all hover:border-accent/50 hover:text-accent"
            >
              <Globe className="h-4 w-4" />
              {lang === 'zh' ? 'EN' : '中'}
            </button>

            <button
              onClick={toggleTheme}
              aria-label={t.themeAria}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 bg-elevated/40 text-secondary transition-all hover:border-accent/50 hover:text-accent"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid place-items-center"
                >
                  {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button onClick={() => go('contact')} className="btn-primary hidden !px-4 !py-2 sm:inline-flex">
              <Download className="h-4 w-4" />
              {t.navContact}
            </button>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={t.menuAria}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 bg-elevated/40 text-secondary lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* 移动端下拉菜单 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border/60 lg:hidden"
            style={{ backgroundColor: 'var(--nav-bg)', backdropFilter: 'blur(14px)' }}
          >
            <div className="container-page flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    activeId === item.id ? 'bg-accent/10 text-accent' : 'text-secondary hover:bg-elevated/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
