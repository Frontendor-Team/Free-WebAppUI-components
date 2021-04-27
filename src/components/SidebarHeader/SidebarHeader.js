import React from 'react';
import './SidebarHeader.css';
import Dropdown from '../Dropdown/Dropdown';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as Unfold } from '../../assets/Unfold.svg';

function SidebarHeader({ userName, dropdownListData, showDropdown, toggleDropdown }) {
  return (
    <div className="left-header" role="button" onClick={toggleDropdown}>
      <div className="left-header__logo">
        <Logo />
      </div>
      <div className="left-header__user-info">
        <h1 className="username">{userName}</h1>
        <p className="page">Workspace</p>
      </div>
      <button className="left-header__btn">
        <Unfold className="unfold" />
      </button>
      <Dropdown dropdownListData={dropdownListData} showDropdown={showDropdown} />
    </div>
  );
}

export default SidebarHeader;
