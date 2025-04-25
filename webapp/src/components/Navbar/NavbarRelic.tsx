import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarRelic.css'


type Props = {
  className?: string
}

const Navbar: React.FC<Props> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className={`navbar ${className ?? ''}`}>
      <div className="navbar__container">
        {/* Logo centered */}
        <div className="navbar__logo-wrapper">
          <Link to="/" className="navbar__logo-link">
            <img
              src="/logo2.png" // <-- Replace with your actual image path
              alt="RELIC Marketplace Logo"
              className="navbar__logo-img"
            />
          </Link>
        </div>

        <button className="navbar__toggle" onClick={toggleMenu}>
          <span className="navbar__toggle-icon">&#9776;</span>
        </button>

        <nav className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
          {/* ...menu items */}
        </nav>

        <div className="navbar__wallet-wrapper">
      <button className="navbar__wallet-button">Connect Wallet</button>
    </div>
  </div>
</header>
  )
}

export default Navbar
