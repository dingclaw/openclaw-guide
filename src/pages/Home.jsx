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
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            OpenClaw 是一个强大的 AI 智能体框架，让你轻松构建、部署和管理智能应用。
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

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
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
        </div>
      </div>
    </div>
  )
}

export default Home