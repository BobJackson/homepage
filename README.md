<div align="center">

# 王幼松 · 个人主页

**Java 架构师 / 技术经理 · AI 工程化落地**

一个面向求职的个人主页，用于展示技术能力、工作履历与 AI 素养。
暗色科技感设计，量化成果前置，支持浅色 / 暗色主题切换。

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## ✨ 特性亮点

- **🎯 求职导向**：核心数据（10 年经验 / 1300 万+ 数据迁移 / 99.95% 可用性 / 60%+ 成本节省）在首屏一眼可见。
- **🤖 AI 素养专区**：独立版块展示 MCP、Spring AI、LangChain4j、Dify、RAG 等大模型工程化落地能力，突出 AI 时代的核心竞争力。
- **💻 Java 终端卡片**：首屏以语法高亮的 Java 代码形式呈现候选人「能力画像」，强化工程师身份认同。
- **🌓 双主题**：暗色科技感为默认，一键切换浅色模式，偏好持久化到 `localStorage`。
- **📊 项目指标看板**：精选项目以数据卡呈现可量化成果（P99 < 500ms、8s→1.2s、限流错误率 ↓90% 等）。
- **📱 响应式 + 动效**：适配移动端到桌面端，Framer Motion 滚动揭示动画流畅自然。
- **♿ 可访问性**：浅色模式文字对比度符合 WCAG AA；尊重 `prefers-reduced-motion`。
- **🚢 容器化 + CI/CD**：多阶段 Docker 构建（Node 构建 → Nginx 服务），GitHub Actions 推送即自动构建镜像、推送 Docker Hub 并部署到阿里云。

## 🛠 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | React 18 + Vite 5 |
| 样式 | Tailwind CSS 3（CSS 变量驱动的主题令牌） |
| 动效 | Framer Motion 11 |
| 图标 | Lucide React |
| 语言 | JavaScript (JSX) |

## 📁 项目结构

```
homepage/
├── index.html                 # HTML 入口（含 SEO / Open Graph meta）
├── vite.config.js             # Vite 配置
├── tailwind.config.js         # Tailwind 主题扩展（颜色/动画/阴影）
├── postcss.config.js          # PostCSS 配置
├── Dockerfile                 # 多阶段构建（Node 构建 → Nginx 服务）
├── nginx.conf                 # Nginx 配置（SPA 回退 + gzip + 缓存 + 健康检查）
├── docker-compose.yml         # 容器编排（本地构建 / 服务器部署）
├── .dockerignore              # Docker 构建上下文忽略清单
├── .github/
│   └── workflows/
│       └── deploy.yml         # ⭐ CI/CD：构建推送镜像 + SSH 部署阿里云
├── public/
│   └── favicon.svg            # 站点图标
└── src/
    ├── main.jsx               # 应用入口
    ├── App.jsx                # 根组件（组装各版块 + 主题）
    ├── index.css              # 全局样式 / 主题令牌 / 工具类
    ├── data/
    │   └── resume.js          # ⭐ 所有简历内容（数据驱动，改这里即可）
    ├── hooks/
    │   ├── useTheme.js        # 主题切换（dark/light + 持久化）
    │   └── useScrollSpy.js    # 滚动监听，导航高亮当前区块
    └── components/
        ├── Background.jsx     # 背景层（网格 + 浮动光晕球）
        ├── Navbar.jsx         # 导航栏（毛玻璃吸顶 + 主题切换 + 移动菜单）
        ├── Hero.jsx           # 首屏（价值主张 + Java 终端卡片 + 核心数据）
        ├── AILiteracy.jsx     # AI 素养专区 ⭐
        ├── Advantages.jsx     # 核心优势
        ├── Skills.jsx         # 技能栈（AI 工程化高亮）
        ├── Experience.jsx     # 工作经历时间线
        ├── Projects.jsx       # 精选项目（大卡指标 + 小卡）
        ├── EducationCert.jsx  # 教育背景与资格证书
        ├── Contact.jsx        # 联系方式（一键复制）+ 期望职位
        ├── Footer.jsx         # 页脚
        └── ui/
            ├── Icon.jsx       # 图标名 → Lucide 组件的统一映射
            ├── Reveal.jsx     # 滚动揭示动画包装器
            └── SectionHeading.jsx  # 统一区块标题
```

## 🚀 快速开始

**环境要求**：Node.js ≥ 18（推荐 20+）、npm ≥ 9。

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 3. 生产构建（产物输出到 dist/）
npm run build

