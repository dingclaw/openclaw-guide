import { Link } from 'react-router-dom'

const articles = [
  {
    id: 'self-improvement',
    title: 'Self-Improving Agent',
    description: '让 AI 拥有记忆与学习能力，记录错误、沉淀知识、持续进化。',
    emoji: '🧠',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100'
  }
]

function Articles() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* 返回首页 */}
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-gray-600 mb-6 text-sm transition-colors">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>
        
        {/* 页面标题 */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          技术文章
        </h1>
        
        {/* 卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map(article => (
            <Link
              key={article.id}
              to={`/skill/${article.id}`}
              className={`block rounded-xl p-5 transition-all hover:shadow-md ${article.bgColor}`}
            >
              {/* 头部：图标 + 标题 */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${article.iconBg}`}>
                  {article.emoji}
                </div>
                <h2 className="font-bold text-gray-800 text-base">
                  {article.title}
                </h2>
              </div>
              
              {/* 描述 */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {article.description}
              </p>
              
              {/* 分割线 */}
              <div className="border-t border-gray-200/50 pt-3">
                <span className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                  阅读更多
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* 空状态 */}
        {articles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">📝</div>
            <p className="text-gray-400">暂无文章</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Articles