import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from './pictures/Logo.png';

function Navbar() {
    return (
        <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="YOKA Logo" className="logo-image" />
        </Link>

        <nav>
          <ul id="navbar">
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar;