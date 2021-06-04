import React from 'react';
import '../../assets/variables.css';
import './SimpleHeader.css';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Alert from '../Alert/Alert';
import Wrapper from '../Wrapper/Wrapper';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

function SimpleHeader({ title }) {
  return (
    <Wrapper>
      <Container>
        <header className="ui-simple-header">
          <Button color="primary-empty" usage="ui-simple-header__btn">
            Upgrade Plan
            <Arrow className="ui-circled-arrow" />
          </Button>
          <Title>{title}</Title>
          <p className="ui-simple-header__subheading">
            You have to keep up the pace to accomplish your goals in time.
          </p>
        </header>
      </Container>
      <Alert alertText="Your user count is at the upper limit. You should upgrade soon." />
    </Wrapper>
  );
}

export default SimpleHeader;
