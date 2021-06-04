import React from 'react';
import '../../assets/variables.css';
import './SidebarHeader.css';
import Dropdown from '../Dropdown/Dropdown';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as Unfold } from '../../assets/Unfold.svg';

function SidebarHeader({ userName, dropdownListData, showDropdown, toggleDropdown }) {
  return (
    <div className="ui-left-header" role="button" onClick={toggleDropdown}>
      <div className="ui-left-header__logo">
        <Logo />
      </div>
      <div className="ui-left-header__user-info">
        <h1 className="ui-username">{userName}</h1>
        <p className="ui-page">Workspace</p>
      </div>
      <button className="ui-left-header__btn">
        <Unfold className="ui-unfold" />
      </button>
      <Dropdown dropdownListData={dropdownListData} showDropdown={showDropdown} />
    </div>
  );
}

export default SidebarHeader;
