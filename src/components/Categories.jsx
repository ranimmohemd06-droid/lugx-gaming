import Cover from './Cover'
import SectionHeading from './SectionHeading'
import { categories } from '../data/games'

function Categories() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading label="Categories" title="Top Categories" showButton={false} />

        <div className="categories-grid">
          {categories.map((item) => (
            <a href="#" className="category-card" key={item.id}>
              <h5>{item.name}</h5>
              <Cover game={item} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
