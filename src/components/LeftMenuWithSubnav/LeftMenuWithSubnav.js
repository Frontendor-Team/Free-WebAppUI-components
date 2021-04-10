import React from 'react';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import './LeftMenuWithSubnav.css';

function LeftMenuWithSubnav({
  sidebarData,
  userName,
  showSidebar,
  toggleSideBarVisibility,
  selectedSubNav,
  toggleSubnav,
  dropdownListData,
  showDropdown,
  toggleDropdown,
}) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-header">
        <SidebarHeader
          userName={userName}
          dropdownListData={dropdownListData}
          showDropdown={showDropdown}
          toggleDropdown={toggleDropdown}
        />
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
