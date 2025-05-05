import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="website-header">
      <div className="header-container">

        <div className="logo-container">
          <img src="" alt=" " />
          <h1 className="logo">Qualitech</h1>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="home">Home</a>
          <a href="#about" className="about">About</a>
          <a href="#services" className="services">Services</a>
          <a href="#contact" className="contact">Contact</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
