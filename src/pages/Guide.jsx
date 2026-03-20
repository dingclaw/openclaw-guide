import { Link } from 'react-router-dom'

function Guide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/" className="text-emerald-600 hover:underline">首页</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">使用指南</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">使用指南</h1>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🚀</span> 快速开始
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-semibold">1</span>
                <div>
                  <h4 className="font-semibold mb-1">安装 OpenClaw</h4>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm install -g openclaw</code>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-semibold">2</span>
                <div>
                  <h4 className="font-semibold mb-1">初始化项目</h4>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">openclaw init my-agent</code>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-semibold">3</span>
                <div>
                  <h4 className="font-semibold mb-1">配置智能体</h4>
                  <p className="text-gray-600 text-sm">编辑 <code className="bg-gray-100 px-1 rounded">agent.yaml</code> 文件，定义智能体的能力和行为。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-semibold">4</span>
                <div>
                  <h4 className="font-semibold mb-1">启动服务</h4>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">openclaw start</code>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚙️</span> 核心功能
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span>🧠</span> 智能对话
              </h4>
              <p className="text-gray-600 text-sm">支持多轮对话、上下文理解、知识检索等高级对话能力。</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span>🔧</span> 工具调用
              </h4>
              <p className="text-gray-600 text-sm">内置丰富的工具库，支持自定义工具扩展。</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span>📊</span> 多模态处理
              </h4>
              <p className="text-gray-600 text-sm">支持文本、图片、文件等多种输入输出格式。</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span>🔐</span> 安全控制
              </h4>
              <p className="text-gray-600 text-sm">完善的权限管理和安全机制，保护你的数据安全。</p>
            </div>
          </div>
        </section>

        {/* Documentation Links */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📚</span> 更多资源
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/dingclaw/openclaw-guide" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline flex items-center gap-2">
                  <span>📖</span> GitHub 仓库
                </a>
              </li>
              <li>
                <a href="https://github.com/dingclaw/openclaw-guide/tree/main/examples" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline flex items-center gap-2">
                  <span>💡</span> 示例项目
                </a>
              </li>
              <li>
                <a href="https://github.com/dingclaw/openclaw-guide/wiki" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline flex items-center gap-2">
                  <span>🎓</span> Wiki 文档
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Guide