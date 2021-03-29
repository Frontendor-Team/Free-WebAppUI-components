import React from 'react';
import { ReactComponent as Overview } from '../../assets/Overview.svg';
import { ReactComponent as Notes } from '../../assets/Notes.svg';
import { ReactComponent as Storage } from '../../assets/Storage.svg';
import { ReactComponent as Messages } from '../../assets/Messages.svg';
import { ReactComponent as Onboarding } from '../../assets/Onboarding.svg';
import { ReactComponent as Settings } from '../../assets/Settings.svg';

export const SidebarData = [
  {
    text: 'Overview',
    icon: <Overview />,
    link: '/overview',
    subNav: [
      { label: 'analytics', path: '/analytics' },
      { label: 'company benefits', path: '/company-benefits' },
      { label: 'time tracking', path: '/time-tracking' },
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
      { label: 'general', path: '/general' },
      { label: 'security', path: '/security' },
      { label: 'privacy', path: '/privacy' },
      { label: 'surveys', path: '/surveys' },
      { label: 'languages', path: '/languages' },
      { label: 'subscription', path: '/subscription' },
    ],
  },
];