# 4. 本地预览生产构建
npm run preview
```

## ✏️ 内容定制

所有个人信息与文案都集中在 **[`src/data/resume.js`](src/data/resume.js)**，采用数据驱动设计——**无需改动组件代码**即可更新内容：

| 导出字段 | 对应版块 |
|----------|----------|
| `profile` | 姓名、职位、一句话主张、联系方式、期望职位 |
| `heroStats` | 首屏核心数据卡 |
| `aiLiteracy` | AI 素养专区（能力卡 + 成果数据） |
| `advantages` | 核心优势 |
| `skills` | 技能栈分组 |
| `experience` | 工作经历时间线 |
| `projects` | 精选项目（`featured: true` 为大卡） |
| `education` / `certifications` | 教育背景与证书 |
| `navItems` | 导航栏菜单项 |

> 主题色可在 `src/index.css` 的 `:root` / `.light` 中调整 CSS 变量（`--c-accent`、`--c-accent-2` 等）。

## 🐳 Docker 与自动化部署（CI/CD）

项目已容器化，并配置 **GitHub Actions 全自动流水线**：推送到 `main` 分支后，自动
**构建 Docker 镜像 → 推送 Docker Hub → SSH 登录阿里云服务器重新部署**。

### 流水线概览

```
  git push (main)
        │
        ▼
  ┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
  │ Job1 构建 & 推送   │ ──▶ │ Job2 SSH 部署      │ ──▶ │ 容器重新运行       │
  │ Docker Buildx     │     │ pull + docker run │     │ http://host:port │
  │ → Docker Hub      │     │ (appleboy/ssh)    │     │ --restart always │
  └──────────────────┘     └──────────────────┘     └──────────────────┘
```

工作流文件：[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

### 本地 Docker 构建与运行

```bash
# 方式一：原生 docker
docker build -t homepage:latest .
docker run -d --name homepage -p 8080:80 --restart unless-stopped homepage:latest

# 方式二：compose（本地构建并运行）
docker compose up -d --build

# 访问 http://localhost:8080 ；健康检查 http://localhost:8080/healthz
```

### 🔑 需配置的 GitHub Secrets

在仓库 **Settings → Secrets and variables → Actions → Secrets** 中添加：

| Secret | 说明 | 示例 |
|--------|------|------|
| `DOCKERHUB_USERNAME` | Docker Hub 用户名 | `bobjackson` |
| `DOCKERHUB_TOKEN` | Docker Hub **Access Token**（非登录密码） | `dckr_pat_xxx` |
| `ALIYUN_HOST` | 阿里云服务器公网 IP / 域名 | `47.xx.xx.xx` |
| `ALIYUN_USER` | SSH 登录用户名 | `root` |
| `ALIYUN_SSH_KEY` | SSH **私钥**全文（公钥需在服务器 `~/.ssh/authorized_keys`） | `-----BEGIN OPENSSH PRIVATE KEY-----` |
| `ALIYUN_PORT` | SSH 端口（可选，默认 22） | `22` |

可选仓库变量（同页 **Variables** 标签）：

| Variable | 说明 | 默认 |
|----------|------|------|
| `APP_PORT` | 容器映射到宿主机的端口 | `10087` |

### 🖥 阿里云服务器前置准备

1. **安装 Docker**（若未安装）：
   ```bash
   curl -fsSL https://get.docker.com | sh
   sudo systemctl enable --now docker
   ```
2. **配置 SSH 免密**：生成一对专用密钥，公钥追加到服务器 `~/.ssh/authorized_keys`，私钥存入 `ALIYUN_SSH_KEY`。
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-deploy"   # 本地生成
   # 将 id_ed25519.pub 内容追加到服务器的 ~/.ssh/authorized_keys
   # 将 id_ed25519（私钥）内容粘贴到 GitHub Secret: ALIYUN_SSH_KEY
   ```
3. **开放安全组端口**：在阿里云控制台安全组放行 `APP_PORT`（默认 8080）的 TCP 入方向。
4. （可选）绑定域名 + Nginx/Caddy 反向代理到容器端口，并申请 HTTPS 证书。

> ⚠️ **安全提示**：`DOCKERHUB_TOKEN` 使用最小权限 Access Token（公开仓库仅需 Read/Write）；`ALIYUN_SSH_KEY` 建议使用**专用部署密钥**而非个人主密钥。

## 📦 其他托管方式（纯静态）

构建产物为纯静态文件（`dist/`），也可部署到任意静态托管平台：

<details>
<summary><b>Vercel（推荐，零配置）</b></summary>

```bash
npm i -g vercel
vercel          # 按提示操作，Framework 自动识别为 Vite
```
或在 Vercel 控制台导入 Git 仓库，Build Command 用 `npm run build`，Output Directory 用 `dist`。
</details>

<details>
<summary><b>GitHub Pages</b></summary>

在 `vite.config.js` 中设置 `base: '/<仓库名>/'`，构建后将 `dist/` 发布到 `gh-pages` 分支即可。
</details>

<details>
<summary><b>Netlify / 阿里云 OSS / Nginx</b></summary>

执行 `npm run build`，将 `dist/` 目录整体上传 / 指向站点根目录即可。
</details>

## 🎨 设计说明

- **主题令牌系统**：颜色以 RGB 分量存入 CSS 变量（如 `--c-accent: 34 211 238`），Tailwind 通过 `rgb(var(--c-accent) / <alpha-value>)` 引用，实现暗 / 浅色无缝切换与透明度控制。
- **暗色科技感**：深空蓝黑底 + 青紫渐变辉光 + 网格背景 + 浮动光晕球 + 毛玻璃卡片。
- **动效**：Framer Motion 负责入场与滚动揭示，导航高亮使用 `layoutId` 共享布局动画。

## 📄 License

[MIT](LICENSE) © 王幼松

---

<div align="center">

**联系方式**：📱 17602196213 ｜ 📧 1187688895@qq.com ｜ 💬 微信 Bob_Jackson

以 React + Vite 构建 · 用心打磨每一个细节

</div>
