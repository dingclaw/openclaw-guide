function Capabilities() {
  const capabilities = [
    {
      icon: '🤖',
      title: '智能体开发',
      description: '构建具有自主决策能力的 AI 智能体，支持多模型切换、工具调用、记忆管理',
      examples: ['客服机器人', '数据分析助手', '自动化工作流']
    },
    {
      icon: '💬',
      title: '多渠道接入',
      description: '一键接入飞书、微信、钉钉等主流平台，实现全渠道智能服务',
      examples: ['飞书机器人', '微信公众号', '企业微信']
    },
    {
      icon: '🔧',
      title: '工具扩展',
      description: '丰富的工具库，支持自定义工具开发，扩展智能体能力边界',
      examples: ['API 调用', '数据库操作', '文件处理']
    },
    {
      icon: '📊',
      title: '数据分析',
      description: '自动采集、分析、可视化数据，生成洞察报告',
      examples: ['运营报表', '用户分析', '趋势预测']
    },
    {
      icon: '🔄',
      title: '自动化运维',
      description: '从需求到部署全流程自动化，代码生成、测试、发布一站式完成',
      examples: ['CI/CD 流水线', '自动测试', '智能监控']
    },
    {
      icon: '🎯',
      title: '精准营销',
      description: '基于用户行为分析的智能推荐和精准触达',
      examples: ['用户画像', '智能推荐', '营销自动化']
    }
  ]

  const useCases = [
    {
      title: '企业智能客服',
      description: '7×24 小时自动响应，处理常见问题，复杂问题转人工',
      metrics: '响应时间 < 3秒 | 解决率 85%+'
    },
    {
      title: '研发效能提升',
      description: '自动生成代码、测试用例，Code Review 辅助',
      metrics: '开发效率 +40% | Bug 率 -30%'
    },
    {
      title: '数据运营自动化',
      description: '自动采集数据、生成报表、发送预警通知',
      metrics: '人力节省 60% | 准确率 99%'
    },
    {
      title: '智能内容创作',
      description: '自动生成文案、摘要、翻译，支持多语言',
      metrics: '内容产出 +5x | 成本 -70%'
    }
  ]

  return (
    <div className="space-y-12">
      {/* 核心能力 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center flex items-center justify-center gap-2">
          <span>⚡</span> OpenClaw 能做什么
        </h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          六大核心能力，覆盖企业智能化全场景
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-3xl mb-3">{cap.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{cap.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{cap.description}</p>
              <div className="flex flex-wrap gap-2">
                {cap.examples.map((ex, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 典型用例 */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
          🎯 典型应用场景
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          真实案例，可量化的业务价值
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {useCases.map((uc, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900 mb-1">{uc.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{uc.description}</p>
              <div className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded inline-block">
                {uc.metrics}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-4">
        <p className="text-gray-600 mb-4">准备好开始了吗？</p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/dingclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            开始使用
          </a>
          <a
            href="https://docs.openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            查看文档
          </a>
        </div>
      </div>
    </div>
  )
}

export default Capabilities