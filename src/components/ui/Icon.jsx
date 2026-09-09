import {
  Cpu,
  Sparkles,
  Shield,
  Users,
  Code2,
  Layers,
  Database,
  GitBranch,
  Plug,
  Brain,
  Bot,
  Award,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Rocket,
  Zap,
  TrendingUp,
  Target,
  Server,
  Workflow,
  Send,
} from 'lucide-react'

/** 字符串名 → lucide 图标 的统一映射，便于数据驱动渲染 */
const registry = {
  cpu: Cpu,
  sparkles: Sparkles,
  shield: Shield,
  users: Users,
  code: Code2,
  layers: Layers,
  database: Database,
  git: GitBranch,
  plug: Plug,
  brain: Brain,
  bot: Bot,
  award: Award,
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
  message: MessageCircle,
  external: ExternalLink,
  briefcase: Briefcase,
  graduation: GraduationCap,
  rocket: Rocket,
  zap: Zap,
  trending: TrendingUp,
  target: Target,
  server: Server,
  workflow: Workflow,
  send: Send,
}

export default function Icon({ name, className = 'h-5 w-5', ...rest }) {
  const Cmp = registry[name] ?? Sparkles
  return <Cmp className={className} {...rest} />
}

export { registry }
