import React from 'react';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

function LeftMenuShort({ sidebarData }) {
  return (
    <div>
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <SidebarHeader />
        </div>
        <SidebarMenu sidebarData={sidebarData} />
      </div>
    </div>
  );
}

export default LeftMenuShort;
