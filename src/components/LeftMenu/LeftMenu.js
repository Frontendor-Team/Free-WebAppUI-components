import React from 'react';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

function LeftMenu({
  sidebarData,
  userName,
  dropdownListData,
  showDropdown,
  toggleDropdown,
  showSidebar,
  toggleSideBarVisibility,
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
      />
    </div>
  );
}

export default LeftMenu;
