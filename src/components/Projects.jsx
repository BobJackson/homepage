import { motion } from 'framer-motion'
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { projects } from '../data/resume'

const ease = [0.16, 1, 0.3, 1]

function ProjectCard({ p, index }) {
  const isFeatured = p.featured

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease }}
      className={`card card-accent card-hover group flex flex-col ${
        isFeatured ? 'border-accent/30 bg-gradient-to-br from-accent/[0.06] to-surface/60 lg:col-span-2' : ''
      }`}
    >
      {/* 头部 */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-all group-hover:shadow-glow-sm ${
              p.ai
                ? 'border-accent/40 bg-accent/15 text-accent'
                : 'border-border/70 bg-elevated/50 text-secondary group-hover:text-accent'
            }`}
          >
            {p.ai ? <Sparkles className="h-5 w-5" /> : <FolderGit2 className="h-5 w-5" />}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-primary">{p.name}</h3>
              {p.ai && (
                <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  AI
                </span>
              )}
            </div>
            <p className="mt-0.5 text-sm text-accent-2">
              {p.role} · <span className="font-mono text-xs text-muted">{p.period}</span>
            </p>
          </div>
        </div>

        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border/70 bg-elevated/40 px-3 py-1.5 text-xs font-medium text-secondary transition-all hover:border-accent/50 hover:text-accent"
          >
            访问 <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {/* 概述 */}
      <p className="mb-4 text-sm leading-relaxed text-secondary">{p.summary}</p>

      {/* 关键指标（仅精选项目） */}
      {isFeatured && p.metrics && (
        <div className="mb-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {p.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-border/60 bg-bg/40 px-3 py-2.5 text-center">
              <div className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-base font-bold text-transparent sm:text-lg">
                {m.value}
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-muted sm:text-[11px]">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* 亮点 */}
      <ul className="mb-4 flex-1 space-y-2">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-[13px] leading-relaxed text-secondary">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* 技术标签 */}
      <div className="flex flex-wrap gap-1.5 border-t border-border/50 pt-4">
        {p.tags.map((t) => (
          <span key={t} className="chip !px-2 !py-1 text-[11px]">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          icon="rocket"
          eyebrow="Featured Work"
          title="精选"
          highlight="项目作品"
          desc="覆盖 AI 招聘、复合用工、金融、报表引擎等领域，均以可量化的稳定性与效率成果落地。"
        />

        {/* 旗舰项目（大卡） */}
        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>

        {/* 其他项目 */}
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
