import React from 'react';
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

const Template = (args) => <SidebarMenu {...args} />;

export const Menu = Template.bind({});
Menu.args = {
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

export const MenuWithSubNav = Template.bind({});
MenuWithSubNav.args = {
  sidebarData: [
    {
      text: 'Overview',
      icon: <Overview />,
      link: '/overview',
      subNav: [
        { label: 'Analytics', path: '/analytics' },
        { label: 'Company Benefits', path: '/company-benefits' },
        { label: 'Time Tracking', path: '/time-tracking' },
      ],
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
      subNav: [
        { label: 'General', path: '/general' },
        { label: 'Security', path: '/security' },
        { label: 'Privacy', path: '/privacy' },
        { label: 'Surveys', path: '/surveys' },
        { label: 'Languages', path: '/languages' },
        { label: 'Subscription', path: '/subscription' },
      ],
    },
  ],
};