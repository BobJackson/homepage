/* SSR 冒烟测试：验证三种环境下整棵组件树按目标语言渲染且无运行时错误 */
import { renderToString } from 'react-dom/server'
import React from 'react'
import App from '../src/App.jsx'

function mockEnv({ lang, languages }) {
  const store = {}
  if (lang) store['wys-lang'] = lang
  const localStorageMock = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => {
      store[k] = String(v)
    },
  }
  globalThis.window = { localStorage: localStorageMock, addEventListener() {}, removeEventListener() {} }
  globalThis.localStorage = localStorageMock
  Object.defineProperty(globalThis, 'navigator', {
    value: { languages, language: languages[0] },
    configurable: true,
  })
}

const cases = [
  { name: 'localStorage=zh（用户手动切过中文）', env: { lang: 'zh', languages: ['en-US'] }, expect: ['王幼松', 'AI 时代的', '查看精选项目', '期望 35–40K', 'boolean readyToJoin = true; // 随时到岗', '"分布式架构", "高并发", "千万级数据治理"', '99.95', '1300'] },
  { name: 'localStorage=en（用户手动切过英文）', env: { lang: 'en', languages: ['zh-CN'] }, expect: ['Wang Yousong', 'Production-Grade', 'View Selected Projects', 'Expect 35–40K CNY/mo', 'boolean readyToJoin = true; // available immediately', '"Distributed architecture", "High concurrency", "10M+ data governance"'] },
  { name: '无存储 + 中文浏览器（自动检测）', env: { languages: ['zh-CN', 'zh'] }, expect: ['王幼松', '四大', '核心优势'] },
  { name: '无存储 + 英文浏览器（自动检测）', env: { languages: ['en-US', 'en'] }, expect: ['Wang Yousong', 'Four Core', 'Strengths', 'Flexible Workforce Platform'] },
  { name: '无存储 + 空语言列表（兜底中文）', env: { languages: [] }, expect: ['王幼松', '联系我'] },
]

let failed = 0
for (const c of cases) {
  mockEnv(c.env)
  try {
    const rawHtml = renderToString(React.createElement(App))
    // 剥离 React SSR 注释标记与 HTML 标签，解码实体，还原纯文本后再断言（语法高亮 span 不影响文本匹配）
    const html = rawHtml
      .replace(/<!-- -->/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;|&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
    const hit = c.expect.filter((s) => html.includes(s))
    const ok = hit.length === c.expect.length
    if (!ok) failed++
    console.log(`${ok ? 'PASS' : 'FAIL'} | ${c.name} | 命中 ${hit.length}/${c.expect.length}`)
    if (!ok) console.log('   期望:', c.expect.join(' / '))
  } catch (e) {
    failed++
    console.log(`FAIL | ${c.name} | 渲染抛错: ${e.message}`)
  }
}
console.log(failed === 0 ? '\n全部用例通过' : `\n${failed} 个用例失败`)
process.exit(failed === 0 ? 0 : 1)
