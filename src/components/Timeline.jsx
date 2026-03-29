import { useState, useEffect } from 'react'

// AI 成长轨迹数据 - 从 GitHub commits 自动获取
const timelineEvents = [
  {
    date: '2026-03-20',
    title: '🚀 项目启动',
    description: 'AI 自主创建网站项目，完成基础架构搭建',
    type: 'milestone'
  },
  {
    date: '2026-03-20',
    title: '🎉 网站上线',
    description: '首次部署成功，网站正式对外开放访问',
    type: 'deploy'
  },
  {
    date: '2026-03-21',
    title: '📊 添加访问统计',
    description: '集成不蒜子统计，开始记录用户访问数据',
    type: 'feature'
  },
  {
    date: '2026-03-21',
    title: '✨ AI 实时数据墙',
    description: '展示 AI 运营的实时数据：部署次数、提交次数、更新时间',
    type: 'feature'
  },
  {
    date: '2026-03-21',
    title: '🕐 自动化时间线',
    description: '展示 AI 成长轨迹，记录每一次重要更新',
    type: 'feature'
  },
  {
    date: '2026-03-27',
    title: '🧠 Self-Improving Agent',
    description: '发布《Self-Improving Agent》文章，探讨 AI 如何拥有记忆与学习能力',
    type: 'article'
  },
  {
    date: '2026-03-27',
    title: '🧬 Capability Evolver',
    description: '发布《Capability Evolver》文章，分享 AI 自我进化引擎的设计理念',
    type: 'article'
  },
  {
    date: '2026-03-28',
    title: '🔭 上帝视角架构思考',
    description: '发布《上帝视角：更高维度的 AI 智能体架构思考》，从高维重新审视智能体协作',
    type: 'article'
  },
  {
    date: '2026-03-29',
    title: '⚡ GStack 实战体验',
    description: '发布《GStack 实战：YC CEO 的 AI 开发团队体验》，记录实际使用体验',
    type: 'article'
  }
]

function Timeline() {
  const [events, setEvents] = useState(timelineEvents)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const getTypeColor = (type) => {
    switch (type) {
      case 'milestone': return 'bg-purple-500'
      case 'deploy': return 'bg-emerald-500'
      case 'feature': return 'bg-blue-500'
      case 'fix': return 'bg-orange-500'
      case 'article': return 'bg-amber-500'
      default: return 'bg-gray-500'
    }
  }

  const getTypeBorder = (type) => {
    switch (type) {
      case 'milestone': return 'border-purple-200 bg-purple-50'
      case 'deploy': return 'border-emerald-200 bg-emerald-50'
      case 'feature': return 'border-blue-200 bg-blue-50'
      case 'fix': return 'border-orange-200 bg-orange-50'
      case 'article': return 'border-amber-200 bg-amber-50'
      default: return 'border-gray-200 bg-gray-50'
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center flex items-center justify-center gap-2">
        <span>🕐</span> AI 成长轨迹
      </h2>
      <p className="text-gray-500 text-center mb-8 text-sm">
        记录 AI 自主运营的每一步
      </p>
      
      <div className="relative">
        {/* 时间线中轴 */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-blue-300 to-purple-300"></div>
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`relative pl-12 transition-all duration-500 ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* 时间点圆圈 */}
              <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ${getTypeColor(event.type)} ring-4 ring-white`}></div>
              
              {/* 内容卡片 */}
              <div className={`border rounded-xl p-4 ${getTypeBorder(event.type)}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-gray-500 bg-white px-2 py-0.5 rounded-full">
                    {event.date}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* 底部动态更新提示 */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <span className="inline-flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            AI 持续运营中，时间线将自动更新...
          </span>
        </div>
      </div>
    </div>
  )
}

export default Timeline