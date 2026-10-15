import { motion } from 'framer-motion'
import { MapPin, Briefcase, ArrowDown, Send, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const ease = [0.16, 1, 0.3, 1]

/* 终端代码卡片：以 Java 语法呈现候选人「画像」，强化工程师身份 */
function TerminalCard() {
  const { lang } = useLanguage()
  const kw = (t) => <span className="text-accent-2">{t}</span>
  const ty = (t) => <span className="text-accent">{t}</span>
  const st = (t) => <span className="text-emerald-700 dark:text-emerald-400">{t}</span>
  const nu = (t) => <span className="text-amber-700 dark:text-amber-400">{t}</span>
  const cm = (t) => <span className="text-muted italic">{t}</span>

  const lines =
    lang === 'zh'
      ? [
          <>{kw('public class')} {ty('WangYousong')} &#123;</>,
          <>&nbsp;&nbsp;{kw('int')} experience = {nu('10')}; {cm('// 年后端 & 架构')}</>,
          <>&nbsp;&nbsp;{ty('Role')} target = {ty('Role')}.{st('ARCHITECT')}; {cm('// 架构师 / 技术经理')}</>,
          <></>,
          <>&nbsp;&nbsp;{ty('String[]')} core = &#123;</>,
          <>&nbsp;&nbsp;&nbsp;&nbsp;{st('"分布式架构"')}, {st('"高并发"')}, {st('"千万级数据治理"')}</>,
          <>&nbsp;&nbsp;&#125;;</>,
          <></>,
          <>&nbsp;&nbsp;{cm('// AI 工程化落地')}</>,
          <>&nbsp;&nbsp;{ty('String[]')} ai = &#123;</>,
          <>&nbsp;&nbsp;&nbsp;&nbsp;{st('"MCP"')}, {st('"Spring AI"')}, {st('"LangChain4j"')}, {st('"Dify"')}</>,
          <>&nbsp;&nbsp;&#125;;</>,
          <></>,
          <>&nbsp;&nbsp;{kw('double')} availability = {nu('0.9995')}; {cm('// 系统可用性')}</>,
          <>&nbsp;&nbsp;{kw('boolean')} readyToJoin = {nu('true')}; {cm('// 随时到岗')}</>,
          <>&#125;</>,
        ]
      : [
          <>{kw('public class')} {ty('WangYousong')} &#123;</>,
          <>&nbsp;&nbsp;{kw('int')} experience = {nu('10')}; {cm('// yrs of backend & architecture')}</>,
          <>&nbsp;&nbsp;{ty('Role')} target = {ty('Role')}.{st('ARCHITECT')}; {cm('// architect / engineering manager')}</>,
          <></>,
          <>&nbsp;&nbsp;{ty('String[]')} core = &#123;</>,
          <>&nbsp;&nbsp;&nbsp;&nbsp;{st('"Distributed architecture"')}, {st('"High concurrency"')}, {st('"10M+ data governance"')}</>,
          <>&nbsp;&nbsp;&#125;;</>,
          <></>,
          <>&nbsp;&nbsp;{cm('// AI engineering in production')}</>,
          <>&nbsp;&nbsp;{ty('String[]')} ai = &#123;</>,
          <>&nbsp;&nbsp;&nbsp;&nbsp;{st('"MCP"')}, {st('"Spring AI"')}, {st('"LangChain4j"')}, {st('"Dify"')}</>,
          <>&nbsp;&nbsp;&#125;;</>,
          <></>,
          <>&nbsp;&nbsp;{kw('double')} availability = {nu('0.9995')}; {cm('// system availability')}</>,
          <>&nbsp;&nbsp;{kw('boolean')} readyToJoin = {nu('true')}; {cm('// available immediately')}</>,
          <>&#125;</>,
        ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease }}
      className="relative"
    >
      {/* 背后光晕 */}
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent/20 via-transparent to-accent-2/20 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-border/80 bg-surface/80 shadow-card backdrop-blur-xl">
        {/* 窗口标题栏 */}
        <div className="flex items-center gap-2 border-b border-border/70 bg-elevated/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-xs text-muted">WangYousong.java</span>
          <Sparkles className="ml-auto h-3.5 w-3.5 text-accent" />
        </div>
        {/* 代码区 */}
        <div className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.055 }}
              className="flex gap-3 whitespace-pre"
            >
              <span className="w-4 shrink-0 select-none text-right text-muted/50">{i + 1}</span>
              <span className="text-secondary">{line}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const { t, data } = useLanguage()
  const { profile, heroStats } = data
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* 左侧：价值主张 */}
          <div>
            {/* 状态徽标 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 dark:bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </span>
              {profile.status}
            </motion.div>

            {/* 姓名 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              {profile.name}
              <span className="mt-2 block bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-3 md:text-4xl">
                {profile.title}
              </span>
            </motion.h1>

            {/* 一句话主张 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="mt-6 max-w-xl text-base leading-relaxed text-secondary sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* 元信息 chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease }}
              className="mt-6 flex flex-wrap items-center gap-2.5 text-sm"
            >
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-elevated/40 px-3 py-1.5 text-secondary">
                <MapPin className="h-4 w-4 text-accent" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-elevated/40 px-3 py-1.5 text-secondary">
                <Briefcase className="h-4 w-4 text-accent" /> {profile.experienceYears} {t.heroYearExp} · {profile.education}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5 font-medium text-accent">
                {t.heroExpectPrefix}
                {profile.expectations.salary}
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                <Briefcase className="h-4 w-4" /> {t.heroCtaPrimary}
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-ghost">
                <Send className="h-4 w-4" /> {t.heroCtaSecondary}
              </button>
            </motion.div>
          </div>

          {/* 右侧：终端卡片 */}
          <div className="lg:pl-4">
            <TerminalCard />
          </div>
        </div>

        {/* 核心数据条 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 lg:grid-cols-4 lg:gap-4"
        >
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="card card-accent card-hover group text-center sm:text-left"
            >
              <div className="flex items-baseline justify-center gap-0.5 sm:justify-start">
                <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                  {s.value}
                </span>
                <span className="text-lg font-bold text-accent sm:text-xl">{s.suffix}</span>
              </div>
              <p className="mt-2 text-xs leading-snug text-muted sm:text-[13px]">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* 向下滚动提示 */}
        <motion.button
          onClick={() => scrollTo('ai')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mx-auto mt-14 flex flex-col items-center gap-1.5 text-muted transition-colors hover:text-accent"
          aria-label={t.scrollDownAria}
        >
          <span className="text-[11px] uppercase tracking-widest">{t.heroScrollHint}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.button>
      </div>
    </section>
  )
}
