import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Pictures/Logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`TopText ${isScrolled ? 'scrolled' : ''}`} id="TopText">
      <div className="Logo">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Portofoil Logo" />
        </Link>
      </div>
      <div className="nav-container">
        <a href="#AboutMe" className="TText">
          <span className="material-icons">person</span> About Me
        </a>
        <a href="#ProjectID" className="TText">
          <span className="material-icons">folder</span> Projects
        </a>
        <a href="#contact" className="TText">
          <span className="material-icons">contact_mail</span> Contact Me
        </a>
      </div>
      <div className="topnav">
        <input type="text" placeholder="Search.." />
      </div>
    </div>
  );
};

export default Header;
