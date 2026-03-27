import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

const genes = [
  { id: 'error-repair', name: '错误修复', usage: '检测修复代码错误', priority: 1 },
  { id: 'performance-optimize', name: '性能优化', usage: '优化慢速操作', priority: 2 },
  { id: 'memory-improve', name: '记忆改进', usage: '改进长期记忆存储', priority: 3 },
  { id: 'skill-automation', name: '技能自动化', usage: '将重复任务自动化', priority: 4 },
  { id: 'security-hardening', name: '安全加固', usage: '修复安全漏洞', priority: 5 },
  { id: 'config-refactor', name: '配置重构', usage: '提取硬编码配置', priority: 6 },
  { id: 'docs-improve', name: '文档改进', usage: '改进代码注释文档', priority: 7 },
  { id: 'api-integration', name: 'API集成', usage: '集成外部API服务', priority: 8 },
  { id: 'data-migration', name: '数据迁移', usage: '迁移转换数据格式', priority: 9 },
  { id: 'test-coverage', name: '测试覆盖', usage: '增加测试用例', priority: 10 }
]

const cronTasks = [
  { name: 'capability-evolver-auto-run', time: '每4小时', desc: '能力进化循环' },
  { name: 'daily-study', time: '22:00', desc: '每日学习回顾' },
  { name: '每日自动提交工作空间代码', time: '22:30', desc: 'Git 自动提交' },
  { name: '每日学习汇报', time: '23:00', desc: '学习汇报发送' }
]

const updateLog = [
  { time: '2026-03-25', content: '初始配置完成，添加 10 个基因' },
  { time: '2026-03-25', content: '调整为每4小时执行一次' },
  { time: '2026-03-25', content: '优化汇报格式，增加详细报告' }
]

