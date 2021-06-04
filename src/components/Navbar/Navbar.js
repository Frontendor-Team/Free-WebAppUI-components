import React from 'react';
import '../../assets/variables.css';
import './Navbar.css';
import { ReactComponent as Hamburger } from '../../assets/Menu.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';

function Navbar({ navItems, toggleMenuVisibility, showMenu }) {
  return (
    <nav className={`ui-top-nav ${showMenu ? 'ui-top-nav--open' : 'ui-top-nav--close'}`}>
      <button className="ui-top-nav__button" onClick={toggleMenuVisibility}>
        Menu
        {showMenu ? <Close /> : <Hamburger />}
      </button>
      <ul className="ui-top-nav__list">
        {navItems.map((navItem, index) => (
          <li className="ui-top-nav__item" key={index}>
            <a href={navItem.link} className="ui-top-nav__link">
              {navItem.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
