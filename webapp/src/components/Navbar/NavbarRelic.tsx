import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">RELIC</Link>

        <button className="navbar__toggle" onClick={toggleMenu}>
          <span className="navbar__toggle-icon">&#9776;</span>
        </button>

        <nav className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
          <div className="navbar__item group">
            <span>Explore</span>
            <div className="navbar__dropdown">
              <Link to="/collections">Collections</Link>
              <Link to="/artists">Artists</Link>
              <Link to="/new">New Drops</Link>
            </div>
          </div>

          <div className="navbar__item group">
            <span>Create</span>
            <div className="navbar__dropdown">
              <Link to="/create/art">Create Art</Link>
              <Link to="/create/collection">Start Collection</Link>
            </div>
          </div>

          <Link to="/about" className="navbar__item">About</Link>

          <button className="navbar__wallet-button">Connect Wallet</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
