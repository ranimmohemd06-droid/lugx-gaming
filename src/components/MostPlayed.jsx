import Cover from './Cover'
import SectionHeading from './SectionHeading'
import { mostPlayedGames } from '../data/games'

function MostPlayed() {
  return (
    <section className="most-played" id="most-played">
      <div className="container">
        <SectionHeading label="Top Games" title="Most Played" />

        <div className="played-grid">
          {mostPlayedGames.map((game) => (
            <div className="played-card" key={game.id}>
              <Cover game={game} />
              <span className="category">{game.category}</span>
              <h4>{game.name}</h4>
              <a href="#" className="main-button small">
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MostPlayed
