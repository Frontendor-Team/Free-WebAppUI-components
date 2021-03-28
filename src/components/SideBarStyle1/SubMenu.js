import React, { useState } from 'react';
import { ReactComponent as ArrowUp } from '../../assets/ArrowUp.svg';
import './SideBarStyle1.css';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const { index, icon, text, subNav } = item;

  return (
    <li key={index}>
      <a href="#">
        {icon} <span>{text}</span>
      </a>
      {item.subNav && (
        <button>
          <ArrowUp
            onClick={subNav && showSubnav}
            className={`arrow-up ${subnav ? '' : 'rotate'}`}
          ></ArrowUp>
        </button>
      )}
      <ul>
        {subnav &&
          subNav &&
          subNav.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default SubMenu;
