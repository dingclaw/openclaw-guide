import { Link, useParams } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

const articles = {
  'self-improvement': {
    title: '如何安装和配置 Self-Improving Agent 技能',
    subtitle: '让你的 OpenClaw 持续进化'
  }
}

const files = [
  { name: 'LEARNINGS.md', desc: '记录纠正、知识缺口、最佳实践' },
  { name: 'ERRORS.md', desc: '记录命令失败、异常错误' },
  { name: 'FEATURE_REQUESTS.md', desc: '记录用户请求的新功能' }
]

const scenarios = [
  { trigger: '命令/操作失败', action: '→ 记录到 ERRORS.md' },
  { trigger: '用户纠正 AI', action: '→ 记录到 LEARNINGS.md' },
  { trigger: '发现更好方法', action: '→ 记录到 LEARNINGS.md' },
  { trigger: '用户想要新功能', action: '→ 记录到 FEATURE_REQUESTS.md' }
]

const promotionTargets = [
  { type: '行为模式', target: 'SOUL.md', example: '简洁回复，避免免责声明' },
  { type: '工作流改进', target: 'AGENTS.md', example: '长任务启动子智能体' },
  { type: '工具陷阱', target: 'TOOLS.md', example: 'git push 需要先配置认证' }
]

const sessionTools = [
  { tool: 'sessions_list', desc: '查看活跃会话' },
  { tool: 'sessions_history', desc: '读取其他会话记录' },
  { tool: 'sessions_send', desc: '发送学习内容' }
]

