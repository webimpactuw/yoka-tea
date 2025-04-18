import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    return (
        <nav>
            <div>
                <ul id="navbar">
                    <li><Link to="/menu"> Menu </Link></li>
                    <li><Link to="/about"> About Us </Link></li>
                    <li><Link to="/profile"> Profile </Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