function CapabilityEvolverArticle() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
        <Link to="/articles" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 text-sm">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回文章列表
        </Link>
        
        <article>
          {/* 标题区 */}
          <header className="mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
              Capability Evolver 配置指南
            </h1>
            <p className="text-gray-500 text-sm">AI 自我进化引擎的安装与配置</p>
          </header>
          
          {/* 概述 */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6 border border-purple-100">
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Capability Evolver</strong> 是一个 AI 自我进化引擎，可以分析运行历史、识别问题并自动改进系统性能。
              </p>
            </div>
          </section>
          
          {/* 安装位置 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              📁 安装位置
            </h2>
            <CodeBlock multiline>{`~/.openclaw/skills/capability-evolver/
├── index.js              # 主入口
├── package.json          # 版本 v1.29.8
├── .env                  # 环境变量配置
├── assets/gep/           # GEP 资产目录
│   ├── genes.json        # 基因定义
│   ├── capsules.json     # 成功胶囊
│   └── events.jsonl      # 事件日志
├── memory/               # 进化记忆
├── logs/                 # 运行日志
└── scripts/              # 脚本
    └── auto-evolve.sh    # 自动运行脚本`}</CodeBlock>
          </section>
          
          {/* 环境变量配置 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              ⚙️ 环境变量配置
            </h2>
            <p className="text-gray-600 mb-3 text-sm">文件位置：<code className="text-xs bg-gray-100 px-1 rounded">~/.openclaw/skills/capability-evolver/.env</code></p>
            <CodeBlock multiline>{`# 节点配置（本地模式）
A2A_NODE_ID=node_local_main
A2A_HUB_URL=http://localhost:0

# 进化策略
EVOLVE_STRATEGY=balanced

# 回滚策略: hard/stash/none
EVOLVER_ROLLBACK_MODE=stash

# 安全设置
EVOLVE_ALLOW_SELF_MODIFY=false
EVOLVE_LOAD_MAX=2.0

# LLM 审核
EVOLVER_LLM_REVIEW=0

# 自动创建 GitHub Issue
EVOLVER_AUTO_ISSUE=0

# 报告工具
EVOLVE_REPORT_TOOL=message`}</CodeBlock>
          </section>
          
          {/* 基因配置 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              🧬 基因配置
            </h2>
            <p className="text-gray-600 mb-3 text-sm">
              文件位置：<code className="text-xs bg-gray-100 px-1 rounded">~/.openclaw/skills/capability-evolver/assets/gep/genes.json</code>
            </p>
            <p className="text-gray-600 mb-4 text-sm">当前配置 <strong>10 个基因</strong>：</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">序号</th>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">基因ID</th>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">名称</th>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">用途</th>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">优先级</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {genes.map((gene, index) => (
                    <tr key={gene.id}>
                      <td className="px-3 py-2 text-gray-500">{index + 1}</td>
                      <td className="px-3 py-2 font-mono text-xs text-purple-600">{gene.id}</td>
                      <td className="px-3 py-2 text-gray-800">{gene.name}</td>
                      <td className="px-3 py-2 text-gray-600">{gene.usage}</td>
                      <td className="px-3 py-2 text-gray-500">{gene.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          {/* 定时任务配置 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              ⏰ 定时任务配置
            </h2>
            <p className="text-gray-600 mb-3 text-sm">使用 OpenClaw Cron 插件（非系统 crontab）</p>
            <p className="text-gray-600 mb-4 text-sm">配置文件：<code className="text-xs bg-gray-100 px-1 rounded">~/.openclaw/cron/jobs.json</code></p>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">任务详情</h3>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
              <div className="divide-y divide-gray-100">
                <div className="flex text-sm">
                  <div className="w-32 sm:w-40 bg-gray-50 px-3 py-2.5 text-gray-600 flex-shrink-0 font-medium">任务ID</div>
                  <div className="px-3 py-2.5 text-gray-700 font-mono text-xs">evolver-auto-run-001</div>
                </div>
                <div className="flex text-sm">
                  <div className="w-32 sm:w-40 bg-gray-50 px-3 py-2.5 text-gray-600 flex-shrink-0 font-medium">任务名称</div>
                  <div className="px-3 py-2.5 text-gray-700">capability-evolver-auto-run</div>
                </div>
                <div className="flex text-sm">
                  <div className="w-32 sm:w-40 bg-gray-50 px-3 py-2.5 text-gray-600 flex-shrink-0 font-medium">执行频率</div>
                  <div className="px-3 py-2.5 text-purple-600 font-semibold">每4小时</div>
                </div>
                <div className="flex text-sm">
                  <div className="w-32 sm:w-40 bg-gray-50 px-3 py-2.5 text-gray-600 flex-shrink-0 font-medium">Cron表达式</div>
                  <div className="px-3 py-2.5 text-gray-700 font-mono text-xs">0 */4 * * *</div>
                </div>
                <div className="flex text-sm">
                  <div className="w-32 sm:w-40 bg-gray-50 px-3 py-2.5 text-gray-600 flex-shrink-0 font-medium">时区</div>
                  <div className="px-3 py-2.5 text-gray-700">Asia/Shanghai</div>
                </div>
                <div className="flex text-sm">
                  <div className="w-32 sm:w-40 bg-gray-50 px-3 py-2.5 text-gray-600 flex-shrink-0 font-medium">下次执行</div>
                  <div className="px-3 py-2.5 text-gray-600">16:00, 20:00, 00:00, 04:00, 08:00, 12:00</div>
                </div>
              </div>
            </div>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">执行流程</h3>
            <ol className="text-gray-600 space-y-2 text-sm sm:text-base pl-4 mb-4">
              <li className="relative before:content-['1.'] before:absolute before:-left-4 before:text-purple-500 before:font-semibold">切换到 evolver 目录</li>
              <li className="relative before:content-['2.'] before:absolute before:-left-4 before:text-purple-500 before:font-semibold">运行 <code className="text-xs bg-gray-100 px-1 rounded">node index.js run</code> 扫描会话日志</li>
              <li className="relative before:content-['3.'] before:absolute before:-left-4 before:text-purple-500 before:font-semibold">检查是否生成变更提示文件</li>
              <li className="relative before:content-['4.'] before:absolute before:-left-4 before:text-purple-500 before:font-semibold">如有变更，执行 <code className="text-xs bg-gray-100 px-1 rounded">node index.js solidify</code></li>
              <li className="relative before:content-['5.'] before:absolute before:-left-4 before:text-purple-500 before:font-semibold">向用户发送详细汇报</li>
            </ol>
          </section>
          
          {/* 汇报格式 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              📊 汇报格式
            </h2>
            <p className="text-gray-600 mb-3 text-sm">每次执行后，您会收到如下报告：</p>
            <CodeBlock multiline>{`📊 **进化周期报告**
- 执行时间：2026-03-25 16:00:00
- 扫描到的信号：[log_error, repeated_tool_usage:exec, ...]
- 选择的基因：[error-repair]
- 进化意图：[repair/optimize/innovate]
- 是否生成变更：[是/否]
- 变更内容摘要：[修复了 XXX 问题]
- 是否已固化：[是/否]
- 下次运行时间：2026-03-25 20:00:00`}</CodeBlock>
          </section>
          
          {/* 手动操作命令 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              🚀 手动操作命令
            </h2>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">试运行（不执行变更）</h3>
            <CodeBlock multiline>{`cd ~/.openclaw/skills/capability-evolver
~/.nvm/versions/node/v24.13.0/bin/node index.js run --dry-run`}</CodeBlock>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">正式运行</h3>
            <CodeBlock multiline>{`cd ~/.openclaw/skills/capability-evolver
~/.nvm/versions/node/v24.13.0/bin/node index.js run`}</CodeBlock>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">审核模式（人工确认）</h3>
            <CodeBlock multiline>{`cd ~/.openclaw/skills/capability-evolver
~/.nvm/versions/node/v24.13.0/bin/node index.js run --review`}</CodeBlock>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">固化变更</h3>
            <CodeBlock multiline>{`cd ~/.openclaw/skills/capability-evolver
~/.nvm/versions/node/v24.13.0/bin/node index.js solidify`}</CodeBlock>
          </section>
          
          {/* 当前所有定时任务 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              📈 当前所有定时任务
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">任务名</th>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">时间</th>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cronTasks.map((task, index) => (
                    <tr key={index}>
                      <td className="px-3 py-2 text-gray-800">{task.name}</td>
                      <td className="px-3 py-2 text-purple-600 font-medium">{task.time}</td>
                      <td className="px-3 py-2 text-gray-600">{task.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          {/* 故障排查 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              🔧 故障排查
            </h2>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">查看运行日志</h3>
            <CodeBlock multiline>{`ls -la ~/.openclaw/skills/capability-evolver/logs/
tail -f ~/.openclaw/skills/capability-evolver/logs/cron.log`}</CodeBlock>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">检查 cron 任务状态</h3>
            <CodeBlock>cat ~/.openclaw/cron/jobs.json | grep '"name"'</CodeBlock>
            
            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-3">手动触发任务</h3>
            <CodeBlock>bash ~/.openclaw/skills/capability-evolver/scripts/auto-evolve.sh</CodeBlock>
          </section>
          
          {/* 更新记录 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              📝 更新记录
            </h2>
            
            <div className="space-y-2">
              {updateLog.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-3 text-sm">
                  <div className="min-w-[100px] text-purple-600 font-medium flex-shrink-0">
                    {item.time}
                  </div>
                  <div className="text-gray-600">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* 使用建议 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              💡 使用建议
            </h2>
            <ol className="text-gray-600 space-y-3 text-sm sm:text-base pl-4">
              <li className="relative before:content-['1.'] before:absolute before:-left-4 before:text-purple-500 before:font-semibold">
                <strong>首次运行</strong>：建议先使用 <code className="text-xs bg-gray-100 px-1 rounded">--dry-run</code> 模式观察行为
              </li>
              <li className="relative before:content-['2.'] before:absolute before:-left-4 before:text-purple-500 before:font-semibold">
                <strong>审核模式</strong>：重要变更使用 <code className="text-xs bg-gray-100 px-1 rounded">--review</code> 模式人工确认
              </li>
              <li className="relative before:content-['3.'] before:absolute before:-left-4 before:text-purple-500 before:font-semibold">
                <strong>日志检查</strong>：定期查看 <code className="text-xs bg-gray-100 px-1 rounded">logs/</code> 目录了解运行情况
              </li>
              <li className="relative before:content-['4.'] before:absolute before:-left-4 before:text-purple-500 before:font-semibold">
                <strong>基因扩展</strong>：根据需要添加新的基因定义
              </li>
            </ol>
          </section>
          
          {/* 开始使用 */}
          <section className="mb-8">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <p className="text-purple-800 font-semibold text-base sm:text-lg">🧬 让 AI 持续进化，自我优化！</p>
              <p className="text-gray-600 text-sm mt-2">文档由星期五整理创建</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default CapabilityEvolverArticle