function SkillArticle() {
  const { id } = useParams()
  const article = articles[id] || { title: '文章不存在', subtitle: '' }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
        <Link to="/articles" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 text-sm">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回文章列表
        </Link>
        
        <article>
          {/* 标题区 */}
          <header className="mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
              {article.title}
            </h1>
            <p className="text-gray-500 text-sm">{article.subtitle}</p>
          </header>
          
          {/* 一、引言 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              一、引言
            </h2>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">1.1 问题背景</h3>
            <p className="text-gray-600 mb-3 text-sm sm:text-base leading-relaxed">你是否遇到过这样的情况：</p>
            <ul className="text-gray-600 mb-4 space-y-2 text-sm sm:text-base pl-4">
              <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-emerald-500">AI 助手在某个问题上犯了错，下次对话又犯同样的错误</li>
              <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-emerald-500">你纠正了 AI，但它「转头就忘」</li>
              <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-emerald-500">项目中的最佳实践、坑点经验无法沉淀</li>
            </ul>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">1.2 解决方案</h3>
            <p className="text-gray-600 mb-3 text-sm sm:text-base leading-relaxed">
              <strong>Self-Improving Agent Skill</strong> 让 AI 拥有「记忆」和「学习能力」：
            </p>
            <ul className="text-gray-600 mb-4 space-y-2 text-sm sm:text-base pl-4">
              <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-emerald-500">📝 <strong>日志记录</strong>：记录错误、学习、功能请求</li>
              <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-emerald-500">🔄 <strong>知识推广</strong>：推广到项目记忆文件</li>
              <li className="relative before:content-['•'] before:absolute before:-left-3 before:text-emerald-500">🔗 <strong>跨会话通信</strong>：实现学习共享</li>
            </ul>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">1.3 核心价值</h3>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
              <div className="divide-y divide-gray-100">
                <div className="flex text-sm">
                  <div className="w-24 sm:w-28 bg-gray-50 px-3 py-2.5 text-gray-600 flex-shrink-0">减少犯错</div>
                  <div className="px-3 py-2.5 text-gray-600">AI 记住错误，不再重蹈覆辙</div>
                </div>
                <div className="flex text-sm">
                  <div className="w-24 sm:w-28 bg-gray-50 px-3 py-2.5 text-gray-600 flex-shrink-0">沉淀知识</div>
                  <div className="px-3 py-2.5 text-gray-600">隐性知识 → 显性文档</div>
                </div>
                <div className="flex text-sm">
                  <div className="w-24 sm:w-28 bg-gray-50 px-3 py-2.5 text-gray-600 flex-shrink-0">提升效率</div>
                  <div className="px-3 py-2.5 text-gray-600">减少重复解释的时间</div>
                </div>
              </div>
            </div>
          </section>
          
          {/* 二、安装指南 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              二、安装指南
            </h2>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.1 ClawdHub 安装（推荐）</h3>
            <CodeBlock>clawdhub install self-improving-agent</CodeBlock>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">安装后，skill 会自动加载到 OpenClaw 工作空间。</p>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.2 手动安装</h3>
            <CodeBlock multiline>git clone https://github.com/peterskoett/self-improving-agent.git ~/.openclaw/skills/self-improving-agent</CodeBlock>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">2.3 创建学习文件</h3>
            <CodeBlock>mkdir -p ~/.openclaw/workspace/.learnings</CodeBlock>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">创建三个核心文件：</p>
            
            {/* 文件列表 - 修复对齐 */}
            <div className="space-y-2 mb-4">
              {files.map((file, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-3">
                  <div className="flex-shrink-0 min-w-[140px]">
                    <code className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded font-mono">
                      {file.name}
                    </code>
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm pt-1">
                    {file.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* 三、使用方法 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              三、使用方法
            </h2>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">3.1 触发场景</h3>
            <div className="space-y-2 mb-4">
              {scenarios.map((s, index) => (
                <div key={index} className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-3 text-sm">
                  <div className="min-w-[100px] sm:min-w-[120px] text-gray-600 flex-shrink-0">
                    {s.trigger}
                  </div>
                  <div className="text-emerald-600">
                    {s.action}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* 四、进阶配置 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              四、进阶配置
            </h2>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">4.1 Hook 集成</h3>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">Hook 可以在特定时机自动触发：</p>
            <CodeBlock multiline>{`# 复制 hook
cp -r hooks/openclaw ~/.openclaw/hooks/self-improvement

# 启用
openclaw hooks enable self-improvement`}</CodeBlock>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">4.2 知识推广</h3>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">当学习具有广泛适用性时，推广到项目记忆文件：</p>
            <div className="space-y-2 mb-4">
              {promotionTargets.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-3 text-sm">
                  <div className="min-w-[80px] text-gray-600 flex-shrink-0">
                    {item.type}
                  </div>
                  <code className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                    {item.target}
                  </code>
                </div>
              ))}
            </div>
          </section>
          
          {/* 五、与 OpenClaw 集成 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              五、与 OpenClaw 深度集成
            </h2>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">5.1 跨会话通信</h3>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">OpenClaw 提供工具实现学习共享：</p>
            <div className="space-y-2 mb-4">
              {sessionTools.map((tool, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-3 text-sm">
                  <code className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded font-mono flex-shrink-0">
                    {tool.tool}
                  </code>
                  <span className="text-gray-600">
                    {tool.desc}
                  </span>
                </div>
              ))}
            </div>
          </section>
          
          {/* 开始使用 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              开始使用
            </h2>
            <ol className="text-gray-600 space-y-3 text-sm sm:text-base pl-4">
              <li className="relative before:content-['1.'] before:absolute before:-left-4 before:text-emerald-500 before:font-semibold">
                安装：<code className="text-xs bg-gray-100 px-1 rounded">clawdhub install self-improving-agent</code>
              </li>
              <li className="relative before:content-['2.'] before:absolute before:-left-4 before:text-emerald-500 before:font-semibold">
                创建文件：<code className="text-xs bg-gray-100 px-1 rounded">mkdir -p ~/.openclaw/workspace/.learnings</code>
              </li>
              <li className="relative before:content-['3.'] before:absolute before:-left-4 before:text-emerald-500 before:font-semibold">
                遇到错误或被纠正时，记录下来
              </li>
              <li className="relative before:content-['4.'] before:absolute before:-left-4 before:text-emerald-500 before:font-semibold">
                定期回顾，推广重要知识
              </li>
            </ol>
            
            <div className="mt-8 p-4 sm:p-6 bg-emerald-50 rounded-lg">
              <p className="text-emerald-800 font-semibold text-base sm:text-lg">🚀 让 AI 真正「学会」成长！</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default SkillArticle