import React, { useState } from 'react';
import LeftMenu from './LeftMenu';
import avatar from '../../assets/picture@3x.jpg';
import { ReactComponent as Overview } from '../../assets/Overview.svg';
import { ReactComponent as Notes } from '../../assets/Notes.svg';
import { ReactComponent as Storage } from '../../assets/Storage.svg';
import { ReactComponent as Messages } from '../../assets/Messages.svg';
import { ReactComponent as Onboarding } from '../../assets/Onboarding.svg';
import { ReactComponent as Settings } from '../../assets/Settings.svg';

export default {
  title: '2. Left style/LeftMenu',
  component: LeftMenu,
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

  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  const [showDropdown, setshowDropdown] = useState(false);
  const toggleDropdown = () => {
    setshowDropdown(!showDropdown);
  };

  return (
    <LeftMenu
      {...args}
      showSidebar={showSidebar}
      toggleSideBarVisibility={toggleSideBarVisibility}
      showDropdown={showDropdown}
      toggleDropdown={toggleDropdown}
      showAccountMenu={showAccountMenu}
      toggleAccountMenu={toggleAccountMenu}
    />
  );
};

export const MenuRegular = Template.bind({});
MenuRegular.args = {
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
      link: '#overview',
    },
    {
      text: 'Notes',
      icon: <Notes />,
      link: '#notes',
    },
    {
      text: 'Storage',
      icon: <Storage />,
      link: '#storage',
    },
    {
      text: 'Messages',
      icon: <Messages />,
      link: '#messages',
    },
    {
      text: 'Onboarding',
      icon: <Onboarding />,
      link: '#onboarding',
    },
    {
      text: 'Settings',
      icon: <Settings />,
      link: '#settings',
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
