import { Link } from 'react-router-dom'

const articles = [
  {
    id: 'self-improvement',
    title: 'Self-Improving Agent Skill',
    subtitle: '让 AI 拥有记忆与学习能力',
    description: '一个让 AI 助手持续进化的 OpenClaw Skill，通过日志记录错误、学习和功能请求，实现知识沉淀和跨会话共享。',
    tags: ['OpenClaw', 'Skill', 'AI'],
    date: '2026-03-21',
    readTime: '10 分钟'
  }
]

function Articles() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/" className="text-emerald-600 hover:text-emerald-700 mb-8 inline-block">
        ← 返回首页
      </Link>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-2">技术文章</h1>
      <p className="text-gray-500 mb-8">深度技术分享，了解 OpenClaw 的核心技术</p>
      
      <div className="space-y-4">
        {articles.map(article => (
          <Link
            key={article.id}
            to={`/skill/${article.id}`}
            className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {article.title}
                </h2>
                <p className="text-emerald-600 text-sm mb-2">{article.subtitle}</p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex gap-2">
                    {article.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-400 text-xs">{article.date}</span>
                  <span className="text-gray-400 text-xs">{article.readTime}</span>
                </div>
              </div>
              <div className="text-gray-300 ml-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  )
}

export default Articles