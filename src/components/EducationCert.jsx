import { motion } from 'framer-motion'
import { GraduationCap, Award, CalendarDays } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import { education, certifications } from '../data/resume'

const ease = [0.16, 1, 0.3, 1]

export default function EducationCert() {
  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          icon="graduation"
          eyebrow="Education & Certs"
          title="教育背景"
          highlight="与资格证书"
        />

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          {/* 教育经历 */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease }}
            className="card card-accent card-hover"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary">{education.school}</h3>
                <p className="text-sm text-secondary">
                  {education.major} · {education.degree}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-elevated/40 px-3 py-1.5 font-mono text-xs text-secondary">
                <CalendarDays className="h-3.5 w-3.5" />
                {education.period}
              </span>
            </div>
            <ul className="space-y-2.5">
              {education.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-secondary">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 资格证书 */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="card card-accent card-hover flex flex-col"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-primary">资格证书</h3>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-elevated/40 px-4 py-3"
                >
                  <Icon name={c.icon} className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-primary">{c.name}</span>
                </div>
              ))}
              <p className="mt-auto text-xs leading-relaxed text-muted">
                持续学习现代 JDK（21/25/26）特性、AI 工程化与分布式架构，保持技术敏感度与工程实践的前沿性。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
