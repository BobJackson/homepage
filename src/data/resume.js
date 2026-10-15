/**
 * 简历结构化数据 · 中英双语
 * 原则：量化成果前置、关键词可扫读、AI 工程化能力单独凸显
 * 语言切换见 src/i18n/LanguageContext.jsx（localStorage 持久化）
 */

const zh = {
  profile: {
    name: '王幼松',
    nameEn: 'Wang Yousong',
    title: 'Java 架构师 / 技术经理',
    // 一句话价值主张（首屏大标题下方）
    tagline: '10 年 Java 后端与架构经验，专注高并发分布式系统与千万级数据治理；主导 MCP、Spring AI、LangChain4j 等大模型能力的企业级工程化落地，用 AI 重构传统业务流程。',
    location: '上海',
    status: '离职 · 随时到岗',
    experienceYears: 10,
    education: '本科 · 软件工程',
    contact: {
      phone: '17602196213',
      wechat: 'Bob_Jackson',
      email: '1187688895@qq.com',
    },
    expectations: {
      type: '全职',
      city: '上海',
      salary: '35–40K',
      roles: ['架构师', '技术经理', 'Java 高级/资深工程师'],
    },
  },

  /** 首屏核心数据 —— 招聘者 3 秒抓住价值 */
  heroStats: [
    { value: '10', suffix: '年+', label: 'Java 后端 / 架构经验' },
    { value: '1300', suffix: '万+', label: '数据平滑迁移与架构优化' },
    { value: '99.95', suffix: '%', label: '核心系统可用性（99.5%→99.95%）' },
    { value: '60', suffix: '%+', label: '算薪自动化节省人力成本' },
  ],

  /** AI 素养专区 —— 核心竞争力差异化模块 */
  aiLiteracy: {
    lead: '不止会调用大模型，更懂如何把 AI 稳定、可控地嵌入企业级系统。从协议层（MCP）到应用框架（Spring AI / LangChain4j），再到业务落地（智能招聘、LUI 查询），我负责让 AI 真正产生业务价值。',
    capabilities: [
      {
        icon: 'plug',
        title: 'MCP 协议实践',
        tag: 'Model Context Protocol',
        desc: '深入实践 MCP，标准化大模型与外部工具 / 数据源的上下文交互，为 Agent 能力接入企业系统打通「最后一公里」。',
        points: ['工具 / 上下文标准化接入', 'Agent 与企业服务解耦', '可扩展的能力编排'],
      },
      {
        icon: 'brain',
        title: '企业级大模型集成',
        tag: 'Spring AI · LangChain4j',
        desc: '在 Spring 生态中集成大模型能力，落地 RAG 检索增强、Function Calling 工具调用与 Prompt 工程，兼顾稳定性与成本。',
        points: ['RAG 检索增强生成', 'Function Calling / 工具调用', 'Prompt 工程与效果调优'],
      },
      {
        icon: 'bot',
        title: 'AI Agent 与工作流',
        tag: 'Dify · 企业微信机器人',
        desc: '集成 Dify AI 平台与企业微信智能机器人，实现岗位智能搜索、自动邀约发送与用户反馈收集，显著优化招聘流程。',
        points: ['岗位智能搜索', '自动邀约与反馈闭环', '招聘效率与候选人体验双升'],
      },
      {
        icon: 'sparkles',
        title: '智能化业务落地',
        tag: 'LUI · AI 招募',
        desc: '主导 LUI 智能查询系统与 AI 招募平台，用自然语言交互升级传统业务流程，支撑日均 5000+ 岗位发布与全链路数字化。',
        points: ['自然语言查询（LUI）', 'AI 驱动智能招聘', '自动化薪酬核算全链路'],
      },
    ],
    metrics: [
      { value: '5000+', label: '日均岗位稳定发布' },
      { value: '2万+', label: '月处理薪酬账单' },
      { value: '10万+', label: '服务月活用户' },
      { value: '6000+', label: '自动化引流报名用户' },
    ],
  },

  /** 核心优势 —— 由「个人优势」提炼 */
  advantages: [
    {
      icon: 'cpu',
      title: '深厚后端与架构功底',
      desc: '10 年 Java 后端经验，深入掌握现代 JDK（21/25/26）特性与底层原理；擅长 Spring Boot 性能优化，独立主导 1300 万+ 数据平滑迁移，以微服务与分布式架构攻克高并发瓶颈。',
    },
    {
      icon: 'sparkles',
      title: 'AI 工程化前瞻落地',
      desc: '在 AI 工程化方面具备前瞻视野与实战能力，深入实践 MCP、LangChain4j、Spring AI，主导大模型能力集成至企业级应用（如 LUI 智能查询），实现传统业务流程智能化升级。',
    },
    {
      icon: 'shield',
      title: '高质量工程标准',
      desc: '熟练运用 DDD 应对复杂业务建模，提升可维护性与扩展性；推行标准化、自动化的本地开发工程化实践，结合 TDD 与持续重构，显著提升交付效率与协作质量。',
    },
    {
      icon: 'users',
      title: '技术洞察与跨部门协同',
      desc: '在初创及收缩期团队担任核心开发，精准对齐业务目标与技术架构；关注方案对成本与运营效率的实际影响，能清晰表达复杂技术方案，推动团队与业务高效协作。',
    },
  ],

  /** 技能栈 —— 分类呈现 */
  skills: [
    {
      category: '后端核心',
      icon: 'code',
      items: ['Java (JDK 21/25/26)', 'Spring Boot', 'Spring Cloud', 'Dubbo', 'MyBatis-Plus', 'JPA'],
    },
    {
      category: '架构与中间件',
      icon: 'layers',
      items: ['微服务架构', '分布式系统', 'DDD 领域驱动', 'RabbitMQ', 'Redis / Redisson', 'XXL-Job', 'Flowable 工作流'],
    },
    {
      category: '数据与存储',
      icon: 'database',
      items: ['PostgreSQL', 'PolarDB', 'MySQL', 'Trino 联邦查询', 'NoSQL', '阿里云 OSS / DTS'],
    },
    {
      category: 'AI 工程化',
      icon: 'sparkles',
      highlight: true,
      items: ['MCP', 'Spring AI', 'LangChain4j', 'Dify', 'RAG', 'Function Calling', 'Prompt 工程'],
    },
    {
      category: '工程实践与 DevOps',
      icon: 'git',
      items: ['TDD 测试驱动', 'CI/CD', 'Docker', '单元测试 (85%+)', 'Code Review', 'SonarQube', 'ELK', 'Swagger', '敏捷 / 极限编程'],
    },
  ],

  /** 工作经历 —— 时间线 */
  experience: [
    {
      company: '上海欧伏网络科技有限公司',
      role: '技术经理',
      period: '2022.11 – 2026.06',
      current: false,
      tags: ['AI 工程化', '架构设计', '团队管理', '低代码'],
      highlights: [
        '集成 Dify AI 平台与企业微信智能机器人，实现岗位智能搜索、自动邀约与反馈收集，显著提升招聘效率与候选人体验。',
        '主导基于 Trino 的动态报表引擎，实现多数据源联邦查询与高级聚合，为低代码平台扩展报表能力，获投资人高度评价。',
        '设计闲鱼账号自动绑定、内容自动生成与流量控制机制，吸引 6000+ 报名用户，日均处理 40+ 次操作。',
        '基于阿里云 DTS 构建员工信息变更与快照系统，以无侵入式服务提供清晰时间线，获用户一致认可。',
        '开发企业级绩效管理与提成薪酬计算系统，支持多维度评估、灵活权重配置与 Boss 成本账单延时生成。',
      ],
    },
    {
      company: '上海瀚诚软件科技有限公司',
      role: 'Java 高级开发工程师',
      period: '2021.03 – 2022.07',
      tags: ['Spring Cloud', 'PostgreSQL', 'Docker', 'TDD', 'CI/CD'],
      highlights: [
        '设计并优化 Fiola 金融项目架构，整合 CI/CD 流程，主导 config-server 与 chrome-headless 服务，提升开发效率与稳定性。',
        '负责 Fiola 用户模块与 ETL 模块核心开发，满足高并发、高性能业务需求，保障项目按时交付。',
        '主导 Workio 人事系统时间管理模块（排班、加班、打卡、请假、考勤），提升人事管理效率与数据准确性。',
        '推动 TDD 与结对编程实践超一年，领导 Fiola 一期交付并促成二期合同与长安汽车新合作。',
      ],
    },
    {
      company: '名霆（上海）信息技术有限公司',
      role: 'Java 高级开发工程师',
      period: '2019.07 – 2020.11',
      tags: ['Spring Boot', 'SaaS', '系统重构', 'Swagger'],
      highlights: [
        '主导贷款超市项目全面重构，独立完成架构设计与商家、渠道、产品、贷款、权限、统计等核心模块开发。',
        '集成 Swagger 与 Spring Boot，优化自动化发布流程，团队开发与部署效率提升 30%+。',
        '主导项目迁移至 SaaS 平台并重构架构，降低服务器成本约 25%，减少日常维护工作量。',
        '参与短信平台重构，搭建基础框架并实现发送核心模块，保障高并发场景稳定运行。',
      ],
    },
    {
      company: '上海东琳教育科技有限公司',
      role: 'Java 后端开发 → 后端负责人',
      period: '2016.07 – 2019.06',
      tags: ['Spring Boot', 'JPA', '性能优化', 'ELK'],
      highlights: [
        '主导并独立完成自动化答题卡模块全流程开发，引入缓存与性能调优，推动 v1.0 提前两个月上线，获提前转正并升任后端负责人。',
        '深度参与题库、权限、测验模块开发与性能优化，提升系统响应速度与交互体验。',
        '主导关键模块 Code Review，推动团队代码规范统一；推广 IntelliJ IDEA 与 Java 8 Stream / Lambda 特性。',
      ],
    },
  ],

  /** 精选项目 */
  projects: [
    {
      name: 'AI 招募',
      role: '技术经理',
      period: '2025.09 – 2026.05',
      link: 'https://aizhaomu.offersaas.com/',
      featured: true,
      ai: true,
      summary:
        '面向灵活用工场景的企业级 HR SaaS 平台，整合闲鱼、企业微信等生态，实现 AI 驱动的智能招聘与自动化薪酬核算全链路数字化。支撑日均 5000+ 岗位发布、月处理 2万+ 笔薪酬账单、服务 10万+ 月活用户。',
      highlights: [
        '主导薪酬核算引擎重构，采用状态表与数据表分离架构，解决 BOSS 成本跨月分摊、离职清算等复杂场景的数据一致性。',
        '基于 Redisson RRateLimiter 设计分布式限流方案，将闲鱼 API 限流错误率降低 90%+，支撑日均 5000+ 岗位稳定发布。',
        '批量删除岗位接口响应从 8s 优化至 1.2s；薪酬计算并行流优化，整体耗时减少 40%。',
        '系统可用性从 99.5% 提升至 99.95%，核心接口 P99 延迟控制在 500ms 以内；算薪自动化每月节省人力成本 60%+。',
      ],
      metrics: [
        { value: '99.95%', label: '系统可用性' },
        { value: 'P99<500ms', label: '核心接口延迟' },
        { value: '8s→1.2s', label: '批量接口优化' },
        { value: '↓90%', label: 'API 限流错误率' },
      ],
      tags: ['Spring Boot', 'Dubbo', 'Redisson', 'RabbitMQ', 'Dify AI', 'PostgreSQL'],
    },
    {
      name: '复合用工平台',
      role: '技术经理',
      period: '2024.08 – 2025.08',
      link: 'https://lg.offersaas.com/',
      featured: true,
      summary:
        '面向大中型企业的一站式人力资源全生命周期管理系统，支持正式工、派遣、灵工、项目制等多模式复合用工，解决高并发下合同签署、复杂审批流转与百万级员工数据的高效管理。',
      highlights: [
        '主导 OfferPersonnel 人事核心服务设计，以策略模式支撑多用工形态差异化规则，保障高频变更下花名册数据强一致性。',
        '基于 Flowable 深度二次开发构建可配置审批中台，支撑入离职、合同盖章、OA 请假等 20+ 业务场景，审批流与业务完全解耦。',
        '以适配器模式屏蔽 e签宝、上上签等签章服务商差异，异步队列 + 状态机解决长延迟签署状态同步，签署成功率提升至 99.5%+。',
        '设计「预校验-分批处理-错误回滚」三段式导入流程，单批次稳定处理万级数据；多级缓存优化使核心接口响应提升约 30%。',
      ],
      metrics: [
        { value: '20+', label: '审批业务场景' },
        { value: '99.5%+', label: '电子签署成功率' },
        { value: '万级', label: '单批次数据处理' },
        { value: '↑30%', label: '核心接口响应' },
      ],
      tags: ['Spring Boot', 'Dubbo', 'Flowable', 'RabbitMQ', 'Redis', 'XXL-Job', 'PostgreSQL'],
    },
    {
      name: 'report · 动态报表引擎',
      role: '后端负责人',
      period: '2022.12 – 2024.07',
      summary:
        '基于 Trino 构建自定义报表引擎，实现对海量异构数据的高效联邦查询，根据用户条件动态生成高级 SQL，并支持租户隔离、逻辑删除、自定义字段与 JSON 字段翻译。',
      highlights: [
        '主导技术选型与架构设计，从零搭建报表引擎核心模块，支撑低代码平台报表能力扩展。',
        '采用 TDD 开发所有关键组件，保障代码质量与可维护性。',
        '协同前端、低代码后端与运维团队推动系统顺利上线，为业务提供稳定高效的报表服务。',
      ],
      tags: ['Trino', 'Spring Boot', 'TDD', '联邦查询', '低代码'],
    },
    {
      name: 'datahub · 数据中心',
      role: '后端负责人',
      period: '2023.03 – 2024.06',
      summary:
        '构建数据库变更记录与员工快照的高效采集机制，保障数据准确性与实时性，为业务决策提供可靠数据基础。',
      highlights: [
        '主导后端架构设计与核心接口开发，确保系统高稳定与良好扩展性。',
        '优化数据处理流程，系统整体处理效率提升 30%，数据准确率进一步提高。',
        '通过技术指导与任务分配提升团队协作效率，保障后端功能稳定交付。',
      ],
      tags: ['阿里云 DTS', 'Spring Boot', '数据快照', '架构设计'],
    },
    {
      name: 'FIOLA · 开放银行金融平台',
      role: '后端开发工程师',
      period: '2021.03 – 2021.06',
      link: 'https://fiola.sit.finexos.co.uk/',
      summary:
        '基于开放银行 API 的金融管理平台，在用户授权下提取银行数据，分析消费行为与财务模式，提供月度财务管理评分并识别潜在财务风险。',
      highlights: [
        '开发并优化客户财务健康评分模型后端逻辑，自动识别高杠杆 / 违约风险用户，助运营提前干预。',
        '主导项目框架搭建与 IAM 模块核心开发，独立完成信用报告模块设计与实现。',
        '全面实践 TDD，项目代码测试覆盖率达 100%，赢得客户高度信任。',
      ],
      tags: ['Spring Cloud', 'PostgreSQL', 'Docker', 'TDD', 'ETL', '开放银行'],
    },
    {
      name: '贷款超市 · SaaS 平台',
      role: 'Java 高级开发工程师',
      period: '2019.07 – 2020.11',
      summary:
        '主导贷款超市重构版 SaaS 平台开发，为商家提供产品线管理、营销策略配置、白名单管理与多维度数据统计，提升渠道运营效率与转化率。',
      highlights: [
        '在原有模型基础上完成 95% 代码重写，采用 Spring Boot + JPA + MyBatis 技术栈应对复杂统计需求。',
        '引入 Swagger 优化 API 管理，设计精细化权限控制机制保障敏感资源访问安全。',
        '统一全局异常处理与返回数据封装，规范代码结构与业务模型设计，增强系统健壮性。',
      ],
      tags: ['Spring Boot', 'JPA', 'MyBatis', 'Swagger', 'SaaS', '权限控制'],
    },
    {
      name: 'Workio · 人事管理系统',
      role: 'Java 高级开发工程师',
      period: '2021.06 – 2022.07',
      summary:
        '围绕「人、时、钱」三大核心要素，构建组织管理、考勤追踪、工资处理、员工激励、快速报销及临时劳动力管理六大模块的人力资源管理系统。',
      highlights: [
        '主导考勤模块设计与实现，覆盖排班、打卡、请假等核心流程，实现自动化处理与精准统计。',
        '与三支开发小组紧密协作，确保各模块高效集成与协同运行。',
        '显著提升系统易用性与数据准确性，为管理层提供更高效的决策支持。',
      ],
      tags: ['Spring Boot', '考勤引擎', '人事管理', '敏捷开发'],
    },
    {
      name: '教宜优 · 智能学习诊断系统',
      role: 'Java 后端负责人',
      period: '2016.07 – 2019.06',
      summary:
        '智能化学习诊断与训练系统，通过测验数据采集与分析自动生成个性化学习报告与练习内容，支持扫描答题卡线上自动批改与多维度分析报告。',
      highlights: [
        '主导自动化答题卡模块从零开发，对接扫描仪软件，保障作答数据稳定采集，为报告生成提供可靠数据源。',
        '产品成功在上海 10+ 所初中推广（含七宝中学），获家长与老师一致好评。',
        '作为后端负责人为初级开发提供技术指导，并在跨部门沟通中发挥关键作用。',
      ],
      tags: ['Spring Boot', 'JPA', 'ELK', 'SonarQube', '微信公众号 / 支付', '敏捷'],
    },
  ],

  /** 教育经历 */
  education: {
    school: '合肥大学',
    major: '软件工程',
    degree: '本科',
    period: '2012 – 2016',
    highlights: [
      '2012.09 – 2014.09：担任计算机系实验室管理员助理兼学生会计算机服务队副主任。',
      '2014.09 – 2015.03：首次参与企业项目 IMS 系统开发。',
      '2015.03 – 2015.05：参与供热供暖系统，负责框架搭建、权限模块与 HighCharts 报表。',
    ],
  },

  /** 资格证书 */
  certifications: [{ name: '大学英语六级（CET-6）', icon: 'award' }],

  /** 导航项 */
  navItems: [
    { id: 'ai', label: 'AI 素养' },
    { id: 'advantages', label: '核心优势' },
    { id: 'skills', label: '技能栈' },
    { id: 'experience', label: '工作经历' },
    { id: 'projects', label: '精选项目' },
    { id: 'contact', label: '联系我' },
  ],
}

