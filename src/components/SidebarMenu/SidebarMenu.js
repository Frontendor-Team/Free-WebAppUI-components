import React from 'react';
import './SidebarMenu.css';
import avatar from '../../assets/picture@3x.jpg';
import { ReactComponent as Hamburger } from '../../assets/Menu.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';
import { ReactComponent as ArrowUp } from '../../assets/ArrowUp.svg';
import { ReactComponent as ArrowRight } from '../../assets/ArrowRight.svg';

function SidebarMenu({ sidebarData, showSidebar, toggleSideBarVisibility, subnav, toggleSubnav }) {
  return (
    <nav className="left-style">
      <div className="left-style__user">
        <div className="avatar">
          <img src={avatar} className="avatar-img" alt="user-avatar" />
          <span className="status"></span>
          Account
        </div>
        <button className="left-style__btn" onClick={toggleSideBarVisibility}>
          {showSidebar ? <Close /> : <Hamburger />}
        </button>
      </div>
      <ul className={`${showSidebar ? 'left-style__menu open' : 'left-style__menu'}`}>
        {sidebarData.map(({ icon, text, subNav, link }, index) => {
          return (
            <li className="menu-item" key={index}>
              <a href={link} onClick={() => toggleSubnav(index)} key={index} className="menu-link">
                {icon && icon} <span className="menu-label">{text}</span>
                {subNav && (
                  <ArrowUp
                    className={`arrow-up ${subnav && subnav === index ? 'rotate' : ''}`}
                  ></ArrowUp>
                )}
                {subNav && (
                  <ArrowRight
                    className={`arrow-right ${subnav && subnav === index ? 'rotate' : ''}`}
                  ></ArrowRight>
                )}
              </a>
              {subNav && subnav === index ? (
                <ul className={`${subnav ? 'left-style__subnav open' : 'left-style__subnav'}`}>
                  {subNav.map(({ path, label }, index) => {
                    return (
                      <li className="subnav-item" key={index}>
                        <a href={path} className="subnav-link">
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SidebarMenu;
