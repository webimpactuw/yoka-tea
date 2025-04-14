import React from "react";
import menuImage from './pictures/menu.jpg';
import './Menu.css';

const Menu = () => {
  return (
    <section className="menu-section">
      <div className="menu-container">
        <div className="menu-header">
          <h1 className="menu-title">MENU</h1>
        </div>
        <img src={menuImage} alt="Menu" className="menu-image" />
      </div>
    </section>
  );
};
export default Menu;
