import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <a href="index.html"></a>
            <div>
                <ul id="navbar">
                    <li><a classNAme="active" href="Menu.html"> Menu </a></li>
                    <li><a href="Merch.html"> Merch </a></li>
                    <li><a href="AboutUs.html"> About Me </a></li>
                    <li><a href="Cart.html"> Cart </a></li>
                    <li><a href="Profile.html"> Profile </a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;