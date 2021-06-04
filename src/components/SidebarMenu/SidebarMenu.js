import React from 'react';
import '../../assets/variables.css';
import './SidebarMenu.css';
// import avatar from '../../assets/picture@3x.jpg';
import { ReactComponent as Hamburger } from '../../assets/Menu.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';
import { ReactComponent as ArrowUp } from '../../assets/ArrowUp.svg';
import { ReactComponent as ArrowRight } from '../../assets/ArrowRight.svg';

function SidebarMenu({
  avatar,
  showAccountMenu,
  toggleAccountMenu,
  accountListData,
  sidebarData,
  showSidebar,
  toggleSideBarVisibility,
  selectedSubNav,
  toggleSubnav,
}) {
  return (
    <nav className="ui-left-style">
      <div className="ui-left-style__user">
        <button className="ui-account-btn" onClick={toggleAccountMenu}>
          <img src={avatar} className="ui-avatar" alt="user-avatar" />
          <span className="ui-status"></span>
          Account
          <ArrowUp className={`ui-account-menu-arrow ${showAccountMenu ? 'ui-turn' : ''}`} />
        </button>
        <button className="ui-left-style__btn" onClick={toggleSideBarVisibility}>
          {showSidebar ? <Close /> : <Hamburger />}
        </button>
      </div>
      <ul className={`ui-account-menu ${showAccountMenu ? 'ui-account-menu--open' : ''}`}>
        {accountListData.map(({ labelFor, pathTo }, index) => {
          return (
            <li className="ui-account-menu__item" key={index}>
              <a href={pathTo} className="ui-account-menu__link" onClick={toggleAccountMenu}>
                {labelFor}
              </a>
            </li>
          );
        })}
      </ul>
      <ul
        className={`${
          showSidebar ? 'ui-left-style__menu ui-left-style__menu--open' : 'ui-left-style__menu'
        }`}
      >
        {sidebarData.map(({ icon, text, subNav, link }, index) => {
          const showMenuDropdown =
            text === selectedSubNav
              ? 'ui-left-style__subnav ui-left-style__subnav--open'
              : 'ui-left-style__subnav';

          const selectedSubnavItem = subNav && selectedSubNav && text === selectedSubNav;
          return (
            <li className="ui-menu-item" key={index}>
              <a
                href="#"
                onClick={() => toggleSubnav(text)}
                className={`ui-menu-link ${selectedSubnavItem ? 'ui-focused-link' : ''}`}
              >
                <span
                  className={`ui-menu-icon
                    ${selectedSubnavItem ? 'ui-focused-icon' : ''}`}
                >
                  {icon && icon}
                </span>
                <span className={`ui-menu-label ${selectedSubnavItem ? 'ui-fade' : ''}`}>
                  {text}
                </span>
                {subNav && (
                  <ArrowUp
                    className={`ui-arrow-up ${
                      selectedSubNav && selectedSubNav === text ? 'ui-rotate' : ''
                    }`}
                  ></ArrowUp>
                )}
                {subNav && (
                  <ArrowRight
                    className={`ui-arrow-right ${
                      selectedSubNav && selectedSubNav === text ? 'ui-fade' : ''
                    }`}
                  ></ArrowRight>
                )}
              </a>
              {subNav && (
                <ul className={showMenuDropdown}>
                  {subNav.map(({ path, label }, index) => {
                    return (
                      <li className="ui-subnav-item" key={index}>
                        <a href="#" className="ui-subnav-link">
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SidebarMenu;
