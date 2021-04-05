import React from 'react';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

function LeftMenuShort({
  sidebarData,
  showSidebar,
  toggleSideBarVisibility,
  toggleSubnav,
  selectedSubNav,
}) {
  return (
    <div>
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <SidebarHeader />
        </div>
        <SidebarMenu
          sidebarData={sidebarData}
          showSidebar={showSidebar}
          toggleSideBarVisibility={toggleSideBarVisibility}
          toggleSubnav={toggleSubnav}
          selectedSubNav={selectedSubNav}
        />
      </div>
    </div>
  );
}

export default LeftMenuShort;
