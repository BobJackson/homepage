import { motion } from 'framer-motion'
import { Building2, CalendarDays } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { experience } from '../data/resume'

const ease = [0.16, 1, 0.3, 1]

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          icon="briefcase"
          eyebrow="Career Path"
          title="职业"
          highlight="工作经历"
          desc="10 年成长轨迹：从后端开发到技术经理，持续在核心系统中承担架构设计与攻坚职责。"
        />

        <div className="relative">
          {/* 时间线竖线 */}
          <div className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:block" />

          <div className="flex flex-col gap-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.06, ease }}
                className="relative sm:pl-14"
              >
                {/* 时间线节点 */}
                <span className="absolute left-0 top-6 hidden h-8 w-8 place-items-center rounded-full border border-accent/40 bg-bg sm:grid">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-glow-sm" />
                </span>

                <div className="card card-accent card-hover">
                  {/* 头部 */}
                  <div className="mb-4 flex flex-col gap-2 border-b border-border/60 pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border/70 bg-elevated/50 text-accent">
                        <Building2 className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-primary sm:text-lg">{job.company}</h3>
                        <p className="text-sm font-medium text-accent">{job.role}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start rounded-lg border border-border/70 bg-elevated/40 px-3 py-1.5 font-mono text-xs text-secondary sm:self-auto">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {job.period}
                    </span>
                  </div>

                  {/* 职责要点 */}
                  <ul className="space-y-2.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-secondary">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 标签 */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span key={t} className="chip !px-2 !py-1 text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
