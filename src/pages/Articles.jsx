import { Link } from 'react-router-dom'

const articles = [
  {
    id: 'self-improvement',
    title: '如何安装和配置 Self-Improving Agent 技能',
    subtitle: '让你的 OpenClaw 持续进化',
    description: '一个让 AI 助手持续进化的 OpenClaw Skill，通过日志记录错误、学习和功能请求，实现知识沉淀和跨会话共享。',
    tags: ['OpenClaw', 'Skill', 'AI'],
    date: '2026-03-21',
    readTime: '10 分钟',
    emoji: '🧠'
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
        
        <div className="space-y-4">
          {articles.map(article => (
            <Link
              key={article.id}
              to={`/skill/${article.id}`}
              className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 active:scale-[0.98]"
            >
              {/* 顶部装饰条 */}
              <div className="h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"></div>
              
              <div className="p-5 sm:p-6">
                {/* 标题区 */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">
                    {article.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-emerald-600 text-sm mt-1">{article.subtitle}</p>
                  </div>
                </div>
                
                {/* 描述 */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.description}
                </p>
                
                {/* 底部元信息 */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 flex-shrink-0">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* 底部阅读提示 */}
              <div className="px-5 sm:px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm text-emerald-600 font-medium">阅读文章</span>
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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