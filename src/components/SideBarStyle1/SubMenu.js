import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { ReactComponent as ArrowUp } from '../../assets/ArrowUp.svg';

const SubMenu = (item) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <ul>
      {SidebarData.map((item, index) => {
        return (
          <li key={index}>
            <a href="/" onClick={item.subNav && showSubnav}>
              {item.icon} <span>{item.text}</span>
            </a>
            {item.subNav && (
              <button onClick={showSubnav}>
                <ArrowUp className="arrow-up"></ArrowUp>
              </button>
            )}
            {/* {subnav &&
              item.subNav.map((item, index) => {
                return (
                  <ul>
                    <li key={index}>
                      <a href="/">{item} </a>
                    </li>
                  </ul>
                );
              })} */}
            <ul>
              {subnav &&
                item.subNav &&
                item.subNav.title.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
