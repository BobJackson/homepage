import { useEffect, useState } from 'react'

/**
 * 监听各区块进入视口，返回当前激活的区块 id，用于导航高亮
 */
export default function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + offset
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      // 接近页面底部时，强制高亮最后一项
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 40) {
        current = ids[ids.length - 1]
      }
      setActiveId(current)
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [ids, offset])

  return activeId
}
