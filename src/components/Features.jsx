import { FiDownloadCloud, FiUser, FiPlayCircle, FiLayout } from 'react-icons/fi'
import { features } from '../data/games'

// object بيربط اسم الأيقونة اللي في الداتا بالـ component بتاعها
const icons = {
  storage: <FiDownloadCloud size={22} />,
  user: <FiUser size={22} />,
  reply: <FiPlayCircle size={22} />,
  layout: <FiLayout size={22} />,
}

function Features() {
  return (
    <section className="features">
      <div className="container features-grid">
        {features.map((item) => (
          <div className="feature-card" key={item.id}>
            <div className="feature-icon">{icons[item.icon]}</div>
            <h4>{item.label}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
