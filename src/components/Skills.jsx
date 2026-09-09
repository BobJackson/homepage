import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import { skills } from '../data/resume'

const ease = [0.16, 1, 0.3, 1]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          icon="layers"
          eyebrow="Tech Stack"
          title="技术"
          highlight="技能栈"
          desc="从后端核心到 AI 工程化，覆盖架构设计、性能优化与工程效能的完整能力矩阵。"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className={`card card-hover group relative ${
                group.highlight
                  ? 'border-accent/40 bg-gradient-to-br from-accent/[0.09] to-accent-2/[0.09] shadow-glow-sm md:col-span-2 lg:col-span-1'
                  : 'card-accent'
              }`}
            >
              {group.highlight && (
                <span className="absolute right-4 top-4 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  Highlight
                </span>
              )}
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-lg border transition-all ${
                    group.highlight
                      ? 'border-accent/40 bg-accent/15 text-accent'
                      : 'border-border/70 bg-elevated/50 text-secondary group-hover:text-accent'
                  }`}
                >
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-primary">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
