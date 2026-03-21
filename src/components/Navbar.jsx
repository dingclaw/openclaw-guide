import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  const links = [
    { path: '/', label: '首页' },
    { path: '/guide', label: '使用指南' },
    { path: '/skill/self-improvement', label: '技术文章' },
    { path: '/feedback', label: '问题反馈' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🦀</span>
            <span className="font-bold text-lg text-gray-900">OpenClaw</span>
          </Link>
          
          <div className="flex gap-6">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar