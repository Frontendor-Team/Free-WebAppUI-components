import React from 'react';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';

function SearchBar({ icon }) {
  return (
    <div className="search">
      <SearchIcon className="search__icon" />
      <input type="text" className="search__input" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
