import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import { ReactComponent as Overview } from '../../assets/Overview.svg';
import { ReactComponent as Notes } from '../../assets/Notes.svg';
import { ReactComponent as Storage } from '../../assets/Storage.svg';
import { ReactComponent as Messages } from '../../assets/Messages.svg';
import { ReactComponent as Onboarding } from '../../assets/Onboarding.svg';
import { ReactComponent as Settings } from '../../assets/Settings.svg';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
};

const Template = (args) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSideBarVisibility = () => {
    setShowSidebar(!showSidebar);
  };

  const [selectedSubNav, setSelectedSubNav] = useState(1);

  const toggleSubnav = (id) => {
    setSelectedSubNav(id);
  };

  return (
    <SidebarMenu
      {...args}
      showSidebar={showSidebar}
      toggleSideBarVisibility={toggleSideBarVisibility}
      toggleSubnav={toggleSubnav}
      selectedSubNav={selectedSubNav}
    />
  );
};

export const Menu = Template.bind({});
Menu.args = {
  sidebarData: [
    {
      id: 1,
      text: 'Overview',
      icon: <Overview />,
      link: '/#',
    },
    {
      id: 2,
      text: 'Notes',
      icon: <Notes />,
      link: '/#',
    },
    {
      id: 3,
      text: 'Storage',
      icon: <Storage />,
      link: '/#',
    },
    {
      id: 4,
      text: 'Messages',
      icon: <Messages />,
      link: '/#',
    },
    {
      id: 5,
      text: 'Onboarding',
      icon: <Onboarding />,
      link: '/#',
    },
    {
      id: 6,
      text: 'Settings',
      icon: <Settings />,
      link: '/#',
    },
  ],
};

export const MenuWithSubNav = Template.bind({});
MenuWithSubNav.args = {
  sidebarData: [
    {
      id: 1,
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
      id: 2,
      text: 'Notes',
      icon: <Notes />,
      link: '/#',
    },
    {
      id: 3,
      text: 'Storage',
      icon: <Storage />,
      link: '/#',
    },
    {
      id: 4,
      text: 'Messages',
      icon: <Messages />,
      link: '/#',
    },
    {
      id: 5,
      text: 'Onboarding',
      icon: <Onboarding />,
      link: '/#',
    },
    {
      id: 6,
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
};