const en = {
  profile: {
    name: 'Wang Yousong',
    nameEn: 'Wang Yousong',
    title: 'Java Architect / Engineering Manager',
    tagline:
      '10 years of Java backend and architecture experience, focused on high-concurrency distributed systems and large-scale (10M+ records) data governance; led enterprise-grade engineering adoption of LLM capabilities including MCP, Spring AI and LangChain4j — using AI to re-engineer traditional business processes.',
    location: 'Shanghai',
    status: 'Available · Ready to Join Immediately',
    experienceYears: 10,
    education: "Bachelor's · Software Engineering",
    contact: {
      phone: '17602196213',
      wechat: 'Bob_Jackson',
      email: '1187688895@qq.com',
    },
    expectations: {
      type: 'Full-time',
      city: 'Shanghai',
      salary: '35–40K CNY/mo',
      roles: ['Architect', 'Engineering Manager', 'Senior / Staff Java Engineer'],
    },
  },

  /** Hero stats — value visible to recruiters in 3 seconds */
  heroStats: [
    { value: '10', suffix: 'yrs+', label: 'Java backend / architecture' },
    { value: '13', suffix: 'M+', label: 'Records migrated & architecture optimized' },
    { value: '99.95', suffix: '%', label: 'Core system availability (99.5% → 99.95%)' },
    { value: '60', suffix: '%+', label: 'Labor cost saved by payroll automation' },
  ],

  /** AI literacy section — differentiated core competency */
  aiLiteracy: {
    lead: 'More than calling LLM APIs — I know how to embed AI into enterprise systems stably and controllably. From the protocol layer (MCP) to application frameworks (Spring AI / LangChain4j) and business delivery (intelligent recruiting, LUI querying), I make AI generate real business value.',
    capabilities: [
      {
        icon: 'plug',
        title: 'MCP Protocol in Practice',
        tag: 'Model Context Protocol',
        desc: 'Hands-on MCP practice: standardizing context interaction between LLMs and external tools / data sources, connecting Agent capabilities to enterprise systems at the last mile.',
        points: ['Standardized tool / context integration', 'Agent–service decoupling', 'Scalable capability orchestration'],
      },
      {
        icon: 'brain',
        title: 'Enterprise LLM Integration',
        tag: 'Spring AI · LangChain4j',
        desc: 'Integrated LLM capabilities in the Spring ecosystem — RAG, Function Calling and prompt engineering — balancing stability and cost.',
        points: ['RAG retrieval-augmented generation', 'Function Calling / tool use', 'Prompt engineering & tuning'],
      },
      {
        icon: 'bot',
        title: 'AI Agent & Workflow',
        tag: 'Dify · WeCom Bot',
        desc: 'Integrated the Dify AI platform with WeCom intelligent bots for smart job search, automated invitations and feedback collection — significantly streamlining the recruiting pipeline.',
        points: ['Intelligent job search', 'Automated invitation & feedback loop', 'Recruiting efficiency + candidate experience'],
      },
      {
        icon: 'sparkles',
        title: 'AI in Production',
        tag: 'LUI · AI Recruiting',
        desc: 'Led the LUI natural-language query system and the AI recruiting platform, upgrading traditional business flows with conversational interaction and supporting 5,000+ daily job postings end-to-end.',
        points: ['Natural-language query (LUI)', 'AI-driven recruiting', 'Automated payroll end-to-end'],
      },
    ],
    metrics: [
      { value: '5,000+', label: 'Daily job postings' },
      { value: '20K+', label: 'Monthly payroll runs' },
      { value: '100K+', label: 'Monthly active users' },
      { value: '6,000+', label: 'Automated-referral signups' },
    ],
  },

  /** Core strengths — distilled from personal advantages */
  advantages: [
    {
      icon: 'cpu',
      title: 'Deep Backend & Architecture Expertise',
      desc: '10 years of Java backend experience with fluency in modern JDK (21/25/26) features and internals; expert in Spring Boot performance tuning; independently led a smooth migration of 13M+ records and solved high-concurrency bottlenecks with microservice and distributed architecture.',
    },
    {
      icon: 'sparkles',
      title: 'AI Engineering, Delivered',
      desc: 'Forward-looking, hands-on AI engineering: deep practice with MCP, LangChain4j and Spring AI; led the integration of LLM capabilities into enterprise applications (e.g., the LUI natural-language query system), upgrading traditional business processes.',
    },
    {
      icon: 'shield',
      title: 'High Engineering Standards',
      desc: 'Applies DDD to complex domain modeling for maintainability and extensibility; drives standardized, automated local development practices; combines TDD with continuous refactoring for measurably better delivery efficiency and collaboration quality.',
    },
    {
      icon: 'users',
      title: 'Technical Insight & Cross-team Collaboration',
      desc: 'Core developer in startup and downsizing teams, aligning business goals with technical architecture; evaluates designs by cost and operational impact; communicates complex technical plans clearly and drives efficient team–business collaboration.',
    },
  ],

  /** Tech stack — grouped presentation */
  skills: [
    {
      category: 'Backend Core',
      icon: 'code',
      items: ['Java (JDK 21/25/26)', 'Spring Boot', 'Spring Cloud', 'Dubbo', 'MyBatis-Plus', 'JPA'],
    },
    {
      category: 'Architecture & Middleware',
      icon: 'layers',
      items: ['Microservices', 'Distributed Systems', 'DDD', 'RabbitMQ', 'Redis / Redisson', 'XXL-Job', 'Flowable'],
    },
    {
      category: 'Data & Storage',
      icon: 'database',
      items: ['PostgreSQL', 'PolarDB', 'MySQL', 'Trino Federated Query', 'NoSQL', 'Alibaba Cloud OSS / DTS'],
    },
    {
      category: 'AI Engineering',
      icon: 'sparkles',
      highlight: true,
      items: ['MCP', 'Spring AI', 'LangChain4j', 'Dify', 'RAG', 'Function Calling', 'Prompt Engineering'],
    },
    {
      category: 'Engineering Practices & DevOps',
      icon: 'git',
      items: ['TDD', 'CI/CD', 'Docker', 'Unit Testing (85%+)', 'Code Review', 'SonarQube', 'ELK', 'Swagger', 'Agile / XP'],
    },
  ],

  /** Work experience — timeline */
  experience: [
    {
      company: 'Shanghai Oufu Network Technology Co., Ltd.',
      role: 'Engineering Manager',
      period: '2022.11 – 2026.06',
      current: false,
      tags: ['AI Engineering', 'Architecture Design', 'Team Leadership', 'Low-Code'],
      highlights: [
        'Integrated the Dify AI platform with WeCom intelligent bots for smart job search, automated invitations and feedback collection — significantly improving recruiting efficiency and candidate experience.',
        'Led a Trino-based dynamic reporting engine with multi-source federated queries and advanced aggregation, extending the low-code platform’s reporting capabilities to strong investor acclaim.',
        'Designed Xianyu account auto-binding, content auto-generation and traffic throttling, attracting 6,000+ registered users with 40+ operations handled daily.',
        'Built an employee-change and snapshot system on Alibaba Cloud DTS, delivering clear timelines through a non-invasive service — highly praised by users.',
        'Developed enterprise performance management and commission payroll systems supporting multi-dimensional assessment, flexible weighting and delayed BOSS cost billing.',
      ],
    },
    {
      company: 'Shanghai Hancheng Software Technology Co., Ltd.',
      role: 'Senior Java Developer',
      period: '2021.03 – 2022.07',
      tags: ['Spring Cloud', 'PostgreSQL', 'Docker', 'TDD', 'CI/CD'],
      highlights: [
        'Designed and optimized the Fiola financial platform architecture, integrated CI/CD, and led config-server and chrome-headless services — improving development efficiency and stability.',
        'Owned core development of the Fiola user and ETL modules, meeting high-concurrency, high-performance requirements and shipping on time.',
        'Led the Workio HR time-management module (scheduling, overtime, clock-in, leave, attendance), improving HR efficiency and data accuracy.',
        'Drove TDD and pair programming for over a year, led Fiola Phase-1 delivery and helped secure the Phase-2 contract and a new partnership with Changan Auto.',
      ],
    },
    {
      company: 'Mingting (Shanghai) Information Technology Co., Ltd.',
      role: 'Senior Java Developer',
      period: '2019.07 – 2020.11',
      tags: ['Spring Boot', 'SaaS', 'Refactoring', 'Swagger'],
      highlights: [
        'Led a full refactor of the Loan Supermarket platform — solo architecture design plus core modules: merchant, channel, product, loan, permissions and statistics.',
        'Integrated Swagger with Spring Boot and optimized automated releases; team development and deployment efficiency up 30%+.',
        'Migrated the project to a SaaS platform and re-architected it, cutting server cost by ~25% and reducing daily maintenance effort.',
        'Contributed to the SMS platform refactor: built the base framework and implemented the core sending module for stable high-concurrency operation.',
      ],
    },
    {
      company: 'Shanghai Donglin Education Technology Co., Ltd.',
      role: 'Java Developer → Backend Lead',
      period: '2016.07 – 2019.06',
      tags: ['Spring Boot', 'JPA', 'Performance Tuning', 'ELK'],
      highlights: [
        'Solely delivered the automated answer-sheet module end-to-end with caching and performance tuning; v1.0 shipped two months early — earning early conversion to permanent staff and promotion to Backend Lead.',
        'Deeply involved in question-bank, permissions and quiz module development and performance optimization, improving response speed and user experience.',
        'Led Code Review on key modules to unify team standards; promoted IntelliJ IDEA and Java 8 Stream / Lambda features.',
      ],
    },
  ],

  /** Selected projects */
  projects: [
    {
      name: 'AI Recruiting',
      role: 'Engineering Manager',
      period: '2025.09 – 2026.05',
      link: 'https://aizhaomu.offersaas.com/',
      featured: true,
      ai: true,
      summary:
        'An enterprise HR SaaS platform for flexible staffing, integrating the Xianyu and WeCom ecosystems for AI-driven intelligent recruiting and fully digitalized automated payroll. Supports 5,000+ daily job postings, 20K+ monthly payroll runs and 100K+ monthly active users.',
      highlights: [
        'Led the payroll engine refactor with a status/data table separation architecture, solving data consistency for complex scenarios such as cross-month BOSS cost amortization and offboarding settlement.',
        'Designed a distributed rate limiter on Redisson RRateLimiter, cutting Xianyu API throttling errors by 90%+ and sustaining 5,000+ daily job postings.',
        'Batch job-deletion API response time cut from 8s to 1.2s; parallel-stream optimization of payroll computation reduced overall time by 40%.',
        'System availability raised from 99.5% to 99.95% with core API P99 latency under 500ms; payroll automation saves 60%+ in labor cost every month.',
      ],
      metrics: [
        { value: '99.95%', label: 'System availability' },
        { value: 'P99<500ms', label: 'Core API latency' },
        { value: '8s→1.2s', label: 'Batch API optimization' },
        { value: '↓90%', label: 'API throttling error rate' },
      ],
      tags: ['Spring Boot', 'Dubbo', 'Redisson', 'RabbitMQ', 'Dify AI', 'PostgreSQL'],
    },
    {
      name: 'Flexible Workforce Platform',
      role: 'Engineering Manager',
      period: '2024.08 – 2025.08',
      link: 'https://lg.offersaas.com/',
      featured: true,
      summary:
        'A one-stop full-lifecycle HR management platform for mid-to-large enterprises, supporting direct employment, dispatch, gig and project-based staffing — solving high-concurrency contract signing, complex approval flows and efficient management of million-level employee data.',
      highlights: [
        'Led the OfferPersonnel core HR service design, using the strategy pattern to support differentiated rules across staffing forms and keep roster data strongly consistent under frequent changes.',
        'Built a configurable approval hub on a deeply customized Flowable, supporting 20+ business scenarios (on/offboarding, contract stamping, OA leave) with approval flows fully decoupled from business logic.',
        'Used the adapter pattern to mask signature-vendor differences (e签宝, 上上签); async queues plus a state machine resolved long-latency signing status sync, lifting signing success to 99.5%+.',
        'Designed a “pre-check – batch processing – error rollback” three-stage import flow, stably processing 10K+ records per batch; multi-level caching improved core API response by ~30%.',
      ],
      metrics: [
        { value: '20+', label: 'Approval scenarios' },
        { value: '99.5%+', label: 'E-signing success rate' },
        { value: '10K+', label: 'Records per batch' },
        { value: '↑30%', label: 'Core API response' },
      ],
      tags: ['Spring Boot', 'Dubbo', 'Flowable', 'RabbitMQ', 'Redis', 'XXL-Job', 'PostgreSQL'],
    },
    {
      name: 'report · Dynamic Report Engine',
      role: 'Backend Lead',
      period: '2022.12 – 2024.07',
      summary:
        'A custom report engine built on Trino, delivering efficient federated queries over massive heterogeneous data, dynamically generating advanced SQL from user conditions, with tenant isolation, logical deletion, custom fields and JSON field translation.',
      highlights: [
        'Led technical selection and architecture design; built the engine’s core modules from zero, powering the low-code platform’s reporting capabilities.',
        'Applied TDD to all key components for quality and maintainability.',
        'Coordinated frontend, low-code backend and SRE teams for a smooth launch, delivering stable and efficient reporting services.',
      ],
      tags: ['Trino', 'Spring Boot', 'TDD', 'Federated Query', 'Low-Code'],
    },
    {
      name: 'datahub · Data Hub',
      role: 'Backend Lead',
      period: '2023.03 – 2024.06',
      summary:
        'Built an efficient collection mechanism for database change records and employee snapshots, ensuring data accuracy and timeliness as a reliable foundation for business decisions.',
      highlights: [
        'Led backend architecture design and core API development for high stability and good extensibility.',
        'Streamlined data processing, improving overall system throughput by 30% and further raising data accuracy.',
        'Improved team collaboration through technical mentoring and task allocation, ensuring stable backend delivery.',
      ],
      tags: ['Alibaba Cloud DTS', 'Spring Boot', 'Data Snapshot', 'Architecture Design'],
    },
    {
      name: 'FIOLA · Open Banking Platform',
      role: 'Backend Developer',
      period: '2021.03 – 2021.06',
      link: 'https://fiola.sit.finexos.co.uk/',
      summary:
        'An open-banking-API financial management platform that extracts bank data with user consent, analyzes spending behavior and financial patterns, delivers monthly financial-health scores and flags potential financial risks.',
      highlights: [
        'Developed and optimized the backend logic of the customer financial-health scoring model, automatically flagging high-leverage / default-risk users for early operations intervention.',
        'Led project framework setup and core IAM module development; independently designed and implemented the credit-report module.',
        'Practiced TDD throughout with 100% test coverage, earning strong client trust.',
      ],
      tags: ['Spring Cloud', 'PostgreSQL', 'Docker', 'TDD', 'ETL', 'Open Banking'],
    },
    {
      name: 'Loan Supermarket · SaaS Platform',
      role: 'Senior Java Developer',
      period: '2019.07 – 2020.11',
      summary:
        'Led the Loan Supermarket refactor SaaS platform, giving merchants product-line management, marketing strategy configuration, whitelist management and multi-dimensional statistics to lift channel efficiency and conversion.',
      highlights: [
        'Rewrote 95% of the codebase on a Spring Boot + JPA + MyBatis stack for complex statistics needs.',
        'Introduced Swagger for API management and designed fine-grained permission controls to secure sensitive resources.',
        'Unified global exception handling and response envelopes, standardizing code structure and domain modeling for robustness.',
      ],
      tags: ['Spring Boot', 'JPA', 'MyBatis', 'Swagger', 'SaaS', 'Access Control'],
    },
    {
      name: 'Workio · HR Management System',
      role: 'Senior Java Developer',
      period: '2021.06 – 2022.07',
      summary:
        'An HR management system built around the three pillars of people, time and money — six modules covering organization, attendance tracking, payroll, employee incentives, fast reimbursement and temporary workforce management.',
      highlights: [
        'Led attendance module design and implementation covering scheduling, clock-in and leave, with automated processing and accurate statistics.',
        'Worked closely with three development squads to ensure efficient integration and coordination.',
        'Significantly improved usability and data accuracy, supporting better management decisions.',
      ],
      tags: ['Spring Boot', 'Attendance Engine', 'HR Management', 'Agile'],
    },
    {
      name: 'JiaoYiYou · Intelligent Learning Diagnostics',
      role: 'Backend Lead (Java)',
      period: '2016.07 – 2019.06',
      summary:
        'An intelligent learning diagnosis and training system that collects and analyzes quiz data to auto-generate personalized study reports and exercises, with scanned answer-sheet auto-grading and multi-dimensional analysis.',
      highlights: [
        'Led the automated answer-sheet module from zero, integrating scanner software for stable response-data collection as a reliable source for report generation.',
        'The product rolled out to 10+ middle schools in Shanghai (including Qibao Middle School), earning praise from parents and teachers.',
        'As backend lead, mentored junior developers and played a key role in cross-department communication.',
      ],
      tags: ['Spring Boot', 'JPA', 'ELK', 'SonarQube', 'WeChat OA / Pay', 'Agile'],
    },
  ],

  /** Education */
  education: {
    school: 'Hefei University',
    major: 'Software Engineering',
    degree: "Bachelor's",
    period: '2012 – 2016',
    highlights: [
      'Sep 2012 – Sep 2014: Assistant lab administrator, Computer Science department; Deputy Director of the student union IT service team.',
      'Sep 2014 – Mar 2015: first enterprise project — development of the IMS system.',
      'Mar 2015 – May 2015: heating-supply system; framework setup, permissions module and HighCharts dashboards.',
    ],
  },

  /** Certifications */
  certifications: [{ name: 'CET-6 (College English Test, Band 6)', icon: 'award' }],

  /** Navigation items */
  navItems: [
    { id: 'ai', label: 'AI Literacy' },
    { id: 'advantages', label: 'Core Strengths' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
}

export const resume = { zh, en }
