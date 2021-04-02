import React from 'react';
import './LongNav.css';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Alert from '../Alert/Alert';
import Container from '../Container/Container';
import Wrapper from '../Wrapper/Wrapper';
import Title from '../Title/Title';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

function LongNav({ navItems }) {
  return (
    <Wrapper>
      <Container>
        <div className="long-nav">
          <div className="long-nav__header">
            <Button color="light">
              Upgrade Plan <Arrow className="circled-arrow" />
            </Button>
            <Title flexOrder="flex-order">Subscription</Title>
          </div>
          <Navbar navItems={navItems} />
        </div>
      </Container>
      <Alert />
    </Wrapper>
  );
}

export default LongNav;
