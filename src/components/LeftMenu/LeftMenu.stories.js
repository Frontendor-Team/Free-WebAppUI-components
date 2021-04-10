import React, { useState } from 'react';
import LeftMenu from './LeftMenu';
import { ReactComponent as Overview } from '../../assets/Overview.svg';
import { ReactComponent as Notes } from '../../assets/Notes.svg';
import { ReactComponent as Storage } from '../../assets/Storage.svg';
import { ReactComponent as Messages } from '../../assets/Messages.svg';
import { ReactComponent as Onboarding } from '../../assets/Onboarding.svg';
import { ReactComponent as Settings } from '../../assets/Settings.svg';

export default {
  title: 'Left style/LeftMenu',
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
    />
  );
};

export const MenuRegular = Template.bind({});
MenuRegular.args = {
  userName: 'Ali Boukeroui',
  sidebarData: [
    {
      text: 'Overview',
      icon: <Overview />,
      link: '/#',
    },
    {
      text: 'Notes',
      icon: <Notes />,
      link: '/#',
    },
    {
      text: 'Storage',
      icon: <Storage />,
      link: '/#',
    },
    {
      text: 'Messages',
      icon: <Messages />,
      link: '/#',
    },
    {
      text: 'Onboarding',
      icon: <Onboarding />,
      link: '/#',
    },
    {
      text: 'Settings',
      icon: <Settings />,
      link: '/#',
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
