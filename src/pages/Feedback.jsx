import { Link } from 'react-router-dom'

function Feedback() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/" className="text-emerald-600 hover:underline">首页</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">问题反馈</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">问题反馈</h1>

        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <p className="text-gray-600 mb-6">
            遇到问题或有建议？我们很乐意听取您的反馈。请通过以下方式联系我们：
          </p>

          <a
            href="https://openclaw.feishu.cn/share/base/form/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            <span>📝</span>
            填写反馈表单
          </a>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
            <span>💡</span> 反馈前请确认
          </h3>
          <ul className="text-amber-700 text-sm space-y-1">
            <li>• 已查阅使用指南，确认问题不在常见问题中</li>
            <li>• 提供详细的问题描述和复现步骤</li>
            <li>• 如有错误信息，请一并附上</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Feedback