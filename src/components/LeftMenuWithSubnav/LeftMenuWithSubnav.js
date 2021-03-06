import React from 'react';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import '../../assets/variables.css';
import './LeftMenuWithSubnav.css';

function LeftMenuWithSubnav({
  sidebarData,
  userName,
  avatar,
  showAccountMenu,
  accountListData,
  toggleAccountMenu,
  showSidebar,
  toggleSideBarVisibility,
  selectedSubNav,
  toggleSubnav,
  dropdownListData,
  showDropdown,
  toggleDropdown,
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
        sidebarData={sidebarData}
        showSidebar={showSidebar}
        toggleSideBarVisibility={toggleSideBarVisibility}
        selectedSubNav={selectedSubNav}
        toggleSubnav={toggleSubnav}
        avatar={avatar}
        showAccountMenu={showAccountMenu}
        accountListData={accountListData}
        toggleAccountMenu={toggleAccountMenu}
      />
    </div>
  );
}

export default LeftMenuWithSubnav;
