import { FiShoppingBag } from 'react-icons/fi'
import Cover from './Cover'
import SectionHeading from './SectionHeading'
import { trendingGames } from '../data/games'

function Trending() {
  return (
    <section className="section" id="trending">
      <div className="container">
        <SectionHeading label="Trending" title="Trending Games" />

        <div className="trending-grid">
          {trendingGames.map((game) => (
            <div className="trending-card" key={game.id}>
              <div className="trending-image">
                <Cover game={game} />
                <div className="price-tag">
                  {/* لو فيه سعر قديم نعرضه متشطّب */}
                  {game.oldPrice && <del>${game.oldPrice}</del>}
                  <span>${game.price}</span>
                </div>
              </div>
              <div className="trending-info">
                <div>
                  <span className="category">{game.category}</span>
                  <h4>{game.name}</h4>
                </div>
                <button className="cart-btn" aria-label="Add to cart">
                  <FiShoppingBag size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending
