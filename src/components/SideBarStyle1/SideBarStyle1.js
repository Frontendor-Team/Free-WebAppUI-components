import React, { useState } from 'react';
import './SideBarStyle1.css';
import avatar from '../../assets/picture@3x.jpg';
import { ReactComponent as Hamburger } from '../../assets/Menu.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';
// import { SidebarData } from './SidebarData';
// import { ReactComponent as ArrowUp } from '../../assets/ArrowUp.svg';
import SubMenu from './SubMenu';

function SideBarStyle1() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSideBarVisibility = () => {
    setShowSidebar(!showSidebar);
  };

  // const [subnav, setSubnav] = useState(false);
  // const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <nav className="left-style">
        <div className="left-style__user">
          <div className="avatar">
            <img src={avatar} className="avatar-img" alt="user-avatar" />
            <span className="status"></span>
            Account
          </div>
          <button className="left-style__btn" onClick={toggleSideBarVisibility}>
            {showSidebar ? <Close /> : <Hamburger className="hamburger" />}
          </button>
        </div>
        <SubMenu />

        {/* <ul>
          {SidebarData.map((item, index) => {
            return (
              <li key={index}>
                <a href="/" onClick={item.subNav && showSubnav}>
                  {item.icon} <span>{item.text}</span>
                </a>
                <button onClick={showSubnav}>
                  {item.subNav && <ArrowUp className="arrow-up" />}
                </button>
                {subnav &&
                  item.subNav.map((item, index) => {
                    return (
                      <ul>
                        <li key={index}>
                          <a href="/">{item} </a>
                        </li>
                      </ul>
                    );
                  })}
              </li>
            );
          })}
        </ul> */}
      </nav>
    </>
  );
}

export default SideBarStyle1;
