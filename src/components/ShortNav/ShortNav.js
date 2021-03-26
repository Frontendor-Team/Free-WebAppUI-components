import React from 'react';
import './ShortNav.css';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Alert from '../Alert/Alert';
import { ReactComponent as Add } from '../../assets/Add.svg';
import { ReactComponent as Dots } from '../../assets/Dots.svg';

function ShortNav() {
  return (
    <>
      <div className="wrapper">
        <SearchBar />
        <hr className="short-nav__divider" />
        <div className="short-nav container">
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
            <h1 className="title flex-order">Main Library</h1>
          </div>
          <Navbar links={['files', 'activities', 'overviews']} />
        </div>
        <Alert />
      </div>
    </>
  );
}

export default ShortNav;
