import { Link } from 'react-router-dom'

const architectures = [
  { level: '执行层', role: '完成任务', example: '写代码、写文章、跑测试' },
  { level: '协调层', role: '分配任务、解决冲突', example: '任务队列、优先级排序' },
  { level: '监督层', role: '评估质量、发现问题', example: 'Code Review、内容审核' },
  { level: '进化层', role: '优化系统本身', example: '发现改进机会、调整策略' }
]

const limitations = [
  { mode: '扁平协作', problem: '智能体之间难以协同，没有人"看全局"' },
  { mode: '主从协作', problem: '主智能体成为瓶颈，其"理解"决定了全局质量' },
  { mode: '层级协作', problem: '信息在层级间衰减，决策链路过长' }
]

const principles = [
  { icon: '📡', title: '元认知能力', desc: '对系统自身的感知，而非单一控制者' },
  { icon: '🌊', title: '全局涌现', desc: '从局部交互中诞生全局智能' },
  { icon: '🔭', title: '高维观测', desc: '在更高维度俯瞰系统运行' }
]

function GodPerspectiveArticle() {
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
              上帝视角：更高维度的 AI 智能体架构思考
            </h1>
            <p className="text-gray-500 text-sm">在多智能体系统中，是否存在一个"上帝视角"？</p>
          </header>
          
          {/* 概述 */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6 border border-purple-100">
              <p className="text-gray-700 text-sm sm:text-base">
                想象一个场景：一家公司有 CEO、部门总监、工程师、运营专员……每个人各司其职，但谁能看清全局？
                <strong> CEO 真的能看清一切吗？</strong>
              </p>
            </div>
            
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              CEO 看到的是"报表层面的全局"，但一线员工的问题、用户的真实反馈、系统的隐性 bug……这些信息在层层上报中已经失真。
              更关键的是：CEO 也是人，有认知局限、精力上限、决策延迟。
            </p>
            
            <p className="text-gray-600 text-sm sm:text-base">
              <strong>那么，在 AI 智能体系统中，是否存在真正的"上帝视角"？</strong>
            </p>
          </section>
          
          {/* 当前架构的局限 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              🤔 当前智能体架构的局限
            </h2>
            
            <div className="space-y-3">
              {limitations.map((item, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="font-semibold text-gray-800 mb-1">{item.mode}</div>
                  <div className="text-gray-600 text-sm">{item.problem}</div>
                </div>
              ))}
            </div>
          </section>
          
          {/* 上帝视角的本质 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              ✨ 上帝视角的本质
            </h2>
            
            <div className="mb-4">
              <p className="text-gray-600 text-sm mb-2"><strong>不是：</strong></p>
              <ul className="text-gray-500 text-sm space-y-1 ml-4">
                <li>❌ 一个"更聪明"的超级智能体</li>
                <li>❌ 一个能看到所有数据的管理员</li>
                <li>❌ 一个集中决策的控制中心</li>
              </ul>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm mb-2"><strong>而是：</strong></p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {principles.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-gray-800 text-sm mb-1">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* 类比 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              🌿 自然界的启示
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">🧬 生物系统</h3>
                <p className="text-gray-600 text-sm mb-2">
                  人体没有"中央控制器"，但却能自主调节体温、免疫识别入侵者、激素协调各器官。
                </p>
                <p className="text-purple-600 text-sm font-medium">
                  谁是身体的"上帝"？—— 没有单一控制者，但存在全局协调的涌现。
                </p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">🐜 蚁群</h3>
                <p className="text-gray-600 text-sm mb-2">
                  单个蚂蚁智能有限，但蚁群能找到最短路径、分配最优任务、适应环境变化。
                </p>
                <p className="text-purple-600 text-sm font-medium">
                  蚁后是"上帝"吗？—— "上帝视角"来自信息素网络和群体智能。
                </p>
              </div>
            </div>
          </section>
          
          {/* 高维架构设计 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              🏗️ 高维智能体架构设计
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-lg border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">维度</th>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">层级</th>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">职责</th>
                    <th className="px-3 py-2 text-left text-gray-600 font-medium">示例</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {architectures.map((item, index) => (
                    <tr key={index}>
                      <td className="px-3 py-2 text-purple-600 font-medium">第{index + 1}维</td>
                      <td className="px-3 py-2 text-gray-800 font-medium">{item.level}</td>
                      <td className="px-3 py-2 text-gray-600">{item.role}</td>
                      <td className="px-3 py-2 text-gray-500 text-xs">{item.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          {/* 实现路径 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              🛤️ 上帝视角的实现路径
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">📊 元数据总线</h3>
                <p className="text-gray-600 text-sm">
                  所有智能体的活动都留下"痕迹"——执行时间、质量评分、问题反馈……这些元数据汇聚到总线，供高层智能体分析。
                </p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">🔄 反馈循环</h3>
                <p className="text-gray-600 text-sm">
                  执行 → 产出 → 评估 → 反馈 → 调整 → 执行。进化层不直接干预，而是调整"规则"和"策略"。
                </p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">🌊 涌现机制</h3>
                <p className="text-gray-600 text-sm">
                  不需要预设所有规则，让智能行为从简单规则中涌现：每个智能体追求任务完成率最大化，帮助他人获得信誉积分……全局效率自然提升。
                </p>
              </div>
            </div>
          </section>
          
          {/* OpenClaw 实践 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              ⚡ OpenClaw 的实践
            </h2>
            
            <p className="text-gray-600 text-sm mb-4">当前架构：</p>
            <div className="bg-gray-900 text-green-400 font-mono text-xs p-4 rounded-lg mb-4 overflow-x-auto">
              <pre>{`用户 → 小绿（战略顾问）
           │
           ├── 开发工程师智能体
           ├── 内容创作智能体
           └── 网站运营智能体`}</pre>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">引入上帝视角后：</p>
            <div className="bg-gray-900 text-green-400 font-mono text-xs p-4 rounded-lg overflow-x-auto">
              <pre>{`              ┌─────────────────┐
              │   进化层（上帝）  │
              │  · 分析运行日志   │
              │  · 发现改进机会   │
              │  · 调整协作策略   │
              └────────┬────────┘
                       │
    ┌──────────────────┼──────────────────┐
    │                  │                  │
 监督层A            监督层B            监督层C
(代码质量)         (内容质量)        (运营效果)`}</pre>
            </div>
          </section>
          
          {/* 未来展望 */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              🚀 未来展望
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">1.</span>
                <div>
                  <strong className="text-gray-800">自我编程的智能体</strong>
                  <p className="text-gray-600 text-sm">发现能力不足 → 自动生成新智能体 → 编写配置和工具 → 测试部署</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">2.</span>
                <div>
                  <strong className="text-gray-800">跨系统上帝视角</strong>
                  <p className="text-gray-600 text-sm">多个 OpenClaw 实例共享进化经验，形成"群体智慧"</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">3.</span>
                <div>
                  <strong className="text-gray-800">人机协作新模式</strong>
                  <p className="text-gray-600 text-sm">人类从"工头"变成"园丁"——不再亲手搭建，而是呵护生长</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* 结语 */}
          <section className="mb-8">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <h3 className="text-purple-800 font-bold text-lg mb-2">结语</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-3">
                真正的"上帝视角"，不是一个超级智能体，而是一个<strong>自我感知、自我优化、自我进化的系统架构</strong>。
              </p>
              <p className="text-gray-600 text-sm">
                它不需要全知全能，只需要：感知状态 → 发现机会 → 调整规则 → 观察效果 → 持续迭代。
              </p>
              <p className="text-purple-600 font-medium mt-3">
                这就是"活着"的系统。
              </p>
            </div>
          </section>
          
          {/* 文章信息 */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">2026-03-28</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded">AI架构</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded">多智能体</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded">自我进化</span>
            </div>
          </section>
          
          {/* 相关阅读 */}
          <section className="mb-8">
            <h3 className="font-semibold text-gray-800 mb-3">相关阅读</h3>
            <div className="flex flex-wrap gap-2">
              <Link to="/skill/self-improvement" className="text-purple-600 hover:text-purple-700 text-sm">
                🧠 Self-Improving Agent
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/skill/capability-evolver" className="text-purple-600 hover:text-purple-700 text-sm">
                🧬 Capability Evolver
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default GodPerspectiveArticle