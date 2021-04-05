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

  const [selectedSubNav, setSelectedSubNav] = useState(false);

  const toggleSubnav = (text) => {
    if (selectedSubNav == text) {
      return setSelectedSubNav(null);
    }
    setSelectedSubNav(text);
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
};

export const MenuWithSubNav = Template.bind({});
MenuWithSubNav.args = {
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
};
