import { motion } from 'framer-motion'

/**
 * 滚动进入视口时的揭示动画包装器
 * @param {number} delay 延迟（秒）
 * @param {'up'|'down'|'left'|'right'|'none'} direction 进入方向
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.2,
}) {
  const offset = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  }[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
