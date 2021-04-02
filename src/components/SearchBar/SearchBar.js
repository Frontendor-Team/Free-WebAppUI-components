import React from 'react';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import Container from '../Container/Container';

function SearchBar() {
  return (
    <Container>
      <div className="search">
        <input type="text" className="search__input" placeholder="Search" />
        <SearchIcon className="search__icon" />
      </div>
    </Container>
  );
}

export default SearchBar;
