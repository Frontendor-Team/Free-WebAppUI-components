import React, { useState } from 'react';
import { ReactComponent as ArrowUp } from '../../assets/ArrowUp.svg';
import './SideBarStyle1.css';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const { index, icon, text, subNav } = item;

  return (
    <li key={index}>
      {/* passing # instead of link for testing */}
      <a href="#" onClick={subNav && showSubnav}>
        {icon} <span>{text}</span>
        {item.subNav && (
          <button>
            <ArrowUp className={`arrow-up ${subnav ? '' : 'rotate'}`}></ArrowUp>
          </button>
        )}
      </a>
      <ul>
        {subnav &&
          subNav &&
          subNav.map((subNavItem, index) => {
            return (
              <li key={index}>
                <a href={subNavItem.path}>{subNavItem.label}</a>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default SubMenu;
