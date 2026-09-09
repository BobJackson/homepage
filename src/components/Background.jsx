/**
 * 全局背景层：科技网格 + 渐变光晕球 + 顶部辉光
 * 固定定位，置于内容之下（-z-10），不拦截交互
 */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* 网格 */}
      <div className="bg-grid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />

      {/* 顶部辉光 */}
      <div className="absolute inset-x-0 top-0 h-[520px] bg-hero-glow" />

      {/* 浮动光晕球 */}
      <div
        className="orb animate-float h-[420px] w-[420px] bg-accent/30"
        style={{ top: '-80px', left: '-100px' }}
      />
      <div
        className="orb animate-float h-[460px] w-[460px] bg-accent-2/25"
        style={{ top: '180px', right: '-140px', animationDelay: '1.5s' }}
      />
      <div
        className="orb animate-float h-[380px] w-[380px] bg-accent/20"
        style={{ bottom: '5%', left: '20%', animationDelay: '3s' }}
      />
    </div>
  )
}
