# syntax=docker/dockerfile:1

# ============================================================
# Stage 1 · 构建：用 Node 编译 Vite 生产产物
# ============================================================
FROM node:20-alpine AS builder

WORKDIR /app

# 先装依赖，充分利用 Docker 层缓存（package*.json 不变则跳过 npm ci）
COPY package.json package-lock.json ./
RUN npm ci

# 拷贝源码并构建（dist/ 为纯静态产物）
COPY . .
RUN npm run build

# ============================================================
# Stage 2 · 运行：用 Nginx 提供静态资源（体积小、性能高）
# ============================================================
FROM nginx:1.27-alpine AS runner

# SPA 友好的 Nginx 配置（前端路由回退 + gzip + 静态资源缓存）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 拷贝构建产物到 Nginx 站点根目录
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# 容器健康检查（部署后可自动感知异常）
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
