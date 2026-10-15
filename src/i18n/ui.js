/**
 * 界面级 UI 文案（与简历内容数据分离）
 * 简历内容在 ../data/resume.js，按语言取对应数据
 */

const zh = {
  // 无障碍标签
  langSwitchAria: '切换语言',
  themeAria: '切换主题',
  menuAria: '菜单',
  copyAria: '复制',
  scrollDownAria: '向下滚动',

  // 导航 / 首屏
  navContact: '联系我',
  heroCtaPrimary: '查看精选项目',
  heroCtaSecondary: '联系我',
  heroScrollHint: 'AI 素养',
  heroYearExp: '年经验',
  heroExpectPrefix: '期望 ',

  // 各区块标题（eyebrow + 主标题 + 高亮 + 描述）
  sections: {
    ai: {
      eyebrow: 'AI Literacy · 核心竞争力',
      title: 'AI 时代的',
      highlight: '工程化落地能力',
      desc: '不止步于概念，而是把大模型能力稳定、可控地嵌入企业级系统，转化为可量化的业务价值。',
    },
    advantages: {
      eyebrow: 'Why Me',
      title: '四大',
      highlight: '核心优势',
      desc: '技术深度、AI 视野、工程标准与协作能力，构成可交付、可衡量、可持续的复合竞争力。',
    },
    skills: {
      eyebrow: 'Tech Stack',
      title: '技术',
      highlight: '技能栈',
      desc: '从后端核心到 AI 工程化，覆盖架构设计、性能优化与工程效能的完整能力矩阵。',
    },
    experience: {
      eyebrow: 'Career Path',
      title: '职业',
      highlight: '工作经历',
      desc: '10 年成长轨迹：从后端开发到技术经理，持续在核心系统中承担架构设计与攻坚职责。',
    },
    projects: {
      eyebrow: 'Featured Work',
      title: '精选',
      highlight: '项目作品',
      desc: '覆盖 AI 招聘、复合用工、金融、报表引擎等领域，均以可量化的稳定性与效率成果落地。',
    },
    education: {
      eyebrow: 'Education & Certs',
      title: '教育背景',
      highlight: '与资格证书',
      desc: '',
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: '期待与你',
      highlight: '进一步交流',
      desc: '目前处于离职状态，可随时到岗。若贵司正在寻找兼具架构深度与 AI 工程化落地能力的技术负责人，欢迎联系。',
    },
  },

  // 技能栈高亮徽章
  skillsHighlightBadge: 'Highlight',

  // 项目卡片
  projectVisit: '访问',

  // 联系方式
  contactTitle: '联系方式',
  contactRolesTitle: '期望职位',
  contactCity: '期望城市',
  contactSalary: '期望薪资',
  contactAvailability: '到岗时间',
  contactAvailabilityValue: '随时到岗',
  channelPhone: '电话',
  channelEmail: '邮箱',
  channelWechat: '微信',

  // 资格证书
  certTitle: '资格证书',
  certNote: '持续学习现代 JDK（21/25/26）特性、AI 工程化与分布式架构，保持技术敏感度与工程实践的前沿性。',

  // 页脚
  footerBackToTop: '回到顶部',
  footerRights: '保留所有权利',
  footerCredit: '以 React + Vite 构建，用',
  footerCreditTail: '打磨细节',
}

const en = {
  // Accessibility labels
  langSwitchAria: 'Switch language',
  themeAria: 'Toggle theme',
  menuAria: 'Menu',
  copyAria: 'Copy',
  scrollDownAria: 'Scroll down',

  // Nav / Hero
  navContact: 'Contact',
  heroCtaPrimary: 'View Selected Projects',
  heroCtaSecondary: 'Contact Me',
  heroScrollHint: 'AI Literacy',
  heroYearExp: 'yrs exp',
  heroExpectPrefix: 'Expect ',

  // Section headings
  sections: {
    ai: {
      eyebrow: 'AI Literacy · Core Edge',
      title: 'Production-Grade',
      highlight: 'AI Engineering',
      desc: 'Beyond concepts: embedding LLM capabilities into enterprise systems stably and controllably, and converting them into measurable business value.',
    },
    advantages: {
      eyebrow: 'Why Me',
      title: 'Four Core',
      highlight: 'Strengths',
      desc: 'Technical depth, AI vision, engineering standards and collaboration — a composite edge that is deliverable, measurable and sustainable.',
    },
    skills: {
      eyebrow: 'Tech Stack',
      title: 'Tech',
      highlight: 'Stack',
      desc: 'From backend core to AI engineering: a complete capability matrix spanning architecture, performance and engineering efficiency.',
    },
    experience: {
      eyebrow: 'Career Path',
      title: 'Career',
      highlight: 'Experience',
      desc: 'A 10-year trajectory from backend developer to engineering manager, consistently owning architecture design and hard problems in core systems.',
    },
    projects: {
      eyebrow: 'Featured Work',
      title: 'Selected',
      highlight: 'Projects',
      desc: 'Spanning AI recruiting, flexible workforce, fintech and reporting engines — all delivered with measurable stability and efficiency gains.',
    },
    education: {
      eyebrow: 'Education & Certs',
      title: 'Education',
      highlight: '& Certifications',
      desc: '',
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: "Let's",
      highlight: 'Connect',
      desc: "I'm currently between roles and available immediately. If you're looking for a tech lead with both architecture depth and hands-on AI engineering, let's talk.",
    },
  },

  // Skills highlight badge
  skillsHighlightBadge: 'Highlight',

  // Project card
  projectVisit: 'Visit',

  // Contact
  contactTitle: 'Contact',
  contactRolesTitle: 'Expected Roles',
  contactCity: 'City',
  contactSalary: 'Salary',
  contactAvailability: 'Availability',
  contactAvailabilityValue: 'Immediately',
  channelPhone: 'Phone',
  channelEmail: 'Email',
  channelWechat: 'WeChat',

  // Certifications
  certTitle: 'Certifications',
  certNote: 'Continuously exploring modern JDK (21/25/26) features, AI engineering and distributed architecture to stay at the front of engineering practice.',

  // Footer
  footerBackToTop: 'Back to Top',
  footerRights: 'All rights reserved',
  footerCredit: 'Built with React + Vite, crafted with',
  footerCreditTail: 'for detail',
}

export default { zh, en }
