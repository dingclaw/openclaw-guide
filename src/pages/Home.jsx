import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <div className="text-6xl mb-6">🦀</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            OpenClaw
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            OpenClaw 是一个强大的 AI 智能体框架，让你轻松构建、部署和管理智能应用。
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            支持 Claude、GPT、GLM 等多种大模型，集成飞书、微信等平台，一站式解决智能体开发需求。
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/guide"
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              开始使用
            </Link>
            <a
              href="https://github.com/dingclaw/openclaw-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link
            to="/guide"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
          >
            <div className="text-3xl">🚀</div>
            <div>
              <h3 className="text-lg font-semibold mb-1">快速开始</h3>
              <p className="text-gray-600 text-sm">
                5 分钟上手 OpenClaw，从安装到第一个智能体。
              </p>
            </div>
          </Link>
          <Link
            to="/feedback"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
          >
            <div className="text-3xl">💬</div>
            <div>
              <h3 className="text-lg font-semibold mb-1">问题反馈</h3>
              <p className="text-gray-600 text-sm">
                遇到问题或有建议？我们很乐意听取您的反馈。
              </p>
            </div>
          </Link>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">核心特性</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold mb-2">智能体框架</h3>
              <p className="text-gray-600">
                内置多种 AI 能力，支持多模态交互，轻松构建智能应用。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">快速部署</h3>
              <p className="text-gray-600">
                一键部署到云端，支持多种平台，无需复杂配置。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-lg font-semibold mb-2">生态集成</h3>
              <p className="text-gray-600">
                集成飞书、微信等平台，轻松连接你的工作流。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold mb-2">多模型支持</h3>
              <p className="text-gray-600">
                支持 Claude、GPT、GLM 等主流大模型，灵活切换。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">工具扩展</h3>
              <p className="text-gray-600">
                丰富的工具库，支持自定义工具，扩展智能体能力。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">安全可控</h3>
              <p className="text-gray-600">
                完善的权限管理，保护你的数据安全和隐私。
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">应用场景</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/50 backdrop-blur p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span>💼</span> 企业助手
              </h3>
              <p className="text-gray-600 text-sm">
                自动化办公流程、智能问答、文档处理，提升团队效率。
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span>🎨</span> 创意生成
              </h3>
              <p className="text-gray-600 text-sm">
                内容创作、设计辅助、灵感激发，释放创造力。
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span>📊</span> 数据分析
              </h3>
              <p className="text-gray-600 text-sm">
                自动生成报告、数据可视化、智能洞察。
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span>🤝</span> 客户服务
              </h3>
              <p className="text-gray-600 text-sm">
                7x24 小时智能客服，自动处理常见问题。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🦀</span>
              <span className="font-bold text-lg text-white">OpenClaw</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/guide" className="hover:text-white transition-colors">使用指南</Link>
              <Link to="/feedback" className="hover:text-white transition-colors">问题反馈</Link>
              <a href="https://github.com/dingclaw/openclaw-guide" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <span id="busuanzi_container_site_pv">
              本站总访问量 <span id="busuanzi_value_site_pv"></span> 次
            </span>
            <span className="mx-2">|</span>
            © 2026 OpenClaw. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home