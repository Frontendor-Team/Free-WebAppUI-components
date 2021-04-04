import React from 'react';
import './Navbar.css';
import { ReactComponent as Hamburger } from '../../assets/Menu.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';

function Navbar({ navItems, toggleMenuVisibility, showMenu }) {
  return (
    <nav className="top-nav">
      <button className="top-nav__button" onClick={toggleMenuVisibility}>
        Menu
        {showMenu ? <Close /> : <Hamburger />}
      </button>
      <ul className={`top-nav__list ${showMenu ? 'active' : 'hidden'}`}>
        <hr className="divider" />
        {navItems.map((navItem, index) => (
          <li className="top-nav__item" key={index}>
            <a href={navItem.link} className="top-nav__link underline">
              {navItem.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
