import React from 'react';
import '../../assets/variables.css';
import './LongNavWithSearch.css';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Alert from '../Alert/Alert';
import Container from '../Container/Container';
import Wrapper from '../Wrapper/Wrapper';
import Title from '../Title/Title';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

function LongNavWithSearch({ navItems, showMenu, toggleMenuVisibility }) {
  return (
    <Wrapper>
      <Container>
        <div className="ui-long-nav">
          <div className="ui-long-nav__header">
            <Button color="primary-empty" usage="ui-long-nav__btn">
              Upgrade Plan <Arrow className="ui-circled-arrow" />
            </Button>
            <Title flexOrder="flex-order">Subscription</Title>
          </div>
          <Navbar
            navItems={navItems}
            showMenu={showMenu}
            toggleMenuVisibility={toggleMenuVisibility}
          />
        </div>
      </Container>
      <hr class="ui-top-nav__divider" />
      <SearchBar />
      <Alert />
    </Wrapper>
  );
}

export default LongNavWithSearch;
