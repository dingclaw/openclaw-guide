import { Link } from 'react-router-dom'

function SkillArticle() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/articles" className="text-emerald-600 hover:text-emerald-700 mb-8 inline-block">
        ← 返回文章列表
      </Link>
      
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Self-Improving Agent Skill：让 AI 拥有记忆与学习能力
        </h1>
        <p className="text-gray-500 mb-8">一个让 AI 助手持续进化的 OpenClaw Skill</p>
        
        <h2 id="intro" className="text-2xl font-bold text-gray-900 mt-12 mb-4">一、引言</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">1.1 问题背景</h3>
        <p className="text-gray-600 mb-4">你是否遇到过这样的情况：</p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>AI 助手在某个问题上犯了错，下次对话又犯同样的错误</li>
          <li>你纠正了 AI，但它「转头就忘」</li>
          <li>项目中的最佳实践、坑点经验无法沉淀，每次都要重新解释</li>
        </ul>
        <p className="text-gray-600 mb-4">这是因为传统的 AI 助手每次对话都是「从零开始」，没有记忆，也没有学习能力。</p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">1.2 解决方案</h3>
        <p className="text-gray-600 mb-4">
          <strong>Self-Improving Agent Skill</strong> 是一个为 OpenClaw 设计的技能，它让 AI 拥有了「记忆」和「学习能力」：
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>📝 <strong>日志记录</strong>：通过 <code className="bg-gray-100 px-1 rounded">.learnings/</code> 目录下的 Markdown 文件记录错误、学习、功能请求</li>
          <li>🔄 <strong>知识推广</strong>：重要的学习自动推广到项目记忆文件</li>
          <li>🔗 <strong>跨会话通信</strong>：通过 OpenClaw 的 session 工具实现学习共享</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">1.3 核心价值</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">价值</th>
                <th className="border border-gray-200 px-4 py-2 text-left">说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">减少重复犯错</td>
                <td className="border border-gray-200 px-4 py-2">AI 记住之前的错误，不再重蹈覆辙</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">沉淀项目知识</td>
                <td className="border border-gray-200 px-4 py-2">将隐性知识转化为显性文档</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">提升开发效率</td>
                <td className="border border-gray-200 px-4 py-2">减少「重新解释」的时间成本</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 id="install" className="text-2xl font-bold text-gray-900 mt-12 mb-4">二、安装指南</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2.1 ClawdHub 安装（推荐）</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>clawdhub install self-improving-agent</code>
        </pre>
        <p className="text-gray-600 mb-4">安装后，skill 会自动加载到 OpenClaw 工作空间。</p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2.2 手动安装</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>git clone https://github.com/peterskoett/self-improving-agent.git ~/.openclaw/skills/self-improving-agent</code>
        </pre>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">2.3 创建学习文件</h3>
        <p className="text-gray-600 mb-4">在 OpenClaw 工作空间创建 <code className="bg-gray-100 px-1 rounded">.learnings/</code> 目录：</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>mkdir -p ~/.openclaw/workspace/.learnings</code>
        </pre>
        <p className="text-gray-600 mb-4">创建三个核心文件：</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">文件</th>
                <th className="border border-gray-200 px-4 py-2 text-left">用途</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2"><code className="bg-gray-100 px-1 rounded">LEARNINGS.md</code></td>
                <td className="border border-gray-200 px-4 py-2">记录纠正、知识缺口、最佳实践</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2"><code className="bg-gray-100 px-1 rounded">ERRORS.md</code></td>
                <td className="border border-gray-200 px-4 py-2">记录命令失败、异常错误</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2"><code className="bg-gray-100 px-1 rounded">FEATURE_REQUESTS.md</code></td>
                <td className="border border-gray-200 px-4 py-2">记录用户请求的新功能</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 id="usage" className="text-2xl font-bold text-gray-900 mt-12 mb-4">三、使用方法</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">3.1 记录错误</h3>
        <p className="text-gray-600 mb-4">当命令或操作失败时，记录到 <code className="bg-gray-100 px-1 rounded">ERRORS.md</code>：</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`## [ERR-20260321-001] npm_install_failed

**Logged**: 2026-03-21T10:30:00+08:00
**Priority**: high
**Status**: pending
**Area**: config

### Summary
npm install 失败，项目使用 pnpm

### Error
\`\`\`
npm ERR! lockfile missing
\`\`\`

### Context
- 项目使用 pnpm workspaces
- 尝试使用 npm 安装依赖

### Suggested Fix
使用 \`pnpm install\` 替代 \`npm install\`

---`}
        </pre>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">3.2 触发场景</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">场景</th>
                <th className="border border-gray-200 px-4 py-2 text-left">行为</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">命令/操作失败</td>
                <td className="border border-gray-200 px-4 py-2">→ 记录到 <code className="bg-gray-100 px-1 rounded">ERRORS.md</code></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">用户纠正（"不对..."）</td>
                <td className="border border-gray-200 px-4 py-2">→ 记录到 <code className="bg-gray-100 px-1 rounded">LEARNINGS.md</code></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">发现更好的方法</td>
                <td className="border border-gray-200 px-4 py-2">→ 记录到 <code className="bg-gray-100 px-1 rounded">LEARNINGS.md</code></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">用户想要缺失的功能</td>
                <td className="border border-gray-200 px-4 py-2">→ 记录到 <code className="bg-gray-100 px-1 rounded">FEATURE_REQUESTS.md</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 id="advanced" className="text-2xl font-bold text-gray-900 mt-12 mb-4">四、进阶配置</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.1 Hook 集成</h3>
        <p className="text-gray-600 mb-4">Hook 可以在特定时机自动触发：</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
{`# 复制 hook 到 OpenClaw hooks 目录
cp -r /path/to/self-improving-agent/hooks/openclaw ~/.openclaw/hooks/self-improvement

# 启用
openclaw hooks enable self-improvement`}
        </pre>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.2 知识推广</h3>
        <p className="text-gray-600 mb-4">当学习具有广泛适用性时，推广到项目记忆文件：</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">学习类型</th>
                <th className="border border-gray-200 px-4 py-2 text-left">推广目标</th>
                <th className="border border-gray-200 px-4 py-2 text-left">示例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">行为模式</td>
                <td className="border border-gray-200 px-4 py-2"><code className="bg-gray-100 px-1 rounded">SOUL.md</code></td>
                <td className="border border-gray-200 px-4 py-2">"简洁回复，避免免责声明"</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">工作流改进</td>
                <td className="border border-gray-200 px-4 py-2"><code className="bg-gray-100 px-1 rounded">AGENTS.md</code></td>
                <td className="border border-gray-200 px-4 py-2">"长任务启动子智能体"</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">工具陷阱</td>
                <td className="border border-gray-200 px-4 py-2"><code className="bg-gray-100 px-1 rounded">TOOLS.md</code></td>
                <td className="border border-gray-200 px-4 py-2">"git push 需要先配置认证"</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 id="integration" className="text-2xl font-bold text-gray-900 mt-12 mb-4">五、与 OpenClaw 深度集成</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">5.1 工作区结构</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
{`~/.openclaw/workspace/
├── AGENTS.md          # 多智能体工作流
├── SOUL.md            # 行为准则
├── TOOLS.md           # 工具使用指南
├── MEMORY.md          # 长期记忆
├── memory/            # 日记文件
│   └── YYYY-MM-DD.md
└── .learnings/        # 本 skill 的日志
    ├── LEARNINGS.md
    ├── ERRORS.md
    └── FEATURE_REQUESTS.md`}
        </pre>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">5.2 跨会话通信</h3>
        <p className="text-gray-600 mb-4">OpenClaw 提供工具实现学习共享：</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">工具</th>
                <th className="border border-gray-200 px-4 py-2 text-left">用途</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2"><code className="bg-gray-100 px-1 rounded">sessions_list</code></td>
                <td className="border border-gray-200 px-4 py-2">查看活跃/最近的会话</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2"><code className="bg-gray-100 px-1 rounded">sessions_history</code></td>
                <td className="border border-gray-200 px-4 py-2">读取其他会话的记录</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2"><code className="bg-gray-100 px-1 rounded">sessions_send</code></td>
                <td className="border border-gray-200 px-4 py-2">向其他会话发送学习内容</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 id="start" className="text-2xl font-bold text-gray-900 mt-12 mb-4">开始使用</h2>
        <p className="text-gray-600 mb-4">现在你已经了解了 Self-Improving Agent Skill 的全部内容，开始使用吧：</p>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>安装 skill：<code className="bg-gray-100 px-1 rounded">clawdhub install self-improving-agent</code></li>
          <li>创建学习文件：<code className="bg-gray-100 px-1 rounded">mkdir -p ~/.openclaw/workspace/.learnings</code></li>
          <li>在下次遇到错误或被纠正时，记录下来</li>
          <li>定期回顾，推广重要知识</li>
        </ol>
        
        <div className="mt-12 p-6 bg-emerald-50 rounded-lg">
          <p className="text-emerald-800 font-semibold text-lg">让 AI 真正「学会」成长！</p>
        </div>
      </article>
    </div>
  )
}

export default SkillArticle