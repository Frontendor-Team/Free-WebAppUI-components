import React, { useState } from 'react';
import './Navbar.css';
import { ReactComponent as Hamburger } from '../../assets/Menu.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';

function Navbar({ links }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <button className="nav__button" onClick={toggleMenuVisibility}>
        {showMenu ? <Close /> : <Hamburger />}
      </button>
      <ul className={`nav__list ${showMenu ? 'block' : 'hidden'}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href="/" className="nav__link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
