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
      eyebrow: 'AI Literacy · 差异化能力',
      title: 'LLM 的',
      highlight: '边界与工程化',
      desc: '不讲 API 名词，讲 LLM 的边界判断：谁负责生成、谁负责计算，以及如何用工程手段驯服它的不确定性。',
    },
    advantages: {
      eyebrow: 'Why Me',
      title: '四大',
      highlight: '核心优势',
      desc: '三次 0→1、一条贯穿 5 个项目的抽象主线、数据密集链路的一致性治理，以及 HR SaaS 全链路的领域纵深。',
    },
    skills: {
      eyebrow: 'Tech Stack',
      title: '技术',
      highlight: '技能栈',
      desc: '从后端核心到 LLM 工程化：配置驱动架构、数据密集链路、规则引擎与工程质量基线。',
    },
    experience: {
      eyebrow: 'Career Path',
      title: '职业',
      highlight: '工作经历',
      desc: '一条清晰的成长曲线：早期把系统建起来，中期同时撑起三个平台，近期把业务跑通、把大模型接进存量体系。',
    },
    projects: {
      eyebrow: 'Featured Work',
      title: '精选',
      highlight: '项目作品',
      desc: '5 个项目拼成一条完整的 HR SaaS 业务链：组织人事主数据 → 考勤 → 绩效 → 招聘 → 报表消费，数字均可回溯到提交记录。',
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
      desc: '目前处于离职状态，可随时到岗。若贵司正在寻找能把平台级系统从零建起、并把大模型稳定接进存量系统的后端，欢迎联系。',
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
  certNote: '持续跟进现代 JDK 特性（Records / 虚拟线程）、LLM 工程化与数据密集链路的一致性治理，保持技术敏感度与工程实践的前沿性。',

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
      eyebrow: 'AI Literacy · Differentiator',
      title: 'LLM Boundaries,',
      highlight: 'Engineered',
      desc: 'Not API names — boundaries and engineering judgement: who generates, who computes, and how to tame model uncertainty with engineering discipline.',
    },
    advantages: {
      eyebrow: 'Why Me',
      title: 'Four Core',
      highlight: 'Strengths',
      desc: 'Three platform builds from zero, one abstraction thread across five projects, consistency engineering for data-intensive pipelines, and end-to-end HR SaaS domain depth.',
    },
    skills: {
      eyebrow: 'Tech Stack',
      title: 'Tech',
      highlight: 'Stack',
      desc: 'From backend core to LLM engineering: configuration-driven architecture, data-intensive pipelines, rule engines and a solid engineering-quality baseline.',
    },
    experience: {
      eyebrow: 'Career Path',
      title: 'Career',
      highlight: 'Experience',
      desc: 'A clear growth curve: early years building systems, the middle years carrying three platforms at once, and the recent year bringing business flows and LLMs into the existing stack.',
    },
    projects: {
      eyebrow: 'Featured Work',
      title: 'Selected',
      highlight: 'Projects',
      desc: 'Five projects form one complete HR SaaS chain: org/HR master data → attendance → performance → recruiting → reporting — every number traceable back to commits.',
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
      desc: "I'm currently between roles and available immediately. If you're looking for a backend engineer who can build platform systems from zero and wire LLMs reliably into existing systems, let's talk.",
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
  certNote: 'Continuously following modern JDK features (Records, virtual threads), LLM engineering practice and consistency governance for data-intensive pipelines.',

  // Footer
  footerBackToTop: 'Back to Top',
  footerRights: 'All rights reserved',
  footerCredit: 'Built with React + Vite, crafted with',
  footerCreditTail: 'for detail',
}

export default { zh, en }
