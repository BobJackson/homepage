/**
 * 简历结构化数据 · 中英双语
 * 原则：事实与可核查数字前置、关键词可扫读、抽象主线与 AI 工程化单列
 * 数字口径：均来自 git 提交记录 / 代码审计（详见桌面临历文档），不使用无法验证的业务指标
 * 语言切换见 src/i18n/LanguageContext.jsx（localStorage 持久化）
 */

const zh = {
  profile: {
    name: '王幼松',
    nameEn: 'Wang Yousong',
    title: '资深 Java 后端 / 平台架构',
    // 一句话价值主张（首屏大标题下方）
    tagline:
      '专注平台级系统从 0 到 1 建设的后端工程师：三次把平台从零建成（组织人事 CDC 数据中心、考勤微服务、Trino 报表引擎），方法论是把业务变化点外置为配置与可插拔单元，用位点、幂等与状态机把外部不确定性收敛成业务确定性。5 个项目拼成一条 HR SaaS 全链路，近一年把大模型接进这条链。',
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
      roles: ['资深 / 专家 Java 后端', '后端架构师', '技术经理'],
    },
  },

  /** 首屏核心数据 —— 招聘者 3 秒抓住价值（均可回溯到提交记录） */
  heroStats: [
    { value: '10', suffix: '年+', label: 'Java 后端 / 平台建设经验' },
    { value: '3', suffix: '次', label: '平台级系统 0→1 从零建设' },
    { value: '123', suffix: '个', label: '主服务主干 Java 文件 100% 本人首次引入' },
    { value: '5', suffix: '环节', label: 'HR SaaS 全链路：人事数据 → 考勤 → 绩效 → 招聘 → 报表' },
  ],

  /** AI 素养专区 —— 不讲 API 名词，讲 LLM 的边界与工程化判断 */
  aiLiteracy: {
    lead: '不神化大模型，先给它划边界：LLM 负责生成、规则引擎负责计算；把慢且不确定的模型调用，用超时、熔断与幂等键包起来，再接进有事务、有状态、有幂等要求的存量系统 —— 我解决的是 AI 落地的「最后一公里」工程问题，而不是 demo 问题。',
    capabilities: [
      {
        icon: 'target',
        title: 'LLM 边界划分',
        tag: 'LLM 生成 · 规则引擎计算',
        desc: '明确「大模型负责生成、规则引擎负责计算」：把不适合交给大模型的高精度金额计算，交给 QLExpress4 可配置表达式，并用策略模式解耦「参数准备」与「规则执行」，支持按月份维度计算。',
        points: ['职责分工判断', 'QLExpress4 表达式算薪', '策略模式解耦参数与执行'],
      },
      {
        icon: 'workflow',
        title: 'Dify 编排与 AIGC 业务化',
        tag: 'Dify · Workflow · 流式响应',
        desc: '基于 dify-api-java-sdk 打通多个 Dify 应用（含 workflow），实现流式响应与全事件解析；调用 Dify 自动生成闲鱼岗位标题与描述，配套敏感词过滤、emoji 检测与报名用户名清洗，让 AI 生成内容可直接投放第三方渠道。',
        points: ['workflow 全事件解析', '流式响应与多轮会话', 'AIGC 内容可直接投放'],
      },
      {
        icon: 'shield',
        title: 'LLM 不确定性收敛',
        tag: '超时 · 熔断 · 幂等',
        desc: '定位并解决 Dify 超时导致企微重复推送的线上问题：回调超时收敛至 15 秒、增加 Dify 调用熔断开关防止服务过载，并基于 Redisson RBucket 设计幂等键（processedTxtMsg / conversationFeedbackPushed）实现消息去重与「单会话仅推送一次反馈」。',
        points: ['15s 超时收敛', '熔断开关防过载', 'Redisson 幂等键去重'],
      },
      {
        icon: 'bot',
        title: '会话桥接与反馈闭环',
        tag: 'conversationId · 企业微信',
        desc: '企微回调是无状态的、大模型要多轮会话 —— 设计 conversationId 生命周期管理（Redis 缓存 + TTL）把两者映射起来；落地 WXBizJsonMsgCrypt AES 加解密与卡片渲染，搭建用户评价收集机制，为模型效果建立线上反馈闭环。',
        points: ['会话状态桥接', '卡片交互与加解密', '回答质量反馈闭环'],
      },
    ],
    metrics: [
      { value: '15s', label: 'LLM 回调超时收敛 + 熔断开关' },
      { value: '4 类', label: 'workflow 事件全链路解析' },
      { value: '201', label: '个新增 Java 类（4 个月交付）' },
      { value: '58', label: '个需求工单 · 554 次提交' },
    ],
  },

  /** 核心优势 —— 由「三次 0→1 + 抽象主线 + 不确定性收敛 + 领域纵深」提炼 */
  advantages: [
    {
      icon: 'rocket',
      title: '平台级系统 0→1 建设能力',
      desc: '5 个项目中 2 个从工程初始化提交（add gitignore / add README）开始，1 个主导从零搭建期；OfferDatahub 主服务主干 123 个 Java 文件全部由本人首次引入 ——「从零」是可核查的事实，不是形容词。',
    },
    {
      icon: 'layers',
      title: '把变化点外置的抽象主线',
      desc: '同一个动作在 5 个项目里重复了 5 次：报表 SQL 拆成 7 个子句构建器 + 20+ 算子、变更记录翻译抽成元数据配置、考勤与算薪规则抽成表达式、导入校验抽成 Checker 链。结果：加算子 = 加一个类、接新表 = 只配数据、加校验 = 加一个 Checker、改规则 = 改配置。',
    },
    {
      icon: 'shield',
      title: '数据密集链路的不确定性收敛',
      desc: '反复处理同一类难题：上游给的是「至少一次、可能超时、可能重复」，业务要的是「不重不丢」。做法三层 —— 位点水位 / 幂等键在源头拦截、中间重试、唯一约束兜底；配合 @Async 拆解消费与计算线程、状态机约束并发写，LLM 的超时与重复推送同样用这套方法收敛。',
    },
    {
      icon: 'database',
      title: 'HR SaaS 全链路领域纵深',
      desc: '组织人事主数据 → 考勤 → 绩效 → 招聘 → 报表消费，五个环节都有实际建设经验，并清楚它们之间的接口：考勤月报口径如何喂给薪酬核算、绩效如何依赖组织主数据、招聘线索如何落到员工生命周期。领域知识不可速成。',
    },
  ],

  /** 技能栈 —— 分类呈现（以项目实际使用为准） */
  skills: [
    {
      category: '后端核心',
      icon: 'code',
      items: ['Java (8 / 21)', 'Spring Boot 2 & 3', 'Dubbo', 'MyBatis-Plus', 'Sa-Token', 'spring-retry', 'Hutool'],
    },
    {
      category: '架构与中间件',
      icon: 'layers',
      items: ['微服务 / ACL 防腐层', 'DDD 领域建模', '规则引擎（QLExpress4）', 'RabbitMQ', 'Redis / Redisson', 'XXL-Job', 'Flowable', 'Guava Cache'],
    },
    {
      category: '数据与存储',
      icon: 'database',
      items: ['PostgreSQL / JSONB', 'ClickHouse', 'Trino 联邦查询', 'MySQL', 'MongoDB', '阿里云 DTS 数据订阅'],
    },
    {
      category: 'AI 工程化',
      icon: 'sparkles',
      highlight: true,
      items: ['Dify / Workflow', 'Prompt 工程', 'LLM 超时 / 熔断 / 幂等', 'MCP', 'Spring AI', 'LangChain4j', 'RAG'],
    },
    {
      category: '工程实践与 DevOps',
      icon: 'git',
      items: ['JUnit 5 / Mockito / AssertJ', 'TDD', 'Swagger / Knife4j', 'CI/CD', 'Docker', 'Code Review', 'ELK', 'SonarQube'],
    },
  ],

  /** 工作经历 —— 时间线 */
  experience: [
    {
      company: '上海欧伏网络科技有限公司',
      role: '技术经理',
      period: '2022.11 – 2026.06',
      tags: ['HR SaaS 全链路', '平台 0→1', '配置驱动架构', 'LLM 工程化'],
      highlights: [
        '组织人事数据中心（2023.03–2024.06，主服务 0→1 独立负责）：基于阿里云 DTS 订阅业务库 binlog，把行变更翻译为业务可读的变更记录与按天快照；扩展 AbstractUserMetaStore 让消费位点按消费组落库，重启与多实例均可续传；主干 123 个 Java 文件全部由本人首次引入。',
        '考勤平台（2023.06–2024.05，0→1 主要建设者）：从工程初始化开始建设班次、班组、排班、加班、考勤报表与工作日历核心域；把报表从「周期末全量加载内存」改为「每日临时数据 + 周期末汇总」两级模型，避免 OOM 并支持指定人天增量重算；新增 656 个 Java 文件、48 个测试类。',
        '企业报表平台（2022.12–2025.02，核心开发 · 搭建期主导）：从零设计报表 SQL 构建引擎（7 个子句构建器 + 20+ 可插拔算子）与 Trino 四类数据源联邦查询底座，支撑 26 个月迭代，占主干提交量 96%。',
        'AI 招募平台（2025.09–2026.01，独立负责闲鱼渠道）：打通淘宝开放平台批量发布与线索回收；接入 Dify 大模型编排与企微机器人，用超时收敛、熔断与 Redisson 幂等键治理 LLM 不确定性，并以 QLExpress4 承担金额计算，形成「LLM 生成、规则引擎计算」的混合架构。',
        '绩效管理系统（2025.07–2026.04，核心开发 · 第 2 号贡献者）：以 PostgreSQL JSONB 承载频繁变动的考核模板，把校验下沉为领域对象 + Checker 链；打通「周期配置 → 任务生成 → 多评估人打分 → 导入调分 → 面谈确认」全链路，交付 25 个 REST 端点。',
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

  /** 精选项目 —— 按证据强度排序：Datahub → TimeManage → Report → MaltoseHr → Performance */
  projects: [
    {
      name: 'datahub · 组织人事数据中心',
      role: '核心开发 · 主服务 0→1 独立负责',
      period: '2023.03 – 2024.06',
      featured: true,
      summary:
        '面向 HR SaaS 的组织人事变更数据平台：基于阿里云 DTS 订阅业务库 binlog，结合库表元数据配置，把行变更自动翻译为业务可读的变更记录，按天沉淀员工全量快照，支撑历史回溯与「按条件组圈人」分析；历史查询负载通过 Dubbo 契约从业务库剥离到 ClickHouse。',
      highlights: [
        '从 0 搭建 binlog 订阅链路：扩展 AbstractUserMetaStore 把消费位点按消费组持久化到业务库，配合可配置的 maxConsumedRecordId 水位跳过已消费记录，使消费端在重启与多实例部署下都能正确续传。',
        '把「至少一次」投递收敛为业务上的不重不丢：位点水位前置过滤 + Dubbo 重试 + 唯一键兜底（DuplicateKeyException 视为已处理）三道防线，并增加空变更抑制，避免心跳类更新污染变更时间线。',
        '以同全限定名类遮蔽为 DTS SDK 补齐 JSONB 类型支持（零侵入、不挡升级路径）；变更记录构造完全由表级 / 字段级元数据配置驱动，接入一张新表只配数据、不改代码，翻译热路径建立 16 个细粒度缓存域。',
      ],
      metrics: [
        { value: '123', label: '主干 Java 文件 100% 本人首次引入' },
        { value: '0 行', label: '接入新表的变更记录改造代码' },
        { value: '556', label: '四仓提交（433 已落主干）' },
        { value: '19', label: '查询过滤算子（区间 / 前后缀 / IN）' },
      ],
      tags: ['阿里云 DTS', 'Spring Boot 2.1', 'PostgreSQL / JSONB', 'ClickHouse', 'Dubbo', 'XXL-Job', 'Redis'],
    },
    {
      name: 'timeManage · 考勤平台',
      role: '核心开发 · 0→1 主要建设者',
      period: '2023.06 – 2024.05',
      featured: true,
      summary:
        '面向企业人事 / HRO 场景的时间管理与考勤微服务：覆盖班次、班组、排班、打卡、加班、休假、假日与工作日历、考勤日报 / 月报 / 季报 / 年报、考勤周期；向薪酬核算输出考勤周期与月报数据，并支持集团端与客户端多项目隔离。',
      highlights: [
        '从工程初始化开始搭建服务骨架与核心域（班次、班组、排班、考勤规则、假日、加班、报表），以 ACL 层隔离人事、项目、审批流与数据服务等外部域；新增 656 个 Java 文件。',
        '重构考勤报表计算架构：把「周期末全量加载内存生成」改为「每日生成临时数据 + 周期末汇总」两级模型，支持指定人天增量重算；报表行动态列以 JSONB 存储，配合 @Async、分批保存与并行流避免 OOM 与长耗时。',
        '把考勤规则、加班规则与报表列公式外置为可配置表达式，扩展 13 个业务函数（司龄、加班时长、应计薪天数等）并提供在线校验 API；排班从「预生成落库」演进为「按工作日历按需计算」，大幅降低数据维护成本。',
      ],
      metrics: [
        { value: '656', label: '新增 Java 文件（含 63 测试文件）' },
        { value: '1,972', label: '次提交 · 主干占比 64%' },
        { value: '75', label: '需求工单 / 11 个月' },
        { value: '194', label: '单元测试用例（48 测试类）' },
      ],
      tags: ['Spring Boot 2.1', 'MyBatis-Plus', 'PostgreSQL / JSONB', 'RabbitMQ', 'Redis', 'XXL-Job', 'Dubbo', '规则引擎'],
    },
    {
      name: 'report · 企业报表平台',
      role: '核心开发 · 搭建期主导',
      period: '2022.12 – 2025.02',
      summary:
        '基于 Trino 的企业级报表查询服务：自研报表 SQL 构建引擎把前端视图配置翻译为可执行查询，支持 PostgreSQL / ClickHouse / MongoDB / MySQL 四类数据源联邦查询，提供数据集、图表、交叉表、导出、数据权限与 Dubbo RPC 能力。',
      highlights: [
        '从零设计报表 SQL 构建引擎：select / from / join / where / group / order / limit 七个子句构建器 + 查询编排层（引用字段自动拆子查询、消除未使用 left join、自动补齐 group by）；20+ 算子抽象成类，加一个算子只需新增一个实现类。',
        '以 Trino 430 为统一查询入口，通过 catalog 映射四类数据源，把方言差异收敛到数据源适配层；count 与 data 用 CompletableFuture 并行执行压缩分页耗时，不需要总数时跳过 count。',
        '26 个月 1,126 次主干提交（占比 96%）、+67k / −47k 行、首次引入 202 个业务 Java 文件与 82 个测试文件；其中从零搭建期（2022.12–2023.05）贡献 558 次提交、185 个 Java 文件与 58 个测试文件。',
      ],
      tags: ['Trino 430', 'Spring Boot 2.1', 'JDBC / Druid', '联邦查询', 'Dubbo', 'OAuth'],
    },
    {
      name: 'MaltoseHr · AI 招募平台',
      role: 'Java 后端 · 独立负责闲鱼渠道',
      period: '2025.09 – 2026.01',
      link: 'https://aizhaomu.offersaas.com/',
      ai: true,
      summary:
        '面向灵活用工场景的 AI 招聘平台：企业微信智能机器人 + Dify 大模型编排提供 C 端求职对话与 B 端招募能力；打通闲鱼（淘宝开放平台）招聘渠道实现岗位批量发布与报名线索回收，并建设薪酬方案与自动算薪能力（薪酬模块已完成开发、测试环境验证）。',
      highlights: [
        '独立负责闲鱼渠道后端 0→1：账号绑定 / 解绑、实名认证状态管理、岗位模板同步、批量发布（单岗位最高 200 帖）、定时刷新与自动下架全链路；沉淀 8 类开放平台专用异常体系，用 spring-retry @Retryable 退避重试隔离第三方抖动。',
        '接入 Dify 大模型编排：多应用（含 workflow）流式响应与全事件解析（node_started / node_finished / workflow_finished / message_end），设计 conversationId 生命周期管理（Redis + TTL）桥接企微无状态回调与多轮会话。',
        '划定 LLM 边界：高精度金额计算交给 QLExpress4 可配置表达式（策略模式解耦参数准备与规则执行），15s 超时收敛 + Dify 熔断开关 + Redisson RBucket 幂等键解决超时导致的企微重复推送，形成「LLM 生成、规则引擎计算」的混合架构。',
      ],
      tags: ['Spring Boot 3.2', 'Java 21', 'Dify', 'QLExpress4', 'Redisson', 'WebSocket', '淘宝开放平台', '企业微信'],
    },
    {
      name: 'performance · 绩效管理系统',
      role: '核心开发 · 第 2 号贡献者（4 人中）',
      period: '2025.07 – 2026.04',
      summary:
        '集团 HR SaaS 绩效子系统：覆盖「绩效周期配置 → 评估任务生成 → 多评估人打分 → 结果导入与调分 → 绩效面谈确认」完整考核链路；2025 年 8–9 月为从零搭建期（占本人提交量 95%）。',
      highlights: [
        '设计 PostgreSQL JSONB 半结构化存储承载随考核方案频繁变动的评估详情与指标配置，换取 schema 灵活性；代价是失去字段级约束，因此把校验下沉到领域对象与 Checker 链（EmpConfigChecker + 4 个独立校验器，报错定位到具体行列，周期 Service 削减约 250 行）。',
        '主导评估任务明细拆表（details 内嵌 JSON → 独立 pms_evaluation_task_detail），重建读写路径支撑多评估人并行打分；抽象 EvaluationAspects（考核方面）/ EvaluationIndicator / EvaluatorsTaskContext 领域模型，查询接口返回 Optional<T> 消除 NPE 分支。',
        '以 BigDecimal 承载指标得分、综合得分与默认 / 最终比例的多轮加权计算，自研高精度工具类固化舍入与比例换算并配套单测；对 7 个多表写方法显式声明 @Transactional(rollbackFor = Exception.class)，配合「非评估中不允许改分」状态机约束保证一致性。',
      ],
      tags: ['Spring Boot 2.1', 'PostgreSQL / JSONB', 'MyBatis-Plus', 'Dubbo', 'Redis', 'JUnit 5'],
    },
    {
      name: '复合用工平台',
      role: '技术经理',
      period: '2024.08 – 2025.08',
      link: 'https://lg.offersaas.com/',
      summary:
        '面向大中型企业的一站式人力资源全生命周期管理系统，支持正式工、派遣、灵工、项目制等多模式复合用工，解决合同签署、复杂审批流转与大规模员工数据的并发管理问题。',
      highlights: [
        '主导 OfferPersonnel 人事核心服务设计，以策略模式支撑多用工形态差异化规则，保障高频变更下花名册数据一致性。',
        '基于 Flowable 深度二次开发构建可配置审批中台，支撑入离职、合同盖章、OA 请假等业务场景，审批流与业务完全解耦。',
        '以适配器模式屏蔽 e签宝、上上签等签章服务商差异，异步队列 + 状态机解决长延迟签署状态同步；设计「预校验 - 分批处理 - 错误回滚」三段式导入流程，配合多级缓存优化核心接口响应。',
      ],
      tags: ['Spring Boot', 'Dubbo', 'Flowable', 'RabbitMQ', 'Redis', 'XXL-Job', 'PostgreSQL'],
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
    title: 'Senior Backend Engineer · Platform Architecture',
    tagline:
      'Backend engineer who builds platform systems from the ground up. I’ve done it three times — two from the first commit, one leading the initial build — and my default move is to take whatever changes most often out of the codebase and turn it into configuration or a pluggable component. On data-heavy systems that means absorbing upstream replays, duplicates and timeouts so the business only ever sees consistent results. My last five projects sit on one HR SaaS chain — HR data, attendance, performance, recruiting, reporting — and for the past year I’ve been wiring LLMs into it.',
    location: 'Shanghai',
    status: 'Available immediately',
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
      roles: ['Senior / Staff Backend Engineer', 'Backend Architect', 'Engineering Manager'],
    },
  },

  /** Hero stats — facts a recruiter can check against git */
  heroStats: [
    { value: '10', suffix: '\u00A0yrs+', label: 'Backend and platform engineering' },
    { value: '3', suffix: '\u00A0×', label: 'Platform builds — two from the very first commit' },
    { value: '123', suffix: '', label: 'Java files on the core service main branch — every one introduced by me' },
    { value: '5', suffix: '\u00A0stages', label: 'One HR SaaS chain: HR data, attendance, performance, recruiting, reporting' },
  ],

  /** AI literacy — judgement and guardrails, not API name-dropping */
  aiLiteracy: {
    lead: 'I don’t treat LLMs as magic. First I decide what the model should and shouldn’t own: it drafts, the rule engine calculates. Then every slow, unreliable call gets a timeout, a kill switch and idempotency keys before it touches a system that already has transactions and state. That unglamorous last mile is where AI projects ship or stall.',
    capabilities: [
      {
        icon: 'target',
        title: 'What the Model Owns',
        tag: 'Drafting, not arithmetic',
        desc: 'Payroll maths never goes to the model. The rules live in QLExpress4 expressions that can be changed without a deploy, and a strategy pattern keeps parameter gathering separate from rule execution, including month-by-month runs.',
        points: ['A clear split of duties', 'Payroll rules as configuration', 'Parameter prep decoupled from execution'],
      },
      {
        icon: 'workflow',
        title: 'Dify Integration & AI Copy',
        tag: 'Dify · workflows · streaming',
        desc: 'Connected several Dify apps, workflow ones included, through dify-api-java-sdk: streaming responses, every workflow event parsed. It drafts Xianyu job titles and descriptions, and the output passes sensitive-word filtering, emoji checks and applicant-name cleanup before it is posted to a third-party marketplace.',
        points: ['Every workflow event handled', 'Streaming, multi-turn chat', 'Copy that is safe to publish'],
      },
      {
        icon: 'shield',
        title: 'Stopping Slow Models From Breaking Things',
        tag: 'Timeouts · kill switch · idempotency',
        desc: 'A Dify timeout was making WeCom deliver the same reply twice. I capped the callback at 15 seconds, added a kill switch on the Dify call and used Redisson RBucket idempotency keys (processedTxtMsg, conversationFeedbackPushed) so each message is handled once and each conversation gets exactly one feedback prompt.',
        points: ['15-second callback cap', 'Kill switch on the model call', 'Idempotency at message level'],
      },
      {
        icon: 'bot',
        title: 'WeCom Sessions & Feedback',
        tag: 'conversationId · WeCom',
        desc: 'WeCom webhooks are stateless; conversations are not. A conversationId kept in Redis with a TTL bridges the two. I also handled the WXBizJsonMsgCrypt AES flow, card rendering and a rating prompt that fires once per conversation, which finally gave us real signal on answer quality.',
        points: ['Stateless callbacks, multi-turn chat', 'Cards and encryption', 'Answer-quality feedback'],
      },
    ],
    metrics: [
      { value: '15s', label: 'Callback cap, plus a kill switch' },
      { value: '4', label: 'Workflow event types handled end to end' },
      { value: '201', label: 'New Java classes in four months' },
      { value: '58', label: 'Tickets shipped; 554 commits' },
    ],
  },

  /** Core strengths — the four claims I can defend under questioning */
  advantages: [
    {
      icon: 'rocket',
      title: 'Platforms From Scratch',
      desc: 'Two of my five projects started at the very first commit — the one that added .gitignore. On a third I led the initial build. Every Java file on the core service main branch is one I introduced. “From scratch” here is a git fact, not a résumé adjective.',
    },
    {
      icon: 'layers',
      title: 'Move What Changes Out of Code',
      desc: 'I’ve done the same thing on five projects. Report SQL became seven clause builders and 20+ operators. Change-history translation became metadata. Attendance and payroll rules became expressions. Import validation became a chain of checkers. The payoff is always the same: a new operator is one class, a new table is configuration, a new rule is one checker, a changed rule is a config edit.',
    },
    {
      icon: 'shield',
      title: 'Make Unreliable Inputs Behave',
      desc: 'Upstream systems replay messages, time out and send duplicates; the business needs every event counted once. My usual three layers: filter at the source with an offset watermark or an idempotency key, retry in the middle, and let a unique constraint catch the rest. The same pattern later applied to a model that answers slowly and a chat platform that re-delivers.',
    },
    {
      icon: 'database',
      title: 'HR SaaS, End to End',
      desc: 'HR data, attendance, performance, recruiting, reporting: I’ve built in all five, so I know where they meet. How attendance close feeds payroll. What performance owes org data. How a recruiting lead becomes an employee record. No course teaches that.',
    },
  ],

  /** Tech stack — grouped, based on what the projects actually used */
  skills: [
    {
      category: 'Backend Core',
      icon: 'code',
      items: ['Java (8 / 21)', 'Spring Boot 2 & 3', 'Dubbo', 'MyBatis-Plus', 'Sa-Token', 'spring-retry', 'Hutool'],
    },
    {
      category: 'Architecture & Middleware',
      icon: 'layers',
      items: ['Microservices / anti-corruption layers', 'DDD domain modeling', 'Rule engines (QLExpress4)', 'RabbitMQ', 'Redis / Redisson', 'XXL-Job', 'Flowable', 'Guava Cache'],
    },
    {
      category: 'Data & Storage',
      icon: 'database',
      items: ['PostgreSQL / JSONB', 'ClickHouse', 'Trino federated queries', 'MySQL', 'MongoDB', 'Alibaba Cloud DTS'],
    },
    {
      category: 'AI Engineering',
      icon: 'sparkles',
      highlight: true,
      items: ['Dify / workflows', 'Prompt engineering', 'LLM timeouts, kill switches, idempotency', 'MCP', 'Spring AI', 'LangChain4j', 'RAG'],
    },
    {
      category: 'Engineering Practices & DevOps',
      icon: 'git',
      items: ['JUnit 5 / Mockito / AssertJ', 'TDD', 'Swagger / Knife4j', 'CI/CD', 'Docker', 'Code review', 'ELK', 'SonarQube'],
    },
  ],

  /** Work experience */
  experience: [
    {
      company: 'Shanghai Oufu Network Technology Co., Ltd.',
      role: 'Engineering Manager',
      period: '2022.11 – 2026.06',
      tags: ['HR SaaS, end to end', 'Platform builds', 'Configuration-driven architecture', 'LLM engineering'],
      highlights: [
        'HR Data Hub (2023.03–2024.06; sole owner of the core service, built from scratch): real-time change data capture through Alibaba Cloud DTS, turned into readable change history plus daily employee snapshots. I extended AbstractUserMetaStore to persist consumer offsets per group in the business database, with a watermark for skipping records already consumed, so restarts and multiple instances resume cleanly. All 123 Java files on main are mine.',
        'Attendance Platform (2023.06–2024.05; primary builder, built from scratch): built the shift, team, rostering, overtime, reporting and work-calendar domains from the first commit. Replaced period-end full-table loads with a two-stage model — daily staging plus a period-end roll-up — which removed the OOM risk and made person-day recalculation possible. 656 new Java files, 48 test classes.',
        'Enterprise Reporting Platform (2022.12–2025.02; core developer, led the initial build): designed the SQL builder from scratch — seven clause builders and 20+ pluggable operators — plus a Trino layer over four data sources. 26 months of iteration and 96% of all commits on main.',
        'AI Recruiting Platform (2025.09–2026.01; sole owner of the Xianyu channel): connected the Taobao Open Platform for bulk job posting and lead capture. Brought in Dify orchestration and the WeCom bot, kept the model on a short leash with a timeout, a kill switch and idempotency keys, and left money maths to QLExpress4 — the model writes, the rule engine calculates.',
        'Performance Management System (2025.07–2026.04; core developer, second of four contributors): modeled frequently changing review templates on PostgreSQL JSONB and pushed validation into domain objects and a chain of checkers. Shipped the full cycle — configuration, task generation, multi-rater scoring, import and adjustment, interview confirmation — with 25 REST endpoints.',
      ],
    },
    {
      company: 'Shanghai Hancheng Software Technology Co., Ltd.',
      role: 'Senior Java Developer',
      period: '2021.03 – 2022.07',
      tags: ['Spring Cloud', 'PostgreSQL', 'Docker', 'TDD', 'CI/CD'],
      highlights: [
        'Designed and tuned the Fiola financial platform architecture, set up CI/CD and owned the config-server and chrome-headless services.',
        'Owned core development of the Fiola user and ETL modules, meeting high-concurrency requirements and shipping on schedule.',
        'Led the Workio HR time-management module — scheduling, overtime, clock-in, leave, attendance — improving both HR throughput and data accuracy.',
        'Ran TDD and pair programming for over a year; led the Fiola Phase 1 delivery that secured the Phase 2 contract and a new engagement with Changan Auto.',
      ],
    },
    {
      company: 'Mingting (Shanghai) Information Technology Co., Ltd.',
      role: 'Senior Java Developer',
      period: '2019.07 – 2020.11',
      tags: ['Spring Boot', 'SaaS', 'Refactoring', 'Swagger'],
      highlights: [
        'Led a ground-up rebuild of the Loan Supermarket platform: architecture plus modules for merchants, channels, products, loans, permissions and reporting.',
        'Brought in Swagger and streamlined automated releases, cutting development-to-deploy turnaround by around 30%.',
        'Moved the product onto a SaaS footing and re-architected it, trimming server costs by roughly 25% and the day-to-day maintenance load with them.',
        'Contributed to the SMS platform rebuild, laying down the base framework and the core sending module for stable high-concurrency operation.',
      ],
    },
    {
      company: 'Shanghai Donglin Education Technology Co., Ltd.',
      role: 'Java Developer → Backend Lead',
      period: '2016.07 – 2019.06',
      tags: ['Spring Boot', 'JPA', 'Performance Tuning', 'ELK'],
      highlights: [
        'Delivered the answer-sheet automation module single-handedly, with caching and profiling; v1.0 landed two months early, which earned an early conversion to permanent staff and a promotion to backend lead.',
        'Worked across the question bank, permissions and quiz modules, improving response times and the overall experience.',
        'Ran code review on the modules that mattered and pushed the team onto IntelliJ IDEA and Java 8 streams and lambdas.',
      ],
    },
  ],

  /** Selected projects — ordered by strength of evidence, not chronology */
  projects: [
    {
      name: 'datahub · HR Data Hub',
      role: 'Core developer · Sole owner of the core service, built from scratch',
      period: '2023.03 – 2024.06',
      featured: true,
      summary:
        'Change-data platform for HR. Alibaba Cloud DTS captures binlog in real time; table and field metadata turn raw row changes into readable history, while daily snapshots answer questions about what the organization looked like on any given date or which people match a set of conditions. Historical queries run on ClickHouse instead of the business database.',
      highlights: [
        'Built the CDC pipeline from nothing, starting with the offset problem: the SDK writes its checkpoint to a local file that a container loses on restart, so I extended AbstractUserMetaStore to persist per-consumer-group offsets in the business database and added a maxConsumedRecordId watermark to skip what had already been consumed.',
        'Turned at-least-once delivery into no-loss, no-duplicate: a watermark pre-filter, Dubbo retries and a unique constraint that treats DuplicateKeyException as “already done”, plus suppression of empty changes so heartbeat updates never pollute the timeline.',
        'The DTS SDK had no JSONB type, leaving jsonb columns undecodable. Rather than fork it, I shadowed the enum under the same fully-qualified name — zero intrusion, upgrades still work. Changelog assembly is metadata-driven, so adding a table is data entry rather than code, and 16 small caches keep the translation path fast.',
      ],
      metrics: [
        { value: '123', label: 'Java files on main, every one introduced by me' },
        { value: '0', label: 'Lines of code needed to add a new table' },
        { value: '556', label: 'Commits across four repos (433 on main)' },
        { value: '19', label: 'Filter operators (ranges, IN, null checks…)' },
      ],
      tags: ['Alibaba Cloud DTS', 'Spring Boot 2.1', 'PostgreSQL / JSONB', 'ClickHouse', 'Dubbo', 'XXL-Job', 'Redis'],
    },
    {
      name: 'timeManage · Attendance Platform',
      role: 'Core developer · Primary builder, built from scratch',
      period: '2023.06 – 2024.05',
      featured: true,
      summary:
        'Attendance and time-management service for HR and HRO customers: shifts, teams, rosters, clock-ins, overtime, leave, work calendars, attendance cycles and daily, monthly, quarterly and yearly reports. It feeds attendance cycles and monthly reports into payroll, and keeps group and client projects separate.',
      highlights: [
        'Stood up the service and its core domains from the first commit — shifts, teams, rostering, rules, holidays, overtime, reporting — behind an anti-corruption layer that shields HR, project, approval and data services. 656 new Java files.',
        'Reworked report generation from “load everything at period end” to daily staging plus a period-end roll-up. That removed the OOM risk and made person-day recalculation possible; report rows keep their dynamic columns in JSONB, and @Async, batched saves and parallel streams keep run time in check.',
        'Moved attendance, overtime and report-column formulas out of code and into configurable expressions, backed by 13 business functions (tenure, overtime hours, payable days…) and an online validation API. Rostering went from pre-generated rows to on-demand calculation against the work calendar.',
      ],
      metrics: [
        { value: '656', label: 'New Java files (63 of them tests)' },
        { value: '1,972', label: 'Commits, 64% of the main branch' },
        { value: '75', label: 'Tickets in 11 months' },
        { value: '194', label: 'Unit tests across 48 classes' },
      ],
      tags: ['Spring Boot 2.1', 'MyBatis-Plus', 'PostgreSQL / JSONB', 'RabbitMQ', 'Redis', 'XXL-Job', 'Dubbo', 'Rule Engine'],
    },
    {
      name: 'report · Enterprise Reporting Platform',
      role: 'Core developer · Led the initial build',
      period: '2022.12 – 2025.02',
      summary:
        'Enterprise reporting on Trino: a hand-built SQL builder turns front-end view settings into executable SQL, and the query layer federates PostgreSQL, ClickHouse, MongoDB and MySQL. Datasets, charts, pivot tables, exports, data permissions and Dubbo RPC sit on top.',
      highlights: [
        'The SQL builder was the whole point. Seven clause builders — select, from, join, where, group, order, limit — plus an orchestration layer that turns referenced fields into subqueries, drops unused left joins and fills in missing group-by columns. Operators are classes, 20+ of them, so a new one is a new class.',
        'Trino 430 is the single entry point; catalog mappings hide four different dialects behind one adaptation layer. Count and data queries run in parallel through CompletableFuture to keep paging fast, and when nobody needs the total, the count is skipped.',
        '26 months, 1,126 commits on main (96% of the branch), +67k/−47k lines, 202 business Java files and 82 test files. The initial build alone — 2022.12 to 2023.05 — accounted for 558 commits, 185 Java files and 58 test files.',
      ],
      tags: ['Trino 430', 'Spring Boot 2.1', 'JDBC / Druid', 'Federated query', 'Dubbo', 'OAuth'],
    },
    {
      name: 'MaltoseHr · AI Recruiting Platform',
      role: 'Java backend · Sole owner of the Xianyu channel',
      period: '2025.09 – 2026.01',
      link: 'https://aizhaomu.offersaas.com/',
      ai: true,
      summary:
        'AI recruiting platform for flexible staffing. A WeCom (WeChat Work) bot and Dify orchestration handle candidate chat on one side and recruiter workflows on the other; the Xianyu channel (Alibaba’s second-hand marketplace) posts jobs in bulk and captures applicants. Compensation plans and automated payroll were built as well and verified in staging.',
      highlights: [
        'Took the Xianyu channel from zero: account binding, real-name status, template sync, bulk posting (up to 200 posts per job), scheduled refresh and auto-takedown. Eight dedicated exception types plus spring-retry backoff keep Taobao’s flakiness at the edge of the service.',
        'Wired Dify into the product — several apps, workflow ones included — with streaming responses and every workflow event handled (node_started, node_finished, workflow_finished, message_end). Managing conversationId in Redis with a TTL is what lets a stateless WeCom webhook hold a multi-turn conversation.',
        'Set the model’s limits: money maths stays in QLExpress4 expressions, while a 15-second timeout, a kill switch and Redisson idempotency keys stop a slow model from double-posting to WeCom. The model writes; the rule engine calculates.',
      ],
      tags: ['Spring Boot 3.2', 'Java 21', 'Dify', 'QLExpress4', 'Redisson', 'WebSocket', 'Taobao Open Platform', 'WeCom'],
    },
    {
      name: 'performance · Performance Management System',
      role: 'Core developer · Second of four contributors',
      period: '2025.07 – 2026.04',
      summary:
        'The group’s performance-review subsystem: cycle setup, evaluation task generation, multi-rater scoring, result import and adjustment, and interview confirmation. The initial build accounted for 95% of my commits.',
      highlights: [
        'Review templates change with every cycle and a relational schema would mean constant DDL, so the whole structure lives in PostgreSQL JSONB through JsonbTypeHandler and PgObjectUtils. The trade-off is no column-level constraints, so validation moved into domain objects and a chain of checkers — four of them, reporting errors down to the row and column and cutting roughly 250 lines out of the cycle service.',
        'Split evaluation details out of an embedded JSON blob into a pms_evaluation_task_detail table and rebuilt the read and write paths, which is what made parallel scoring by multiple raters workable. Conditions moved into domain objects — EvaluationAspects (the appraisal dimensions), EvaluationIndicator, EvaluatorsTaskContext — and lookups now return Optional<T> instead of null.',
        'Scores and ratios run through BigDecimal end to end, with a small high-precision helper and unit tests. A state check blocks score changes outside “in evaluation”, and the seven multi-table writes carry explicit @Transactional(rollbackFor = Exception.class).',
      ],
      tags: ['Spring Boot 2.1', 'PostgreSQL / JSONB', 'MyBatis-Plus', 'Dubbo', 'Redis', 'JUnit 5'],
    },
    {
      name: 'Flexible Workforce Platform',
      role: 'Engineering Manager',
      period: '2024.08 – 2025.08',
      link: 'https://lg.offersaas.com/',
      summary:
        'Full-lifecycle HR platform for mid-size and large employers, covering direct hire, dispatch, gig and project-based work — contract signing, multi-step approvals and large employee datasets under load.',
      highlights: [
        'Led the OfferPersonnel core service, using the strategy pattern so each employment type carries its own rules without forking the roster logic.',
        'Built a configurable approval hub on a heavily customized Flowable, covering onboarding, offboarding, contract stamping and leave, with the flows decoupled from business code.',
        'Hid e-signature vendor differences (eSign, Shangshangqian) behind an adapter, with async queues and a state machine to track slow signings; the import path is pre-check, batch, roll back on error, with caching in front of the hot queries.',
      ],
      tags: ['Spring Boot', 'Dubbo', 'Flowable', 'RabbitMQ', 'Redis', 'XXL-Job', 'PostgreSQL'],
    },
    {
      name: 'FIOLA · Open Banking Platform',
      role: 'Backend Developer',
      period: '2021.03 – 2021.06',
      link: 'https://fiola.sit.finexos.co.uk/',
      summary:
        'Open-banking platform that pulls bank data with customer consent, analyzes spending and financial behavior, and produces a monthly financial-health score with early warnings for risk.',
      highlights: [
        'Built and tuned the scoring logic that flags high-leverage and default-risk customers early enough for the operations team to act.',
        'Set up the project skeleton and the IAM module, and designed the credit-report module end to end.',
        'TDD throughout, with 100% test coverage, which is a large part of why the client trusted us.',
      ],
      tags: ['Spring Cloud', 'PostgreSQL', 'Docker', 'TDD', 'ETL', 'Open Banking'],
    },
    {
      name: 'Workio · HR Management System',
      role: 'Senior Java Developer',
      period: '2021.06 – 2022.07',
      summary:
        'HR system built around people, time and money: organisation, attendance, payroll, incentives, expenses and temporary workforce, in six modules.',
      highlights: [
        'Led the attendance module — scheduling, clock-in, leave — with automated processing and accurate reporting.',
        'Coordinated with three squads to keep the modules integrating cleanly.',
        'Made the system easier to use and its data more reliable, which gave managers something they could actually decide on.',
      ],
      tags: ['Spring Boot', 'Attendance Engine', 'HR Management', 'Agile'],
    },
    {
      name: 'Loan Supermarket · SaaS Platform',
      role: 'Senior Java Developer',
      period: '2019.07 – 2020.11',
      summary:
        'The rebuilt Loan Supermarket SaaS: product lines, marketing rules, whitelists and reporting for merchants, aimed at channel efficiency and conversion.',
      highlights: [
        'Rewrote 95% of the codebase on Spring Boot, JPA and MyBatis to handle the reporting load.',
        'Added Swagger for API management and fine-grained permissions around sensitive resources.',
        'Standardised exception handling and response envelopes, which made the whole codebase easier to reason about.',
      ],
      tags: ['Spring Boot', 'JPA', 'MyBatis', 'Swagger', 'SaaS', 'Access Control'],
    },
    {
      name: 'JiaoYiYou · Intelligent Learning Diagnostics',
      role: 'Backend Lead (Java)',
      period: '2016.07 – 2019.06',
      summary:
        'Learning diagnostics that turn quiz data into personalized study reports and practice sets, including scanned answer-sheet grading and multi-dimensional analysis.',
      highlights: [
        'Built the answer-sheet module from scratch and integrated the scanner software, so response data arrived reliably enough to drive reports.',
        'Rolled out to 10+ middle schools in Shanghai, Qibao included, with good feedback from parents and teachers.',
        'Mentored junior developers and handled most of the cross-team communication as backend lead.',
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
      '2012–2014: lab assistant in the computer science department and deputy head of the student union IT service team.',
      '2014: first enterprise project — the IMS system.',
      '2015: heating-supply system — framework, permissions and HighCharts dashboards.',
    ],
  },

  /** Certifications */
  certifications: [{ name: 'CET-6 (College English Test, Band 6)', icon: 'award' }],

  /** Navigation items */
  navItems: [
    { id: 'ai', label: 'AI Literacy' },
    { id: 'advantages', label: 'Strengths' },
    { id: 'skills', label: 'Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
}

export const resume = { zh, en }
