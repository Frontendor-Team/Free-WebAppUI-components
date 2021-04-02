import React from 'react';
import './LongNavWithSearch.css';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Alert from '../Alert/Alert';
import Container from '../Container/Container';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

function LongNavWithSearch({ navItems }) {
  return (
    <div className="wrapper">
      <Container>
        <div className="long-nav">
          <div className="long-nav__header">
            <Button color="light">
              Upgrade Plan <Arrow className="circled-arrow" />
            </Button>
            <h1 className="title flex-order">Subscription</h1>
          </div>
          <Navbar navItems={navItems} />
        </div>
      </Container>
      <hr className="divider" />
      <SearchBar />
      <Alert />
    </div>
  );
}

export default LongNavWithSearch;
