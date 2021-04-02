import React from 'react';
import './WelcomeHeader.css';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import Wrapper from '../Wrapper/Wrapper';

import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

function WelcomeHeader({ name }) {
  return (
    <Wrapper>
      <Container>
        <header className="welcome">
          <Button color="light" usage="welcome__btn">
            Upgrade Plan
            <Arrow className="circled-arrow" />
          </Button>
          <h1 className="title">
            Welcome, {name}
            <span role="img" aria-label="hand waving">
              👋
            </span>
          </h1>
          <p className="welcome__subheading">
            You have to keep up the pace to accomplish your goals in time.
          </p>
        </header>
      </Container>
      <Alert alertText="Your user count is at the upper limit. You should upgrade soon." />
    </Wrapper>
  );
}

export default WelcomeHeader;
