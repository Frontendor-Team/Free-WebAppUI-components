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

  return (
    <LeftMenu
      {...args}
      showSidebar={showSidebar}
      toggleSideBarVisibility={toggleSideBarVisibility}
    />
  );
};

export const MenuRegular = Template.bind({});
MenuRegular.args = {
  sidebarData: [
    {
      text: 'Overview',
      icon: <Overview />,
      link: '/overview',
    },
    {
      text: 'Notes',
      icon: <Notes />,
      link: '/notes',
    },
    {
      text: 'Storage',
      icon: <Storage />,
      link: '/storage',
    },
    {
      text: 'Messages',
      icon: <Messages />,
      link: '/messages',
    },
    {
      text: 'Onboarding',
      icon: <Onboarding />,
      link: '/onboarding',
    },
    {
      text: 'Settings',
      icon: <Settings />,
      link: '/settings',
    },
  ],
};
