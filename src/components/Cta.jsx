import { useState } from 'react'
import Cover from './Cover'

const ctaImage = { title: 'Pre-Order', colors: ['#7d8a8f', '#3a3f44'], image:'/images/cta.jpg'}

function Cta() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Subscribed: ${email}`)
    setEmail('') 
  }

  return (
    <section className="cta" id="cta">
      <div className="container cta-wrap">
        <div className="cta-card cta-left">
          <h6>Our Shop</h6>
          <h2>
            Go Pre-Order Buy &amp; Get Best <span className="blue">Prices</span> For You!
          </h2>
          <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
          <a href="#" className="main-button">
            Shop Now
          </a>
        </div>

        <Cover game={ctaImage} className="cta-image" />

        <div className="cta-card cta-right">
          <h6>Newsletter</h6>
          <h2>
            Get Up To $100 Off Just Buy <span className="blue">Subscribe</span> Newsletter!
          </h2>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="main-button">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Cta
