import { Link } from 'react-router-dom'

const articles = [
  {
    id: 'self-improvement',
    title: 'Self-Improving Agent Skill',
    subtitle: '让 AI 拥有记忆与学习能力',
    description: '一个让 AI 助手持续进化的 OpenClaw Skill，通过日志记录错误、学习和功能请求。',
    tags: ['OpenClaw', 'Skill', 'AI'],
    date: '2026-03-21',
    readTime: '10 分钟'
  }
]

function Articles() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 text-sm">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>
        
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">技术文章</h1>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">深度技术分享，了解 OpenClaw 的核心技术</p>
        
        <div className="space-y-3">
          {articles.map(article => (
            <Link
              key={article.id}
              to={`/skill/${article.id}`}
              className="block bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 active:scale-[0.98]"
            >
              <div className="flex items-start">
                <div className="flex-1 min-w-0">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 truncate">
                    {article.title}
                  </h2>
                  <p className="text-emerald-600 text-xs sm:text-sm mb-2">{article.subtitle}</p>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                    {article.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="text-gray-300 ml-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">暂无文章</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Articles