import React from 'react';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import './LeftMenuWithSubnav.css';

function LeftMenuWithSubnav({
  sidebarData,
  showSidebar,
  toggleSideBarVisibility,
  selectedSubNav,
  toggleSubnav,
}) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-header">
        <SidebarHeader />
      </div>
      <SidebarMenu
        sidebarData={sidebarData}
        showSidebar={showSidebar}
        toggleSideBarVisibility={toggleSideBarVisibility}
        selectedSubNav={selectedSubNav}
        toggleSubnav={toggleSubnav}
      />
    </div>
  );
}

export default LeftMenuWithSubnav;
