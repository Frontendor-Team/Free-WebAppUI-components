import React from 'react';
import './SidebarHeader.css';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as Unfold } from '../../assets/Unfold.svg';

function SidebarHeader() {
  return (
    <div className="left-header">
      <div className="left-header__logo">
        <Logo />
      </div>
      <div className="left-header__user-info">
        <h1 className="username">Ali Boukeroui</h1>
        <p className="page">Workspace</p>
      </div>
      <div className="left-header__btn">
        <Unfold className="unfold" />
      </div>
    </div>
  );
}

export default SidebarHeader;
