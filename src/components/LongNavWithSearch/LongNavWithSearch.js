import React from 'react';
import './LongNavWithSearch.css';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Alert from '../Alert/Alert';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

function LongNavWithSearch() {
  return (
    <>
      <div className="wrapper">
        <div className="long-nav container">
          <div className="long-nav__header">
            <Button color="light">
              Upgrade Plan <Arrow className="circled-arrow" />
            </Button>
            <h1 className="title">Subscription</h1>
          </div>
          <Navbar
            links={[
              'analytics',
              'plans',
              'user overview',
              'invoices',
              'payment details',
              'billing address',
            ]}
          />
        </div>

        <SearchBar />
        <Alert />
      </div>
    </>
  );
}

export default LongNavWithSearch;
