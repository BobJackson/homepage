import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { useLanguage } from '../i18n/LanguageContext'

const ease = [0.16, 1, 0.3, 1]

export default function AILiteracy() {
  const { t, data } = useLanguage()
  const section = t.sections.ai
  const { aiLiteracy } = data

  return (
    <section id="ai" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          icon="sparkles"
          eyebrow={section.eyebrow}
          title={section.title}
          highlight={section.highlight}
          desc={section.desc}
        />

        {/* 主视觉面板 */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/[0.08] via-surface/40 to-accent-2/[0.08] p-[1px]">
            {/* 扫光装饰 */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(600px circle at 20% 0%, rgb(var(--c-accent) / 0.15), transparent 60%)',
              }}
            />
            <div className="relative rounded-[calc(1.5rem-1px)] bg-surface/60 p-6 backdrop-blur-sm sm:p-9">
              {/* 引导语 */}
              <div className="mb-8 flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent shadow-glow-sm">
                  <Bot className="h-5 w-5" />
                </span>
                <p className="text-base leading-relaxed text-secondary sm:text-[17px]">
                  {aiLiteracy.lead}
                </p>
              </div>

              {/* 能力卡片 */}
              <div className="grid gap-4 sm:grid-cols-2">
                {aiLiteracy.capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className="card card-accent card-hover group bg-elevated/40"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition-all group-hover:shadow-glow-sm">
                        <Icon name={cap.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold text-primary">{cap.title}</h3>
                        <span className="font-mono text-[11px] text-accent-2">{cap.tag}</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-secondary">{cap.desc}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {cap.points.map((p) => (
                        <li key={p} className="chip !px-2 !py-1 text-[11px]">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* AI 落地成果数据 */}
              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border/60 pt-7 sm:grid-cols-4">
                {aiLiteracy.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                      {m.value}
                    </div>
                    <div className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">{m.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
