import React from 'react';
import '../../assets/variables.css';
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
import Dropdown from '../Dropdown/Dropdown';

function ShortNav({
  navItems,
  showMenu,
  toggleMenuVisibility,
  dropdownListData,
  showDropdown,
  toggleDropdown,
}) {
  return (
    <Wrapper>
      <SearchBar />
      <hr className="ui-top-nav__divider" />
      <Container>
        <div className="ui-short-nav">
          <div className="ui-short-nav__header">
            <div className="ui-short-nav__cta">
              <Button color="primary" usage="ui-short-nav__btn--dark">
                Add Files
                <Add className="ui-add-icon" />
              </Button>
              <div class="ui-short-nav__btn--with-dropdown">
                <Button
                  color="primary-empty"
                  usage="ui-short-nav__btn--light"
                  onClick={toggleDropdown}
                >
                  <Dots className="ui-dots-icon" />
                </Button>
                <Dropdown
                  dropdownListData={dropdownListData}
                  showDropdown={showDropdown}
                  toggleDropdown={toggleDropdown}
                />
              </div>
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
