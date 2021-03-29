import React, { useState } from 'react';
import { ReactComponent as ArrowUp } from '../../assets/ArrowUp.svg';
import { ReactComponent as ArrowRight } from '../../assets/ArrowRight.svg';

import './SidebarMenu.css';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const { index, icon, text, subNav } = item;

  return (
    <li className="menu-item" key={index}>
      {/* passing # instead of link for testing */}
      <a href="#" onClick={subNav && showSubnav} className="menu-link">
        {icon} <span className="menu-label">{text}</span>
        {item.subNav && <ArrowUp className={`arrow-up ${subnav ? 'rotate' : ''}`}></ArrowUp>}
        {item.subNav && (
          <ArrowRight className={`arrow-right ${subnav ? 'rotate' : ''}`}></ArrowRight>
        )}
      </a>
      {subNav && (
        <ul className={`left-style__subnav ${subnav ? 'open' : 'closed'}`}>
          {subnav &&
            subNav.map((subNavItem, index) => {
              return (
                <li className="subnav-item" key={index}>
                  {/* passing # instead of subNavItem.path for testing */}
                  <a href="#" className="subnav-link">
                    {subNavItem.label}
                  </a>
                </li>
              );
            })}
        </ul>
      )}
    </li>
  );
};

export default SubMenu;
