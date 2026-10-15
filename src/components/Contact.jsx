import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Check, Copy, Briefcase, Banknote, Clock } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const ease = [0.16, 1, 0.3, 1]

function CopyButton({ value }) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* 忽略剪贴板权限异常 */
    }
  }
  return (
    <button
      onClick={onCopy}
      aria-label={t.copyAria}
      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border/70 bg-elevated/40 text-muted transition-all hover:border-accent/50 hover:text-accent"
    >
      {copied ? <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

export default function Contact() {
  const { t, data } = useLanguage()
  const section = t.sections.contact
  const { contact, expectations } = data.profile

  const channels = [
    { icon: Phone, label: t.channelPhone, value: contact.phone, href: `tel:${contact.phone}` },
    { icon: Mail, label: t.channelEmail, value: contact.email, href: `mailto:${contact.email}` },
    { icon: MessageCircle, label: t.channelWechat, value: contact.wechat, href: null },
  ]

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          icon="send"
          eyebrow={section.eyebrow}
          title={section.title}
          highlight={section.highlight}
          desc={section.desc}
        />

        <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          {/* 联系方式 */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease }}
            className="card relative overflow-hidden !p-0"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent-2" />
            <div className="p-6 sm:p-8">
              <h3 className="mb-5 text-lg font-semibold text-primary">{t.contactTitle}</h3>
              <div className="flex flex-col gap-3">
                {channels.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-elevated/40 p-3 transition-colors hover:border-accent/40"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] uppercase tracking-wider text-muted">{c.label}</div>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="block truncate font-mono text-sm text-primary hover:text-accent"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="truncate font-mono text-sm text-primary">{c.value}</div>
                      )}
                    </div>
                    <CopyButton value={c.value} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 期望职位 */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="card relative overflow-hidden !p-0"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-2 to-accent" />
            <div className="p-6 sm:p-8">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-primary">
                <Briefcase className="h-5 w-5 text-accent" /> {t.contactRolesTitle}
              </h3>

              <div className="mb-5 flex flex-wrap gap-2">
                {expectations.roles.map((r) => (
                  <span
                    key={r}
                    className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border/60 bg-elevated/40 p-3.5">
                  <MapPin className="mb-2 h-4 w-4 text-accent" />
                  <div className="text-[11px] text-muted">{t.contactCity}</div>
                  <div className="text-sm font-semibold text-primary">{expectations.city}</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-elevated/40 p-3.5">
                  <Banknote className="mb-2 h-4 w-4 text-accent" />
                  <div className="text-[11px] text-muted">{t.contactSalary}</div>
                  <div className="text-sm font-semibold text-primary">{expectations.salary}</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-elevated/40 p-3.5">
                  <Clock className="mb-2 h-4 w-4 text-accent" />
                  <div className="text-[11px] text-muted">{t.contactAvailability}</div>
                  <div className="text-sm font-semibold text-primary">{t.contactAvailabilityValue}</div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.08] px-4 py-3 dark:border-emerald-400/25 dark:bg-emerald-400/[0.07]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 dark:bg-emerald-400" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                </span>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {expectations.type} · {data.profile.status}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
