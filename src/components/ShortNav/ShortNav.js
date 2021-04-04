import React from 'react';
import './ShortNav.css';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Alert from '../Alert/Alert';
import Container from '../Container/Container';
import Wrapper from '../Wrapper/Wrapper';
import Title from '../Title/Title';
import { ReactComponent as Add } from '../../assets/Add.svg';
import { ReactComponent as Dots } from '../../assets/Dots.svg';

function ShortNav({ navItems, showMenu, toggleMenuVisibility }) {
  return (
    <Wrapper>
      <SearchBar />
      <hr className="divider" />
      <Container>
        <div className="short-nav">
          <div className="short-nav__header">
            <div className="short-nav__cta">
              <Button color="dark" usage="short-nav__btn--dark">
                Add Files
                <Add className="add-icon" />
              </Button>
              <Button color="light" usage="short-nav__btn--light">
                <Dots className="dots-icon" />
              </Button>
            </div>
            <Title flexOrder="flex-order">Main Library</Title>
          </div>
          <Navbar
            navItems={navItems}
            showMenu={showMenu}
            toggleMenuVisibility={toggleMenuVisibility}
          />
        </div>
      </Container>
      <Alert />
    </Wrapper>
  );
}

export default ShortNav;
