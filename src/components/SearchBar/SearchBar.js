import React from 'react';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';

function SearchBar() {
  return (
    <form>
      <label htmlFor="search">
        <SearchIcon className="icon" />
        <input type="text" className="search" placeholder={'Search'} />
      </label>
    </form>
  );
}

export default SearchBar;
