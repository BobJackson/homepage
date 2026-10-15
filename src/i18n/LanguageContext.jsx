import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { resume } from '../data/resume'
import ui from './ui'

const STORAGE_KEY = 'wys-lang'
const SUPPORTED = ['zh', 'en']

/**
 * 语言检测优先级：
 * 1. localStorage 中用户手动切换过的偏好（保证体验连续性）
 * 2. 浏览器环境 navigator.languages
 * 3. 默认中文
 */
function detectLanguage() {
  if (typeof window === 'undefined') return 'zh'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(stored)) return stored
  } catch {
    /* localStorage 不可用（隐私模式等）时降级为环境检测 */
  }
  const list = navigator.languages?.length ? navigator.languages : [navigator.language || 'zh-CN']
  return list.some((l) => l.toLowerCase().startsWith('zh')) ? 'zh' : 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  // 同步 <html lang> 属性 + 持久化偏好
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* 忽略写入失败 */
    }
  }, [lang])

  // 多标签页之间保持语言一致
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY && SUPPORTED.includes(e.newValue)) {
        setLangState(e.newValue)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next)
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((l) => (l === 'zh' ? 'en' : 'zh'))
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: ui[lang], // 界面文案
      data: resume[lang], // 简历内容
    }),
    [lang, setLang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage 必须在 <LanguageProvider> 内使用')
  return ctx
}
