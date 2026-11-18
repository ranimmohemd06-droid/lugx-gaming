import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/games'

function Header() {
  // state بتقول: هل المستخدم نزل تحت؟ (عشان الهيدر يبقى أزرق)
  const [scrolled, setScrolled] = useState(false)
  // state للقائمة في الموبايل
  const [menuOpen, setMenuOpen] = useState(false)
  // state للينك النشط
  const [activeId, setActiveId] = useState(1)

  // useEffect بيشتغل مرة واحدة أول ما الـ component يظهر، وبيسمع للـ scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    // الـ cleanup: بنشيل الـ listener لما الـ component يتشال
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
      <div className="container nav">
        <a href="#top" className="logo">
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <circle cx="15" cy="15" r="15" fill="#fff" />
            <path d="M9 9l12 12M21 9L9 21" stroke="#0072ff" strokeWidth="4" strokeLinecap="round" />
          </svg>
          LUGX
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeId === link.id ? 'active' : ''}
              onClick={() => {
                setActiveId(link.id)
                setMenuOpen(false)
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="sign-in">
            Sign In
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>
    </header>
  )
}

export default Header
