import React from 'react';
import './LongNav.css';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Alert from '../Alert/Alert';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

function LongNav({ navItems }) {
  return (
    <div className="wrapper">
      <div className="long-nav container">
        <div className="long-nav__header">
          <Button color="light">
            Upgrade Plan <Arrow className="circled-arrow" />
          </Button>
          <h1 className="title flex-order">Subscription</h1>
        </div>
        <Navbar navItems={navItems} />
      </div>
      <Alert />
    </div>
  );
}

export default LongNav;
