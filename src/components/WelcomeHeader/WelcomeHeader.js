import React from 'react';
import './WelcomeHeader.css';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

function WelcomeHeader() {
  return (
    <div className="wrapper">
      <header className="welcome container">
        <Button variantColor="light" location="welcome__btn">
          Upgrade Plan
          <Arrow className="circled-arrow" />
        </Button>
        <h1 className="welcome__heading">
          Welcome, Ali
          <span role="img" aria-label="hand waving">
            👋
          </span>
        </h1>
        <p className="welcome__subheading">
          You have to keep up the pace to accomplish your goals in time.
        </p>
      </header>
      <Alert alertText="Your user count is at the upper limit. You should upgrade soon." />
    </div>
  );
}

export default WelcomeHeader;
