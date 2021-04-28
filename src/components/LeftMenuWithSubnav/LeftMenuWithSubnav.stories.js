import React, { useState } from 'react';
import LeftMenuWithSubnav from './LeftMenuWithSubnav';
import avatar from '../../assets/picture@3x.jpg';
import { ReactComponent as Overview } from '../../assets/Overview.svg';
import { ReactComponent as Notes } from '../../assets/Notes.svg';
import { ReactComponent as Storage } from '../../assets/Storage.svg';
import { ReactComponent as Messages } from '../../assets/Messages.svg';
import { ReactComponent as Onboarding } from '../../assets/Onboarding.svg';
import { ReactComponent as Settings } from '../../assets/Settings.svg';

export default {
  title: 'Left style/LeftMenuWithSubnav',
  component: LeftMenuWithSubnav,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSideBarVisibility = () => {
    setShowSidebar(!showSidebar);
  };

  const [selectedSubNav, setSelectedSubNav] = useState(false);
  const toggleSubnav = (id) => {
    if (selectedSubNav == id) {
      return setSelectedSubNav(null);
    }
    setSelectedSubNav(id);
  };

  const [showDropdown, setshowDropdown] = useState(false);
  const toggleDropdown = () => {
    setshowDropdown(!showDropdown);
  };

  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  return (
    <LeftMenuWithSubnav
      {...args}
      showSidebar={showSidebar}
      toggleSideBarVisibility={toggleSideBarVisibility}
      selectedSubNav={selectedSubNav}
      toggleSubnav={toggleSubnav}
      showDropdown={showDropdown}
      toggleDropdown={toggleDropdown}
      showAccountMenu={showAccountMenu}
      toggleAccountMenu={toggleAccountMenu}
    />
  );
};

export const MenuLarge = Template.bind({});
MenuLarge.args = {
  userName: 'Ali Boukeroui',
  avatar: avatar,
  accountListData: [
    {
      labelFor: 'Edit Profile',
      pathTo: '#edit-profile',
    },
    {
      labelFor: 'Change Password',
      pathTo: '#change-password',
    },
    {
      labelFor: 'Authentication',
      pathTo: '#authentication',
    },
  ],
  sidebarData: [
    {
      text: 'Overview',
      icon: <Overview />,
      // link: '/#',
      subNav: [
        { label: 'Analytics', path: '/#' },
        { label: 'Company Benefits', path: '/#' },
        { label: 'Time Tracking', path: '/#' },
      ],
    },
    {
      text: 'Notes',
      icon: <Notes />,
      // link: '/#',
    },
    {
      text: 'Storage',
      icon: <Storage />,
      // link: '/#',
    },
    {
      text: 'Messages',
      icon: <Messages />,
      // link: '/#',
    },
    {
      text: 'Onboarding',
      icon: <Onboarding />,
      // link: '/#',
    },
    {
      text: 'Settings',
      icon: <Settings />,
      // link: '/#',
      subNav: [
        { label: 'General', path: '/#' },
        { label: 'Security', path: '/#' },
        { label: 'Privacy', path: '/#' },
        { label: 'Surveys', path: '/#' },
        { label: 'Languages', path: '/#' },
        { label: 'Subscription', path: '/#' },
      ],
    },
  ],
  dropdownListData: [
    {
      text: 'Workspace',
      link: '#workspace',
    },
    {
      text: 'Workspace_01',
      link: '#workspace_01',
    },
    {
      text: 'Workspace_02',
      link: '#workspace_02',
    },
    {
      text: 'Workspace_03',
      link: '#workspace_03',
    },
  ],
};
