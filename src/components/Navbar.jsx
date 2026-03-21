import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  
  const links = [
    { path: '/', label: '首页' },
    { path: '/guide', label: '使用指南' },
    { path: '/articles', label: '技术文章' },
    { path: '/feedback', label: '问题反馈' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🦀</span>
            <span className="font-bold text-sm sm:text-lg text-gray-900">OpenClaw</span>
          </Link>
          
          {/* 桌面端导航 */}
          <div className="hidden sm:flex gap-4 lg:gap-6">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 lg:px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="sm:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* 移动端下拉菜单 */}
        {menuOpen && (
          <div className="sm:hidden pb-3 border-t border-gray-100 mt-0 pt-2">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar