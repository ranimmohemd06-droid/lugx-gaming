import { useState } from 'react'
import Cover from './Cover'
import { heroGame } from '../data/games'

function Banner() {
  // state للنص اللي المستخدم بيكتبه في البحث (controlled input)
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // نمنع الصفحة إنها تعمل reload
    alert(`Searching for: ${search}`)
  }

  return (
    <section className="banner" id="top">
      <div className="container banner-inner">
        <div className="banner-text">
          <h6>Welcome to LUGX</h6>
          <h2>
            Best <span className="underlined">Gaming</span> Site Ever!
          </h2>
          <p>
            LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can
            download and use this layout for commercial purposes. Please tell your friends about
            TemplateMo.
          </p>
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type Something"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="main-button">
              Search Now
            </button>
          </form>
        </div>

        <div className="hero-card">
          <Cover game={heroGame} />
          <span className="price-tag">${heroGame.price}</span>
          <span className="discount">-{heroGame.discount}%</span>
        </div>
      </div>
    </section>
  )
}

export default Banner
