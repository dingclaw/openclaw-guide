import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Guide from './pages/Guide'
import Feedback from './pages/Feedback'
import SkillArticle from './pages/SkillArticle'

function App() {
  return (
    <Router basename="/openclaw-guide">
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/skill/self-improvement" element={<SkillArticle />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App