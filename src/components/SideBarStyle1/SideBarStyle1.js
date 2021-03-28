import React, { useState } from 'react';
import './SideBarStyle1.css';
import avatar from '../../assets/picture@3x.jpg';
import { ReactComponent as Hamburger } from '../../assets/Menu.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

function SideBarStyle1() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSideBarVisibility = () => {
    setShowSidebar(!showSidebar);
  };

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
        <ul>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </ul>
      </nav>
    </>
  );
}

export default SideBarStyle1;
