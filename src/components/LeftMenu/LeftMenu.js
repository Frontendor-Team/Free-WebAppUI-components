import React from 'react';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

function LeftMenu({
  sidebarData,
  userName,
  avatar,
  showAccountMenu,
  accountListData,
  toggleAccountMenu,
  dropdownListData,
  showDropdown,
  toggleDropdown,
  showSidebar,
  toggleSideBarVisibility,
}) {
  return (
    <div className="ui-sidebar-wrapper">
      <div className="ui-sidebar-header">
        <SidebarHeader
          userName={userName}
          dropdownListData={dropdownListData}
          showDropdown={showDropdown}
          toggleDropdown={toggleDropdown}
        />
      </div>
      <SidebarMenu
        avatar={avatar}
        sidebarData={sidebarData}
        showSidebar={showSidebar}
        toggleSideBarVisibility={toggleSideBarVisibility}
        showAccountMenu={showAccountMenu}
        accountListData={accountListData}
        toggleAccountMenu={toggleAccountMenu}
      />
    </div>
  );
}

export default LeftMenu;
