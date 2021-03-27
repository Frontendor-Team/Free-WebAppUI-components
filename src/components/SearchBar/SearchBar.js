import React from 'react';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';

function SearchBar() {
  return (
    <div className="search container">
      <input type="text" className="search__input" placeholder="Search" />
      <SearchIcon className="search__icon" />
    </div>
  );
}

export default SearchBar;
