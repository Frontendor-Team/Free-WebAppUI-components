import React from 'react';
import './SearchBar.css';

function SearchBar({ placeholder, icon }) {
  return (
    <div className="search">
      <img src={icon} className="search__icon" alt="" />
      <input type="text" className="search__input" placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;
