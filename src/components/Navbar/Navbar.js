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
        Menu
        {showMenu ? <Close /> : <Hamburger className="hamburger" />}
      </button>
      <ul className={`nav__list ${showMenu ? 'active' : 'hidden'}`}>
        {/* <hr className="divider" /> */}
        {links.map((link, index) => (
          <li className="nav__item" key={index}>
            <a href="/" className="nav__link underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
