import Reveal from './Reveal'
import Icon from './Icon'

/**
 * 统一的区块标题：小标签(eyebrow) + 主标题 + 描述
 */
export default function SectionHeading({ eyebrow, title, highlight, desc, icon, align = 'center' }) {
  const isCenter = align === 'center'
  return (
    <div className={`mb-12 flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      <Reveal direction="none">
        <span className="eyebrow">
          {icon && <Icon name={icon} className="h-3.5 w-3.5" />}
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
          {title}
          {highlight && <span className="text-gradient"> {highlight}</span>}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.1}>
          <p
            className={`max-w-2xl text-base leading-relaxed text-secondary ${
              isCenter ? 'mx-auto' : ''
            }`}
          >
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  )
}
