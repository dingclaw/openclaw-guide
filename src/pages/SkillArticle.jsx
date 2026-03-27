import { useParams } from 'react-router-dom'
import SelfImprovingArticle from './SelfImprovingArticle'
import CapabilityEvolverArticle from './CapabilityEvolverArticle'

function SkillArticle() {
  const { id } = useParams()
  
  // 根据文章 ID 渲染不同的文章组件
  if (id === 'capability-evolver') {
    return <CapabilityEvolverArticle />
  }
  
  // 默认渲染 Self-Improving Agent 文章
  return <SelfImprovingArticle />
}

export default SkillArticle