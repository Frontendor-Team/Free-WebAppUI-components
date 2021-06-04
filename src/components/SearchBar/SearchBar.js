import React from 'react';
import '../../assets/variables.css';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import Container from '../Container/Container';

function SearchBar() {
  return (
    <Container>
      <div className="ui-search">
        <input type="text" className="ui-search__input" placeholder="Search" />
        <SearchIcon className="ui-search__icon" />
      </div>
    </Container>
  );
}

export default SearchBar;
