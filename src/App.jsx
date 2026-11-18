import Header from './components/Header'
import Banner from './components/Banner'
import Features from './components/Features'
import Trending from './components/Trending'
import MostPlayed from './components/MostPlayed'
import Categories from './components/Categories'
import Cta from './components/Cta'
import Footer from './components/Footer'
import './App.css'

// App بس بيرتّب الأقسام ورا بعض. كل قسم في component لوحده.
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Trending />
      <MostPlayed />
      <Categories />
      <Cta />
      <Footer />
    </>
  )
}

export default App
