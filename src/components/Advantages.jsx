import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import { advantages } from '../data/resume'

const ease = [0.16, 1, 0.3, 1]

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          icon="target"
          eyebrow="Why Me"
          title="四大"
          highlight="核心优势"
          desc="技术深度、AI 视野、工程标准与协作能力，构成可交付、可衡量、可持续的复合竞争力。"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {advantages.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.09, ease }}
              className="card card-accent card-hover group flex gap-4"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/30 bg-gradient-to-br from-accent/15 to-accent-2/15 text-accent transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow-sm">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <div>
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-secondary">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
